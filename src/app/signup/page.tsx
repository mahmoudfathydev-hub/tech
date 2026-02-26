"use client";

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signupSchema, SignupValues } from "@/validation/signupSchema";
import { SignupFormFields } from "./components/SignupFormFields";
import { SuccessState } from "./components/SuccessState";
import { SignupImage } from "./components/SignupImage";
import { cn } from "@/lib/utils";

export default function SignupPage() {
    const formBoxRef = useRef<HTMLDivElement>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        reset
    } = useForm<SignupValues>({
        resolver: zodResolver(signupSchema),
        mode: "onChange", // Enable real-time validation for isValid
    });

    useEffect(() => {
        if (formBoxRef.current) {
            gsap.fromTo(
                formBoxRef.current,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 1, ease: "power4.out", delay: 0.2 }
            );
        }
    }, []);

    const onSubmit = async (data: SignupValues) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Save to local storage
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const newUser = {
            id: crypto.randomUUID(),
            name: data.name,
            email: data.email,
            createdAt: new Date().toISOString(),
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(newUser));

        setIsSuccess(true);
        reset();
    };

    const isDisabled = !isValid || isSubmitting;

    return (
        <div className="min-h-screen w-full flex bg-background relative overflow-hidden font-sans">
            {/* Background decoration */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Left side: Form */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-12 z-10">
                <motion.div
                    ref={formBoxRef}
                    className="w-full max-w-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="bg-white/80 backdrop-blur-2xl border border-border rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        {!isSuccess ? (
                            <>
                                <div className="mb-10">
                                    <h1 className="text-4xl font-bold text-foreground mb-3 tracking-tight">Create Account</h1>
                                    <p className="text-muted-foreground text-lg">Join our premium digital ecosystem today.</p>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <SignupFormFields register={register} errors={errors} />

                                    <Button
                                        type="submit"
                                        disabled={isDisabled}
                                        className={cn(
                                            "w-full h-14 mt-4 font-bold text-lg rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 group shadow-lg shadow-primary/20",
                                            isDisabled
                                                ? "bg-gray-200 text-gray-500 cursor-not-allowed shadow-none"
                                                : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20"
                                        )}
                                    >
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-3 border-gray-400 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Get Started
                                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </Button>
                                </form>

                                <div className="mt-10 pt-8 border-t border-border text-center">
                                    <p className="text-muted-foreground font-medium">
                                        Already part of the tech family?{" "}
                                        <a href="/login" className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline">
                                            Log in here
                                        </a>
                                    </p>
                                </div>
                            </>
                        ) : (
                            <SuccessState onGoBack={() => setIsSuccess(false)} />
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Right side: Illustration (Desktop only) */}
            <SignupImage />
        </div>
    );
}
