"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone, MapPin, Globe, Navigation, Building2 } from "lucide-react";

export const ShippingForm: React.FC = () => {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("currentUser");
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                console.error("Error parsing user data", e);
            }
        }
    }, []);

    return (
        <div className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-8">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl">
                    <MapPin className="w-5 h-5 text-primary" />
                </div>
                Shipping Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" /> Full Name
                    </label>
                    <Input
                        defaultValue={user?.name || ""}
                        key={user?.name}
                        placeholder="Your Name"
                        className="h-12 rounded-xl bg-secondary/30 border-none focus:ring-2 focus:ring-primary/20"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" /> Email Address
                    </label>
                    <Input
                        defaultValue={user?.email || ""}
                        key={user?.email}
                        type="email"
                        placeholder="your@email.com"
                        className="h-12 rounded-xl bg-secondary/30 border-none focus:ring-2 focus:ring-primary/20"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" /> Phone Number
                    </label>
                    <Input placeholder="+1 (555) 000-0000" className="h-12 rounded-xl bg-secondary/30 border-none focus:ring-2 focus:ring-primary/20" />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" /> Street Address
                    </label>
                    <Input placeholder="123 Technology Ave" className="h-12 rounded-xl bg-secondary/30 border-none focus:ring-2 focus:ring-primary/20" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                        <Navigation className="w-4 h-4 text-primary" /> City
                    </label>
                    <Input placeholder="Tech City" className="h-12 rounded-xl bg-secondary/30 border-none focus:ring-2 focus:ring-primary/20" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary" /> Country
                    </label>
                    <Input placeholder="United States" className="h-12 rounded-xl bg-secondary/30 border-none focus:ring-2 focus:ring-primary/20" />
                </div>
            </div>
        </div>
    );
};
