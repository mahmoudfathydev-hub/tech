import React from "react";

function BottomFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white/40 backdrop-blur-xl border-t border-white/30 py-6 text-gray-900">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p className="text-gray-700 text-sm">
              © {currentYear} Novatek. All rights reserved.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a
                href="#"
                className="text-gray-700 hover:text-[#1c6fd1] transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#1c6fd1] transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#1c6fd1] transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/30 text-center">
          <p className="text-gray-600 font-bold">
            Made with ❤️ by{" "}
            <a
              href="https://mahmoudfathy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1c6fd1] hover:underline"
            >
              Eng: Mahmoud Fathy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;