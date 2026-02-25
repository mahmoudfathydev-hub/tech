"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Product } from "@/types/product";
import { fetchAllProducts } from "@/api/products";

interface ProductContextType {
    products: Product[];
    filteredProducts: Product[];
    bestSellers: Product[];
    isLoading: boolean;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const data = await fetchAllProducts();
            setProducts(data);
            setIsLoading(false);
        };
        loadData();
    }, []);

    // Local filtering logic - no extra API requests
    const filteredProducts = useMemo(() => {
        if (!searchTerm) return products;
        return products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);

    // Local sorting logic for "Best Sellers" (e.g., by rating or discount)
    const bestSellers = useMemo(() => {
        return [...products]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 8); // Top 8 highest rated products
    }, [products]);

    return (
        <ProductContext.Provider
            value={{
                products,
                filteredProducts,
                bestSellers,
                isLoading,
                searchTerm,
                setSearchTerm,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
};
