"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const CheckoutHeader: React.FC = () => {
    return (
        <div className="mb-10">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/cart" className="hover:text-primary transition-colors">Cart</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground font-medium">Checkout</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Checkout</h1>
        </div>
    );
};
