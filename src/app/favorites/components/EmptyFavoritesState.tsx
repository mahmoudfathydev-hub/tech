"use client";

import React from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const EmptyFavoritesState: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24 bg-white rounded-3xl border border-dashed border-border shadow-sm"
        >
            <div className="mb-6 flex justify-center">
                <div className="p-6 bg-red-50 rounded-full">
                    <Heart className="w-16 h-16 text-red-500/40" />
                </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">No favorites yet</h2>
            <p className="text-muted-foreground mb-10 max-w-sm mx-auto">
                Start saving your favorite products to see them here. Browse our store to find items you love!
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-10 py-6 rounded-2xl text-lg font-bold transition-all active:scale-95 shadow-lg shadow-primary/20">
                <Link href="/">Explore Products</Link>
            </Button>
        </motion.div>
    );
};
