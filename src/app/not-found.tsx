"use client";

import Link from "next/link";
import { MoveLeft, HelpCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-4 py-12 font-sans relative overflow-hidden">
            {/* Background Blobs for Premium Aesthetic */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-100/50 rounded-full blur-3xl animate-pulse -z-10" />

            <div className="max-w-xl w-full text-center space-y-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative inline-block"
                >
                    <h1 className="text-[180px] font-black text-primary/10 leading-none select-none italic">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center space-x-6">
                        <HelpCircle className="w-24 h-24 text-primary animate-bounce" />
                    </div>
                </motion.div>

                <div className="space-y-4">
                    <h2 className="text-4xl font-extrabold text-foreground tracking-tight">
                        Lost in Space?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-md mx-auto">
                        The link you're looking for has vanished or never existed. Let's get you back to the cutting-edge technology.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        asChild
                        size="lg"
                        className="w-full sm:w-auto px-8 py-8 bg-[#050505] hover:bg-primary text-white rounded-2xl text-xl font-bold shadow-2xl transition-all active:scale-95 flex items-center gap-3 group"
                    >
                        <Link href="/">
                            <MoveLeft className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" />
                            Go Back Home
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto px-8 py-8 rounded-2xl text-xl font-bold border-2 border-border hover:bg-secondary/50 transition-all active:scale-95 flex items-center gap-3"
                    >
                        <Link href="/products">
                            <ShoppingBag className="w-6 h-6" />
                            Shop Now
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
