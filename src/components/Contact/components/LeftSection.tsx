"use client";
import React, { useState } from "react";

function LeftSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="bg-gray-50 p-8 rounded-xl border border-gray-200"
      data-aos="fade-up"
    >
      <h2
        className="text-2xl font-bold mb-6 text-[#1c6fd1]"
        data-aos="fade-right"
      >
        Send Me a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div data-aos="fade-right" data-aos-delay="100">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#1c6fd1] focus:ring-2 focus:ring-[#1c6fd1]/20 transition-colors"
            placeholder="John Doe"
            required
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="200">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#1c6fd1] focus:ring-2 focus:ring-[#1c6fd1]/20 transition-colors"
            placeholder="example@example.com"
            required
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="300">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#1c6fd1] focus:ring-2 focus:ring-[#1c6fd1]/20 transition-colors"
            placeholder="Project inquiry"
            required
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="400">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#1c6fd1] focus:ring-2 focus:ring-[#1c6fd1]/20 transition-colors resize-none"
            placeholder="Tell me about your project..."
            required
          />
        </div>

        <button
          type="submit"
          data-aos="zoom-in"
          data-aos-delay="500"
          className="w-full bg-[#1c6fd1] hover:bg-[#2384eb] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default LeftSection;