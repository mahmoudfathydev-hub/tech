"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useProducts } from "@/context/ProductContext";
import { toast } from "sonner";
import { FavoritesHeader } from "./components/FavoritesHeader";
import { EmptyFavoritesState } from "./components/EmptyFavoritesState";
import { FavoritesList } from "./components/FavoritesList";
import ProductDetailsModal from "@/app/products/components/ProductDetailsModal";

export default function FavoritesPage() {
    const router = useRouter();
    const {
        wishlist,
        wishlistCount,
        selectedProduct,
        isModalOpen,
        openProductModal,
        closeProductModal
    } = useProducts();
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        const user = localStorage.getItem("currentUser");
        if (!user) {
            toast.error("Please sign in to access your wishlist");
            router.push("/signup");
            setIsAuthorized(false);
        } else {
            setIsAuthorized(true);
        }
    }, [router]);

    if (isAuthorized === null) return null;
    if (!isAuthorized) return null;

    return (
        <main className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <FavoritesHeader count={wishlistCount} />

                {wishlist.length === 0 ? (
                    <EmptyFavoritesState />
                ) : (
                    <FavoritesList
                        items={wishlist}
                        onViewDetails={openProductModal}
                    />
                )}
            </div>

            <ProductDetailsModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={closeProductModal}
            />
        </main>
    );
}
