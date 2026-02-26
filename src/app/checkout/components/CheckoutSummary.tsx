"use client";

import React from "react";
import { ArrowRight, ShieldCheck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types/product";
import { CheckoutItem } from "./CheckoutItem";

interface CheckoutSummaryProps {
    items: CartItem[];
    total: number;
}

export const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ items, total }) => {
    return (
        <div className="lg:col-span-4 h-fit">
            <div className="bg-white p-8 rounded-3xl border border-border shadow-xl sticky top-24 space-y-8">
                <div>
                    <h2 className="text-xl font-bold text-foreground mb-6">Order Review</h2>
                    <div className="max-h-60 overflow-y-auto px-1">
                        {items.map((item) => (
                            <CheckoutItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-border">
                    <div className="flex justify-between text-muted-foreground text-sm">
                        <span>Subtotal</span>
                        <span className="font-semibold text-foreground">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground text-sm">
                        <span>Shipping</span>
                        <span className="text-green-600 font-bold uppercase text-[10px] tracking-widest">Free</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground text-sm">
                        <span>Total</span>
                        <span className="text-2xl font-black text-primary">${total.toFixed(2)}</span>
                    </div>
                </div>

                <Button className="w-full py-8 bg-[#050505] hover:bg-[#151515] text-white rounded-2xl text-xl font-bold shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 group">
                    Pay ${total.toFixed(2)}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                        <p className="text-sm font-bold text-green-900">Guaranteed Safe Checkout</p>
                        <p className="text-xs text-green-700">Your data is encrypted and protected.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
