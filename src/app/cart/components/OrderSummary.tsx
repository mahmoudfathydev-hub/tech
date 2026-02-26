"use client";

import React from "react";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderSummaryProps {
    total: number;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ total }) => {
    return (
        <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-3xl border border-border shadow-xl sticky top-24">
                <h2 className="text-2xl font-bold text-foreground mb-8">Order Summary</h2>

                <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-muted-foreground">
                        <span>Subtotal</span>
                        <span className="font-semibold text-foreground">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                        <span>Shipping</span>
                        <span className="text-green-600 font-bold uppercase text-sm tracking-widest">Free</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                        <span>Tax</span>
                        <span>$0.00</span>
                    </div>
                </div>

                <div className="pt-6 border-t border-border mb-10">
                    <div className="flex justify-between items-baseline">
                        <span className="text-xl font-bold text-foreground">Total</span>
                        <span className="text-4xl font-black text-primary">${total.toFixed(2)}</span>
                    </div>
                </div>

                <Button className="w-full py-8 bg-[#050505] hover:bg-[#151515] text-white rounded-2xl text-xl font-bold shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                    Checkout Now
                    <ArrowRight className="w-6 h-6" />
                </Button>

                <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground font-medium uppercase tracking-widest bg-secondary/30 py-3 rounded-xl border border-border">
                    <ShieldAlert className="w-4 h-4 text-primary" />
                    Secure Encryption End-to-End
                </div>
            </div>
        </div>
    );
};
