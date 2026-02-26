"use client";

import React from "react";
import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const EmptyCartState: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24 bg-white rounded-3xl border border-dashed border-border shadow-sm"
        >
            <div className="mb-6 flex justify-center">
                <div className="p-6 bg-secondary/50 rounded-full">
                    <ShoppingBag className="w-16 h-16 text-muted-foreground/40" />
                </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Nothing to show yet</h2>
            <p className="text-muted-foreground mb-10 max-w-sm mx-auto">
                Your cart is waiting to be filled with amazing technology. Start exploring our premium collection.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-10 py-6 rounded-2xl text-lg font-bold transition-all active:scale-95 shadow-lg shadow-primary/20">
                <Link href="/">Browse Products</Link>
            </Button>
        </motion.div>
    );
};
