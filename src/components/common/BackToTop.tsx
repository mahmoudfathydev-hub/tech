"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className={cn(
                        "fixed bottom-8 right-8 z-[999]",
                        "p-4 rounded-2xl bg-gray-900/90 dark:bg-primary/90 text-white",
                        "backdrop-blur-xl border border-white/20 shadow-2xl shadow-primary/20",
                        "hover:scale-110 active:scale-95 transition-all duration-300",
                        "group"
                    )}
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />

                    {/* Ripple Effect for Premium Feel */}
                    <span className="absolute inset-0 rounded-2xl bg-white/10 animate-ping pointer-events-none scale-75 group-hover:scale-100" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
