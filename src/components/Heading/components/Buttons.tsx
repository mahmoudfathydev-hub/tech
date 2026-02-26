"use client";

import { ShinyButton } from "@/components/ui/shiny-button";
import { ShoppingCart, Heart, User } from "lucide-react";

function Buttons() {
    return (
        <div className="flex items-center gap-2">
            <button
                className="relative p-2.5 rounded-xl text-gray-500 hover:text-rose-500 hover:bg-rose-50 transition-all duration-300 cursor-pointer"
                aria-label="Wishlist"
            >
                <Heart size={20} strokeWidth={1.8} />
                <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">
                    0
                </span>
            </button>
            <button
                className="relative p-2.5 rounded-xl text-gray-500 hover:text-[#1c6fd1] hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                aria-label="Shopping Cart"
            >
                <ShoppingCart size={20} strokeWidth={1.8} />
                <span className="absolute -top-0.5 -right-0.5 bg-[#1c6fd1] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">
                    0
                </span>
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1" />
            <ShinyButton className="text-sm px-5 py-2 rounded-xl">
                <span className="flex items-center gap-2">
                    <User size={15} strokeWidth={2} />
                    Sign In
                </span>
            </ShinyButton>
        </div>
    );
}

export default Buttons;