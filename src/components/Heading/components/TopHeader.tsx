"use client";

import { Marquee } from "@/components/ui/marquee";

export default function TopHeader() {
    return (
        <div className="w-full bg-black text-white sticky top-0 z-50">
            <Marquee className="[--duration:10s]" pauseOnHover>
                <span className="text-sm font-semibold tracking-wide mx-4">
                    🔥 SALE 35% until the end of the month 
                </span>
            </Marquee>
        </div>
    );
}
