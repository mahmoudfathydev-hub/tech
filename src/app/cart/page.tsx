"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useProducts } from "@/context/ProductContext";
import { toast } from "sonner";
import { CartHeader } from "./components/CartHeader";
import { EmptyCartState } from "./components/EmptyCartState";
import { CartItemList } from "./components/CartItemList";
import { OrderSummary } from "./components/OrderSummary";

export default function CartPage() {
    const router = useRouter();
    const { cart, removeFromCart, updateCartQuantity, cartTotal, cartCount, clearCart } = useProducts();
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        const user = localStorage.getItem("currentUser");
        if (!user) {
            toast.error("Please sign in to access your cart");
            router.push("/signup");
            setIsAuthorized(false);
        } else {
            setIsAuthorized(true);
        }
    }, [router]);

    if (isAuthorized === null) return null;
    if (!isAuthorized) return null;

    return (
        <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <CartHeader count={cartCount} />

                {cart.length === 0 ? (
                    <EmptyCartState />
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <CartItemList
                            items={cart}
                            onUpdateQuantity={updateCartQuantity}
                            onRemove={removeFromCart}
                            onClearCart={clearCart}
                        />
                        <OrderSummary total={cartTotal} />
                    </div>
                )}
            </div>
        </div>
    );
}
