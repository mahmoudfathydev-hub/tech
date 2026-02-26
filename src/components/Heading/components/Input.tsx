"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useProducts } from "@/context/ProductContext";

function Input() {
    const { searchTerm, setSearchTerm } = useProducts();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div
            className={`
                flex items-center w-full relative rounded-full
                border transition-all duration-300 ease-out
                bg-gray-50
                ${isFocused
                    ? "border-[#1c6fd1] shadow-[0_0_0_3px_rgba(28,111,209,0.12)]"
                    : "border-gray-200 hover:border-gray-300"
                }
            `}
        >
            <Search
                size={16}
                className={`
                    absolute left-4 transition-colors duration-300
                    ${isFocused ? "text-[#1c6fd1]" : "text-gray-400"}
                `}
            />
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full pl-11 pr-4 py-2.5 text-sm bg-transparent outline-none placeholder:text-gray-400 text-gray-700"
            />
        </div>
    );
}

export default Input;
