"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem } from "@/types/product";

interface CartItemRowProps {
    item: CartItem;
    onUpdateQuantity: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({
    item,
    onUpdateQuantity,
    onRemove
}) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center gap-6"
        >
            <div className="relative w-32 h-32 bg-secondary/30 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                />
            </div>

            <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-foreground line-clamp-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{item.brand}</p>
                    </div>
                    <p className="text-xl font-black text-primary">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 mt-6">
                    <div className="flex items-center bg-secondary/50 rounded-xl p-1 border border-border">
                        <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-bold text-foreground">{item.quantity}</span>
                        <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-muted-foreground hover:text-foreground"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    <button
                        onClick={() => onRemove(item.id)}
                        className="flex items-center gap-2 text-sm font-semibold text-destructive hover:text-destructive/80 transition-colors py-2 px-4 rounded-xl hover:bg-destructive/5"
                    >
                        <Trash2 className="w-4 h-4" />
                        Remove
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
