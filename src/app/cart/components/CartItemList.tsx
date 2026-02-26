"use client";

import React from "react";
import { AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types/product";
import { CartItemRow } from "./CartItemRow";

interface CartItemListProps {
    items: CartItem[];
    onUpdateQuantity: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
    onClearCart: () => void;
}

export const CartItemList: React.FC<CartItemListProps> = ({
    items,
    onUpdateQuantity,
    onRemove,
    onClearCart,
}) => {
    return (
        <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="popLayout">
                {items.map((item) => (
                    <CartItemRow
                        key={item.id}
                        item={item}
                        onUpdateQuantity={onUpdateQuantity}
                        onRemove={onRemove}
                    />
                ))}
            </AnimatePresence>

            <div className="flex justify-between items-center py-4 px-2">
                <Button
                    variant="ghost"
                    onClick={onClearCart}
                    className="text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl font-medium"
                >
                    Clear Cart
                </Button>
                <Link href="/" className="text-primary font-bold flex items-center gap-2 hover:underline">
                    Continue Shopping <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};
