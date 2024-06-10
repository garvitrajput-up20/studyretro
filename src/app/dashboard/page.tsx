// pages/dashboard.js
'use client';
import { useState } from "react";
import Header from "@/components/Header/Header";
import Link from "next/link";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "editProfile":
        return <EditProfile />;
      case "orders":
        return <MyOrders />;
      case "paymentMethods":
        return <PaymentMethods />;
      case "addressManagement":
        return <AddressManagement />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-8 px-5">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          User Dashboard
        </h1>
        <div className="flex flex-col md:flex-row">
          <nav className="w-full md:w-1/4 bg-white rounded-lg shadow-lg p-4 mb-4 md:mb-0 md:mr-4">
            <ul>
              <li>
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full text-left py-2 px-4 mb-2 rounded ${
                    activeTab === "profile"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  View Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("editProfile")}
                  className={`w-full text-left py-2 px-4 mb-2 rounded ${
                    activeTab === "editProfile"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  Edit Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full text-left py-2 px-4 mb-2 rounded ${
                    activeTab === "orders"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  My Orders
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("paymentMethods")}
                  className={`w-full text-left py-2 px-4 mb-2 rounded ${
                    activeTab === "paymentMethods"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  Payment Methods
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("addressManagement")}
                  className={`w-full text-left py-2 px-4 mb-2 rounded ${
                    activeTab === "addressManagement"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  Address Management
                </button>
              </li>
            </ul>
          </nav>
          <div className="w-full md:w-3/4 bg-white rounded-lg shadow-lg p-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

const Profile = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Profile</h2>
    <p>Name: John Doe</p>
    <p>Email: john.doe@example.com</p>
  </div>
);

const EditProfile = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 mt-1"
          defaultValue="John Doe"
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2 mt-1"
          defaultValue="john.doe@example.com"
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Save Changes
      </button>
    </form>
  </div>
);

const MyOrders = () => {
    // Sample order data
    const orders = [
      {
        orderId: "12345",
        date: "2024-06-01",
        total: "$29.99",
        status: "Shipped",
        items: [
          {
            id: 1,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            image: "https://m.media-amazon.com/images/I/41h1AktRBmL._SY445_SX342_.jpg",
            price: "$10.00",
          },
          {
            id: 2,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            image: "https://m.media-amazon.com/images/I/41h1AktRBmL._SY445_SX342_.jpg",
            price: "$15.00",
          },
        ],
      },
      {
        orderId: "67890",
        date: "2024-06-02",
        total: "$45.99",
        status: "Processing",
        items: [
          {
            id: 3,
            title: "1984",
            author: "George Orwell",
            image: "https://m.media-amazon.com/images/I/41h1AktRBmL._SY445_SX342_.jpg",
            price: "$20.00",
          },
          {
            id: 4,
            title: "Pride and Prejudice",
            author: "Jane Austen",
            image: "https://m.media-amazon.com/images/I/41h1AktRBmL._SY445_SX342_.jpg",
            price: "$25.00",
          },
        ],
      },
    ];
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">My Orders</h2>
        {orders.map((order) => (
          <div key={order.orderId} className="mb-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">Order #{order.orderId}</h3>
                <p className="text-gray-600">Placed on {order.date}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">{order.total}</p>
                <p className={`text-sm ${order.status === "Shipped" ? "text-green-600" : "text-yellow-600"}`}>{order.status}</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <img src={item.image} alt={item.title} className="w-16 h-20 object-cover mr-4 rounded" />
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-gray-600">by {item.author}</p>
                    <p className="text-gray-800 font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  

const PaymentMethods = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
    <ul className="list-disc pl-5">
      <li>Credit Card ending in 1234</li>
      <li>PayPal - john.doe@example.com</li>
    </ul>
  </div>
);

const AddressManagement = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Address Management</h2>
    <ul className="list-disc pl-5">
      <li>123 Main St, City, Country</li>
      <li>456 Secondary St, City, Country</li>
    </ul>
  </div>
);

export default Dashboard;
