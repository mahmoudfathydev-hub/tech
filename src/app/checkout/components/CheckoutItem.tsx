"use client";

import React from "react";
import Image from "next/image";
import { CartItem } from "@/types/product";

interface CheckoutItemProps {
    item: CartItem;
}

export const CheckoutItem: React.FC<CheckoutItemProps> = ({ item }) => {
    return (
        <div className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 border-b last:border-0 border-border/50">
            <div className="relative w-16 h-16 bg-secondary/30 rounded-xl overflow-hidden shrink-0">
                <Image src={item.thumbnail} alt={item.title} fill className="object-contain p-2" />
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-bold text-foreground text-sm truncate">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.quantity} × ${item.price.toFixed(2)}</p>
            </div>
            <p className="font-bold text-primary text-sm">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
    );
};
