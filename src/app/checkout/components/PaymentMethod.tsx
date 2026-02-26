"use client";

import React, { useState } from "react";
import { CreditCard, Wallet, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

const methods = [
    { id: "card", name: "Credit Card", icon: CreditCard, description: "All major cards supported" },
    { id: "paypal", name: "PayPal", icon: Wallet, description: "Safe and fast online payment" },
    { id: "bank", name: "Bank Transfer", icon: Landmark, description: "Direct wire transfer" },
];

export const PaymentMethod: React.FC = () => {
    const [selected, setSelected] = useState("card");

    return (
        <div className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-8">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl">
                    <CreditCard className="w-5 h-5 text-primary" />
                </div>
                Payment Method
            </h2>

            <div className="grid grid-cols-1 gap-4">
                {methods.map((method) => {
                    const Icon = method.icon;
                    return (
                        <button
                            key={method.id}
                            onClick={() => setSelected(method.id)}
                            className={cn(
                                "flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left group",
                                selected === method.id
                                    ? "border-primary bg-primary/5"
                                    : "border-secondary/50 hover:border-border bg-white"
                            )}
                        >
                            <div className={cn(
                                "p-3 rounded-xl transition-colors",
                                selected === method.id ? "bg-primary text-white" : "bg-secondary text-muted-foreground group-hover:text-foreground"
                            )}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-foreground">{method.name}</p>
                                <p className="text-sm text-muted-foreground">{method.description}</p>
                            </div>
                            <div className={cn(
                                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                                selected === method.id ? "border-primary bg-primary" : "border-border bg-transparent"
                            )}>
                                {selected === method.id && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
