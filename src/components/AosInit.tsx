"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AosInit() {
    useEffect(() => {
        // Register ScrollTrigger if it hasn't been already
        gsap.registerPlugin(ScrollTrigger);

        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
            // offset: 100, // Optional: adjust if needed
        });

        // Sync AOS with GSAP ScrollTrigger
        // When ScrollTrigger refreshes (e.g. after pinning setup), refresh AOS
        const refreshAos = () => {
            AOS.refresh();
        };

        ScrollTrigger.addEventListener("refresh", refreshAos);

        // Also refresh after a short delay to catch any late layout changes
        const timer = setTimeout(refreshAos, 500);

        return () => {
            ScrollTrigger.removeEventListener("refresh", refreshAos);
            clearTimeout(timer);
        };
    }, []);

    return null;
}
