"use client";

import RouteHero from "@/components/RouteHero";
import Services from "@/components/Services";
import React, { useState } from "react";
import { z } from "zod";
import BilllingDetails from "@/components/BilllingDetails";
import { useRouter } from "next/navigation";

const customerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50),
  streetAddress: z.string().min(5, "Street address must be at least 5 characters").max(100),
  city: z.string().min(2, "City is required").max(50),
  province: z.string().min(1, "Province is required"),
  zipCode: z.string().regex(/^\d+$/, "ZIP code must be a number").min(5).max(10),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  email: z.string().email("Invalid email format"),
});

function Page() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [province, setProvince] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalNotes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const provinces = ["Sindh", "Punjab", "Balochistan", "KPK", "Gilgit-Baltistan"];

  const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProvince(event.target.value);
    setCustomerInfo((prevState) => ({
      ...prevState,
      province: event.target.value,
    }));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setCustomerInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validate form
    const validationResult = customerSchema.safeParse(customerInfo);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0]] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsProcessing(true);

    // Prepare shipping data
    const shippingData = {
      ship_from: {
        name: "Your Company",
        address_line1: "123 Main St",
        city_locality: "Austin",
        state_province: "TX",
        postal_code: "78756",
        country_code: "US",
        phone: "+1 555-123-4567",
      },
      ship_to: {
        name: `${customerInfo.firstName} ${customerInfo.lastName}`.trim(),
        address_line1: customerInfo.streetAddress.trim(),
        city_locality: customerInfo.city.trim(),
        state_province: province, // Use selected province
        postal_code: customerInfo.zipCode.trim(),
        country_code: "PK", // Pakistan
        phone: customerInfo.phone.trim(),
        email: customerInfo.email.trim(),
        address_residential_indicator: "no",
      },
      packages: [
        {
          weight: { value: 20, unit: "pound" }, // Realistic weight
          dimensions: {
            length: 12,
            width: 10, // Realistic dimensions
            height: 8,
            unit: "inch",
          },
        },
      ],
      carrier_id: "se-1861706", // FedEx sandbox ID
      service_code: "fedex_ground",
    };

    try {
      console.log("Shipping Data:", JSON.stringify(shippingData, null, 2));

      // Create shipment
      const response = await fetch("/api/create-shipping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(shippingData),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Response Error:", errorDetails);
        throw new Error(`Failed to fetch rates. Status: ${response.status}`);
      }

      const shippingResult = await response.json();
      console.log("Shipping Response:", shippingResult);

      // Create customer
      const customerResponse = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...customerInfo, fullName: `${customerInfo.firstName} ${customerInfo.lastName}` }),
      });

      if (!customerResponse.ok) {
        const errorDetails = await customerResponse.text();
        console.error("Error creating customer:", errorDetails);
        throw new Error(`Failed to create customer. Status: ${customerResponse.status}`);
      }

      const customerResult = await customerResponse.json();
      console.log("Customer Creation Result:", customerResult);

      // Save order to Sanity
      const sanityResponse = await fetch("/api/sanity-create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId: customerResult._id,
          fullName: `${customerInfo.firstName} ${customerInfo.lastName}`,
          shipTo: {
            name: shippingResult.ship_to.name,
            phone: shippingResult.ship_to.phone,
            email: shippingResult.ship_to.email,
            addressLine1: shippingResult.ship_to.address_line1,
            city: shippingResult.ship_to.city_locality,
            state: shippingResult.ship_to.state_province,
            postalCode: shippingResult.ship_to.postal_code,
            country: shippingResult.ship_to.country_code,
          },
          trackingNumber: shippingResult.tracking_number,
          shipmentCost: shippingResult.shipment_cost?.amount || 0,
          trackingUrl: shippingResult.tracking_url,
          createdAt: shippingResult.created_at,
          labelPrint: shippingResult.label_download?.pdf,
          carrierCode: shippingResult.carrier_code,
          AdditionalInfo: customerInfo.additionalNotes,
        }),
      });

      if (!sanityResponse.ok) {
        throw new Error("Error saving order to Sanity.");
      }

      const sanityResult = await sanityResponse.json();
      console.log("Order Saved to Sanity:", sanityResult);

      setIsProcessing(false);
      router.push(`/order-confirmation/order?orderId=${sanityResult._id}`);
    } catch (error) {
      console.error("Error during submission:", error);
      alert("An error occurred while submitting the form.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="h-auto">
      <RouteHero prop="Checkout" />
      <div className="h-auto flex flex-col lg:grid lg:grid-cols-2 w-full px-4 md:px-10 lg:px-20 gap-10 lg:gap-20">
        {/* Billing Form */}
        <div className="flex justify-center md:items-start">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-[600px] py-10"
          >
            <h1 className="text-[24px] lg:text-[36px] font-semibold">Billing Details</h1>

            {/* First Name */}
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-2 w-full md:w-[48%]">
                <label className="text-sm md:text-base">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={customerInfo.firstName}
                  onChange={handleChange}
                  className="border-[#9F9F9F] border rounded-md px-4 py-2"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">{errors.firstName}</span>
                )}
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2 w-full md:w-[48%]">
                <label className="text-sm md:text-base">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={customerInfo.lastName}
                  onChange={handleChange}
                  className="border-[#9F9F9F] border rounded-md px-4 py-2"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">{errors.lastName}</span>
                )}
              </div>
            </div>

            {/* Street Address */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                value={customerInfo.streetAddress}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.streetAddress && (
                <span className="text-red-500 text-sm">{errors.streetAddress}</span>
              )}
            </div>

            {/* Town/City */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Town / City</label>
              <input
                type="text"
                name="city"
                value={customerInfo.city}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.city && (
                <span className="text-red-500 text-sm">{errors.city}</span>
              )}
            </div>

            {/* Province Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Province</label>
              <select
                value={province}
                name="province"
                onChange={handleProvinceChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2 bg-white"
              >
                <option value="" disabled>Select Province</option>
                {provinces.map((prov, index) => (
                  <option key={index} value={prov}>{prov}</option>
                ))}
              </select>
              {errors.province && (
                <span className="text-red-500 text-sm">{errors.province}</span>
              )}
            </div>

            {/* ZIP Code */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={customerInfo.zipCode}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.zipCode && (
                <span className="text-red-500 text-sm">{errors.zipCode}</span>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Phone</label>
              <input
                type="text"
                name="phone"
                value={customerInfo.phone}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Email Address</label>
              <input
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            {/* Additional Notes */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Additional Notes</label>
              <textarea
                rows={2}
                name="additionalNotes"
                value={customerInfo.additionalNotes}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.additionalNotes && (
                <span className="text-red-500 text-sm">{errors.additionalNotes}</span>
              )}
            </div>
          </form>
        </div>

        {/* Billing Details */}
        <div className="flex justify-center">
          <BilllingDetails
            handleCustomers={handleSubmit}
            isProcessing={isProcessing}
          />
        </div>
      </div>
      <Services />
    </div>
  );
}

export default Page;