"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Loader2, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES } from "../constants/categories";

interface Product {
    brand: string;
}

const MobileCategories = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const [brands, setBrands] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBrands = async (slug: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${slug}`);
            const data = await response.json();
            const uniqueBrands = Array.from(new Set(data.products.map((p: Product) => p.brand))).filter(Boolean) as string[];
            setBrands(uniqueBrands);
        } catch (error) {
            console.error("Error fetching brands:", error);
            setBrands([]);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleCategory = (slug: string) => {
        if (expandedCategory === slug) {
            setExpandedCategory(null);
            setBrands([]);
        } else {
            setExpandedCategory(slug);
            fetchBrands(slug);
        }
    };

    return (
        <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">
                Categories
            </p>
            <div className="grid gap-2">
                {CATEGORIES.map((category) => (
                    <div key={category.slug} className="overflow-hidden">
                        <button
                            onClick={() => toggleCategory(category.slug)}
                            className={`
                                w-full flex items-center justify-between px-4 py-4 rounded-xl border text-sm font-semibold transition-all duration-300
                                ${expandedCategory === category.slug
                                    ? "text-[#1c6fd1] bg-blue-50 border-blue-100"
                                    : "text-gray-600 bg-gray-50 border-gray-100"}
                            `}
                        >
                            <div className="flex items-center gap-3">
                                <category.icon className={`w-5 h-5 ${expandedCategory === category.slug ? "text-[#1c6fd1]" : "text-gray-400"}`} />
                                {category.name}
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCategory === category.slug ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {expandedCategory === category.slug && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-4 grid grid-cols-2 gap-2 bg-gray-50/50 rounded-b-xl border-x border-b border-gray-100 -mt-1">
                                        {isLoading ? (
                                            <div className="col-span-2 py-6 flex flex-col items-center justify-center gap-2">
                                                <Loader2 className="w-5 h-5 animate-spin text-[#1c6fd1]" />
                                                <span className="text-[10px] text-gray-400 font-medium tracking-tight">Fetching brands...</span>
                                            </div>
                                        ) : brands.length > 0 ? (
                                            brands.map((brand) => (
                                                <Link
                                                    key={brand}
                                                    href={`/products?category=${category.slug}&brand=${brand}`}
                                                    className="px-3 py-2.5 bg-white rounded-lg border border-gray-100 text-[11px] font-bold text-gray-500 hover:text-[#1c6fd1] hover:border-blue-100 transition-all active:scale-95 text-center shadow-sm"
                                                >
                                                    {brand}
                                                </Link>
                                            ))

                                        ) : (
                                            <div className="col-span-2 py-4 text-center text-[10px] text-gray-400 italic">
                                                No brands found
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileCategories;
