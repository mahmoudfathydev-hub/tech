"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useProducts } from "@/context/ProductContext";
import { toast } from "sonner";
import { CheckoutHeader } from "./components/CheckoutHeader";
import { ShippingForm } from "./components/ShippingForm";
import { PaymentMethod } from "./components/PaymentMethod";
import { CheckoutSummary } from "./components/CheckoutSummary";

export default function CheckoutPage() {
    const router = useRouter();
    const { cart, cartTotal } = useProducts();
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        const user = localStorage.getItem("currentUser");
        if (!user) {
            toast.error("Please sign in to proceed to checkout");
            router.push("/signup");
            setIsAuthorized(false);
        } else if (cart.length === 0) {
            toast.error("Your cart is empty");
            router.push("/cart");
            setIsAuthorized(false);
        } else {
            setIsAuthorized(true);
        }
    }, [router, cart]);

    if (isAuthorized === null) return null;
    if (!isAuthorized) return null;

    return (
        <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <CheckoutHeader />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-8 space-y-8">
                        <ShippingForm />
                        <PaymentMethod />
                    </div>

                    <CheckoutSummary items={cart} total={cartTotal} />
                </div>
            </div>
        </div>
    );
}
