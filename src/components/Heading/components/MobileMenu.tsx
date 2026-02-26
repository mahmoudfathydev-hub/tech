"use client";

import { useState, useEffect } from "react";
import { Menu, X, Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Input from "./Input";

import MobileCategories from "./MobileCategories";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    const links = [
        { id: 1, name: "Home", href: "/" },
        { id: 2, name: "Products", href: "/products" },
        { id: 4, name: "Contact", href: "/contact" },
    ];

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-gray-600"
            >
                <Menu size={24} />
            </button>

            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            <div
                className={`fixed top-0 right-0 w-full h-auto max-h-[850px] bg-white z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 flex items-center justify-between border-b bg-white">
                    <span className="text-xl font-bold">Menu</span>
                    <button onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className="px-6 py-8 space-y-8 overflow-y-auto max-h-[calc(100vh-180px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                            Search Products
                        </p>
                        <Input />
                    </div>

                    <MobileCategories />

                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                            Explore
                        </p>
                        <div className="grid gap-2">
                            {links.map((link) => {
                                const active = pathname === link.href;
                                return (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        className={`flex justify-between items-center px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${active
                                            ? "text-[#1c6fd1] bg-blue-50 border-blue-100"
                                            : "text-gray-600 bg-gray-50 border-gray-100"
                                            }`}
                                    >
                                        {link.name}
                                        <span
                                            className={`w-1.5 h-1.5 rounded-full ${active ? "bg-[#1c6fd1]" : "hidden"
                                                }`}
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <hr className="border-dashed" />

                    <div className="grid gap-3">
                        <button className="flex items-center gap-4 text-sm text-gray-600 hover:text-rose-500 transition-colors">
                            <Heart size={20} />
                            My Wishlist
                        </button>
                        <button className="flex items-center gap-4 text-sm text-gray-600 hover:text-[#1c6fd1] transition-colors">
                            <ShoppingCart size={20} />
                            Shopping Cart
                        </button>
                    </div>
                </div>

                <div className="p-6 border-t mt-auto bg-white">
                    <button className="w-full py-4 bg-[#1c6fd1] text-white rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                        <User size={18} />
                        Sign In
                    </button>
                </div>

            </div>

        </div>
    );
}