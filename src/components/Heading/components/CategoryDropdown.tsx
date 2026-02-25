"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Smartphone, Laptop, Tablet, Headphones, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CATEGORIES = [
    { name: "Smartphones", slug: "smartphones", icon: Smartphone, description: "Latest mobile devices" },
    { name: "Laptops", slug: "laptops", icon: Laptop, description: "High-performance computers" },
    { name: "Tablets", slug: "tablets", icon: Tablet, description: "Portable touch devices" },
    { name: "Mobile Accessories", slug: "mobile-accessories", icon: Headphones, description: "Enhance your experience" },
];

interface Product {
    brand: string;
}

const CategoryDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[0] | null>(null);
    const [brands, setBrands] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

    const handleCategoryHover = (category: typeof CATEGORIES[0]) => {
        if (selectedCategory?.slug !== category.slug) {
            setSelectedCategory(category);
            fetchBrands(category.slug);
        }
    };

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
            setSelectedCategory(null);
            setBrands([]);
        }, 300);
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={`
                    flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg
                    transition-all duration-300 ease-out
                    ${isOpen ? "text-[#2384eb] bg-blue-50/80 shadow-sm" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"}
                `}
            >
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="absolute top-full left-0 mt-3 w-[500px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-50 flex h-[320px]"
                    >
                        {/* Categories List (Left Side) */}
                        <div className="w-1/2 border-r border-gray-50 p-3 bg-gray-50/30">
                            <h3 className="px-3 pt-2 pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                Explore Categories
                            </h3>
                            <div className="space-y-1">
                                {CATEGORIES.map((category) => (
                                    <button
                                        key={category.slug}
                                        onMouseEnter={() => handleCategoryHover(category)}
                                        className={`
                                            w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-all duration-200 group
                                            ${selectedCategory?.slug === category.slug
                                                ? "bg-white text-[#2384eb] shadow-md shadow-blue-500/5 ring-1 ring-blue-50"
                                                : "text-gray-600 hover:bg-white hover:text-gray-900"}
                                        `}
                                    >
                                        <div className={`
                                            p-2 rounded-lg transition-colors
                                            ${selectedCategory?.slug === category.slug ? "bg-blue-50 text-blue-600" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600"}
                                        `}>
                                            <category.icon className="w-4 h-4" />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-semibold">{category.name}</div>
                                            <div className="text-[10px] text-gray-400 font-medium">{category.description}</div>
                                        </div>
                                        {selectedCategory?.slug === category.slug && (
                                            <ChevronRight className="w-4 h-4 ml-auto opacity-50" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Brands Section (Right Side) */}
                        <div className="w-1/2 p-4 flex flex-col">
                            <AnimatePresence mode="wait">
                                {selectedCategory ? (
                                    <motion.div
                                        key={selectedCategory.slug}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="h-full flex flex-col"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-tight">
                                                {selectedCategory.name} Brands
                                            </h3>
                                            <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">
                                                {isLoading ? "..." : brands.length}
                                            </span>
                                        </div>

                                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                                            {isLoading ? (
                                                <div className="h-full flex flex-col items-center justify-center gap-3">
                                                    <div className="relative">
                                                        <div className="w-8 h-8 rounded-full border-2 border-blue-50 border-t-blue-500 animate-spin" />
                                                    </div>
                                                    <span className="text-[10px] font-medium text-gray-400">Loading premium brands...</span>
                                                </div>
                                            ) : brands.length > 0 ? (
                                                <div className="grid grid-cols-1 gap-1">
                                                    {brands.map((brand) => (
                                                        <Link
                                                            key={brand}
                                                            href={`/products?category=${selectedCategory.slug}&brand=${brand}`}
                                                            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 group"
                                                        >
                                                            {brand}
                                                            <div className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                                                    <Search className="w-8 h-8 text-gray-100 mb-2" />
                                                    <p className="text-xs text-gray-400 italic">No brands found for this category</p>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-blue-50/20 rounded-xl border border-dashed border-blue-100">
                                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                                            <Smartphone className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-1">Select a Category</h4>
                                        <p className="text-[11px] text-gray-400">Hover over a category to see available brands and premium products.</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e5e7eb;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #d1d5db;
                }
            `}</style>
        </div>
    );
};

export default CategoryDropdown;