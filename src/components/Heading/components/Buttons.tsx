"use client";

import React, { useState, useEffect } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ShoppingCart, Heart, User, LogOut } from "lucide-react";
import Link from "next/link";

function Buttons() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const user = localStorage.getItem("currentUser");
            setIsLoggedIn(!!user);
        };

        checkAuth();
        // Check on focus or storage events (optional but good for consistency)
        window.addEventListener('storage', checkAuth);
        return () => window.removeEventListener('storage', checkAuth);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        setIsLoggedIn(false);
        window.location.reload();
    };

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

            {!isLoggedIn ? (
                <ShinyButton className="text-sm px-5 py-2 rounded-xl">
                    <Link href={"/signup"}>
                        <span className="flex items-center gap-2">
                            <User size={15} strokeWidth={2} />
                            Sign In
                        </span>
                    </Link>
                </ShinyButton>
            ) : (
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-600 border border-border rounded-xl hover:bg-red-50 transition-all"
                >
                    <LogOut size={15} />
                    Log Out
                </button>
            )}
        </div>
    );
}

export default Buttons;