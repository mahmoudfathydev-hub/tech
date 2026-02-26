import React from "react";
import Image from "next/image";

export const SignupImage: React.FC = () => {
    return (
        <div className="hidden lg:flex flex-1 items-center justify-center p-12 bg-secondary/30 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative elements behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full aspect-square max-w-[500px] animate-float">
                <Image
                    src="/images/signup.png"
                    alt="Sign Up illustration"
                    fill
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                    priority
                />
            </div>

            <div className="absolute bottom-12 left-12 right-12 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-2">Elevate Your Technology</h2>
                <p className="text-muted-foreground text-sm max-w-[300px] mx-auto">
                    Experience the next generation of digital solutions with our premium platform.
                </p>
            </div>
        </div>
    );
};
