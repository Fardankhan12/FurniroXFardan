"use client";

import { useState } from "react";

export default function AdminDashboard() {
  const [message, setMessage] = useState("");

  const handleLogout = async () => {
    const res = await fetch("/api/admin/logout", {
      method: "POST",
    });

    if (res.ok) {
      setMessage("Logged out successfully!");
      window.location.href = "/admin/login"; // Redirect to login page after logout
    } else {
      setMessage("Logout failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h2>
        <p className="text-xl text-gray-700 mb-6">Welcome to the Admin Panel. From here, you can manage your platform.</p>

        {/* Cards for Admin Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Manage Products</h3>
            <p className="text-gray-600 mb-4">View, add, or edit products in your store.</p>
            <a
              href="/admin/products"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Go to Products
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Manage Customers</h3>
            <p className="text-gray-600 mb-4">View customer information and manage their accounts.</p>
            <a
              href="/admin/customers"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Go to Customers
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Manage Orders</h3>
            <p className="text-gray-600 mb-4">View and process customer orders.</p>
            <a
              href="/admin/orders"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Go to Orders
            </a>
          </div>
        </div>

        {/* Logout Section */}
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>

        {/* Logout Message */}
        {message && <p className="mt-4 text-center text-xl text-gray-700">{message}</p>}
      </div>
    </div>
  );
}
