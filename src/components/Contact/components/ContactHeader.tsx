import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

function ContactHeader() {
  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto px-8 py-8">
        <div
          className="mb-16 max-w-2xl"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-[#1c6fd1]">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Have a question or need assistance? Reach out to us through any of
            the contact methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Mail,
              title: "Email",
              value: "mahmoudfathy.dev@gmail.com",
            },
            {
              icon: Phone,
              title: "Phone",
              value: "+20 120 048 1281",
            },
            {
              icon: MapPin,
              title: "Location",
              value: "Alex, Egypt",
            },
            {
              icon: Clock,
              title: "Availability",
              value: "Sat-Thu 9AM-9PM",
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#1c6fd1] transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-[#1c6fd1] p-3 rounded-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-gray-600 text-sm">
                    {item.title}
                  </h3>
                  <p className="font-semibold text-[14px]">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;