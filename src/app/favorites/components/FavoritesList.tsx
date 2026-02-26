"use client";

import React from "react";
import { Product } from "@/types/product";
import ProductCard from "@/app/products/components/ProductCard";
import { AnimatePresence, motion } from "motion/react";

interface FavoritesListProps {
    items: Product[];
    onViewDetails: (product: Product) => void;
}

export const FavoritesList: React.FC<FavoritesListProps> = ({ items, onViewDetails }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
                {items.map((product) => (
                    <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    >
                        <ProductCard
                            product={product}
                            viewMode="grid"
                            onViewDetails={onViewDetails}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
