import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

function TopFooter() {
  return (
    <footer className="backdrop-blur-xl bg-white/40 text-gray-900 py-12 border-t border-white/30">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#1c6fd1]">
              Novatek
            </h3>
            <p className="text-gray-700 mb-4">
              Your trusted partner for the latest electronics and tech
              accessories. Quality products, competitive prices, and exceptional
              service.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-[#1c6fd1] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#1c6fd1] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#1c6fd1] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#1c6fd1] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#1c6fd1] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#1c6fd1]">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {["About Us", "Products", "Services", "Contact", "FAQ"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-[#1c6fd1] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#1c6fd1]">
              Categories
            </h3>

            <ul className="space-y-2">
              {[
                "Smartphones",
                "Laptops",
                "Tablets",
                "Accessories",
                "Gaming",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-[#1c6fd1] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#1c6fd1]">
              Newsletter
            </h3>

            <p className="text-gray-700 mb-4">
              Subscribe to get updates on new products and exclusive offers.
            </p>

            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-[#1c6fd1] bg-white/60 backdrop-blur-md rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#1c6fd1] focus:ring-2 focus:ring-[#1c6fd1]/20"
                required
              />
              <ShinyButton>Subscribe</ShinyButton>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TopFooter;