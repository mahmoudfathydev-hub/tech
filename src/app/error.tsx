"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-4 py-12 font-sans relative overflow-hidden">
            {/* Dynamic Background Blobs */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50 animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 animate-pulse -z-10" />

            <div className="max-w-xl w-full text-center space-y-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-6 bg-red-100/50 rounded-full"
                >
                    <AlertTriangle className="w-16 h-16 text-red-500 animate-pulse" />
                </motion.div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-black text-foreground tracking-tight">
                        Something Went Wrong
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-sm mx-auto">
                        We've encountered an unexpected error. Don't worry, our engineers are on it.
                    </p>
                    {error.digest && (
                        <p className="text-[10px] text-muted-foreground/30 font-mono">
                            Error Code: {error.digest}
                        </p>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button
                        size="lg"
                        onClick={reset}
                        className="w-full sm:w-auto px-8 py-7 bg-primary hover:bg-primary/90 text-white rounded-2xl text-lg font-bold shadow-xl transition-all active:scale-95 flex items-center gap-3 group"
                    >
                        <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                        Try Again
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto px-8 py-7 rounded-2xl text-lg font-bold border-2 border-border hover:bg-secondary/50 transition-all active:scale-95 flex items-center gap-3"
                    >
                        <Link href="/">
                            <Home className="w-5 h-5" />
                            Return Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
