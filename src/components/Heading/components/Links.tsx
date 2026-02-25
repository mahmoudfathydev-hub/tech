"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CategoryDropdown from "./CategoryDropdown";

function Links() {
    const pathname = usePathname();

    const links = [
        { id: 1, name: "Home", href: "/" },
        { id: 2, name: "Products", href: "/products" },
        { id: 3, name: "Categories", href: "/categories", isDropdown: true },
        { id: 4, name: "Contact", href: "/contact" },
    ];

    return (
        <div className="flex items-center gap-1">
            {links.map((link) => {
                if (link.isDropdown) {
                    return <CategoryDropdown key={link.id} />;
                }

                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.id}
                        href={link.href}
                        className={`
                            relative px-4 py-2 text-sm font-medium rounded-lg
                            transition-all duration-300 ease-out
                            ${isActive
                                ? "text-[#2384eb] bg-blue-50"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            }
                        `}
                    >
                        {link.name}
                        {isActive && (
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#2384eb] rounded-full" />
                        )}
                    </Link>
                );
            })}
        </div>
    );
}

export default Links;