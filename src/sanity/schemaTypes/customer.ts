
import { Rule } from "sanity";

export const customer = {
  name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(3).max(50),
    },
    {
      name: "email",
      title: "Email",
      type: "email",
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(10).max(15),
    },
    {
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        { name: "streetAddress", title: "Street", type: "string" },
        { name: "city", title: "City", type: "string" },
        { name: "province", title: "State", type: "string" },
        { name: "zipCode", title: "Zip Code", type: "string" },
      ],
    },
  ],
};
