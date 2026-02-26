"use client";

import React from "react";

interface CartHeaderProps {
    count: number;
}

export const CartHeader: React.FC<CartHeaderProps> = ({ count }) => {
    return (
        <header className="mb-12">
            <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-2">Shopping Cart</h1>
            <p className="text-muted-foreground text-lg">
                {count > 0
                    ? `You have ${count} items in your cart`
                    : "Your cart is currently empty"}
            </p>
        </header>
    );
};
