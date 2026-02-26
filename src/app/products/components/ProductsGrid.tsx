"use client";

import type { Product, ViewMode } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductsGridProps {
    products: Product[];
    viewMode: ViewMode;
    onViewDetails: (product: Product) => void;
}

export default function ProductsGrid({
    products,
    viewMode,
    onViewDetails,
}: ProductsGridProps) {
    if (viewMode === "list") {
        return (
            <div className="flex flex-col gap-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        viewMode={viewMode}
                        onViewDetails={onViewDetails}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    onViewDetails={onViewDetails}
                />
            ))}
        </div>
    );
}
