"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards (Visa, MasterCard, American Express), PayPal, Vodafone Cash and other secure payment options.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on most products. Items must be in their original condition and packaging.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping usually takes 2-5 business days. Expedited options are available for faster delivery.",
    },
    {
      question: "Do you offer technical support?",
      answer:
        "Yes, our dedicated support team is available to assist you with any product-related inquiries or issues.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        <div className="mb-16" data-aos="zoom-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-[#1c6fd1]">Questions</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-[#1c6fd1]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#1c6fd1]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#1c6fd1]" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="flip-up"
          className="bg-[#1c6fd1] rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to upgrade your tech?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Explore our wide range of electronics and find the perfect devices
            to fit your needs.
          </p>
          <button className="bg-white text-[#1c6fd1] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Faq;