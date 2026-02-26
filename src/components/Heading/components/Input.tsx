"use client";

import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useProducts } from "@/context/ProductContext";
import { useRouter, usePathname } from "next/navigation";

function Input() {
    const { searchTerm, setSearchTerm } = useProducts();
    const [isFocused, setIsFocused] = useState(false);
    const [val, setVal] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    // Sync input with search term when on the products page
    useEffect(() => {
        if (pathname === "/products") {
            setVal(searchTerm);
        }
    }, [searchTerm, pathname]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (pathname === "/products") {
            setSearchTerm(val);
        } else {
            // Not on products page
            // Navigate with the search param
            router.push(`/products?search=${encodeURIComponent(val)}`);
            // The user requested to "clear input" specifically in this scenario
            setVal("");
        }
    };

    const handleClear = () => {
        setVal("");
        if (pathname === "/products") {
            setSearchTerm("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch(e as any);
        }
    };

    return (
        <form
            onSubmit={handleSearch}
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
                value={val}
                onChange={(e) => setVal(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full pl-11 pr-10 py-2.5 text-sm bg-transparent outline-none placeholder:text-gray-400 text-gray-700"
            />
            {val && (
                <button
                    type="button"
                    onClick={handleClear}
                    className="absolute right-3 p-1 rounded-full hover:bg-gray-200 text-gray-400 hover:text-[#1c6fd1] transition-all duration-200"
                >
                    <X size={14} />
                </button>
            )}
        </form>
    );
}

export default Input;

