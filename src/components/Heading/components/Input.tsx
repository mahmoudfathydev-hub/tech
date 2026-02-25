"use client";

import { Search } from "lucide-react";
import { useState } from "react";

function Input() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div
            className={`
                flex items-center w-full relative rounded-full
                border transition-all duration-300 ease-out
                bg-gray-50
                ${isFocused
                    ? "border-[#2384eb] shadow-[0_0_0_3px_rgba(35,132,235,0.12)]"
                    : "border-gray-200 hover:border-gray-300"
                }
            `}
        >
            <Search
                size={16}
                className={`
                    absolute left-4 transition-colors duration-300
                    ${isFocused ? "text-[#2384eb]" : "text-gray-400"}
                `}
            />
            <input
                type="text"
                placeholder="Search products..."
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full pl-11 pr-4 py-2.5 text-sm bg-transparent outline-none placeholder:text-gray-400 text-gray-700"
            />
        </div>
    );
}

export default Input;