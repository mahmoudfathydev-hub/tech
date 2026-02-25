"use client";

import React, { useEffect, useRef } from "react";
import { useProducts } from "@/context/ProductContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "./components/ProductCard";
import BestSellerHeader from "./components/BestSellerHeader";
import LoadingSpinner from "./components/LoadingSpinner";
import CtaCard from "./components/CtaCard";

gsap.registerPlugin(ScrollTrigger);

const BestSeller = () => {
    const { bestSellers, isLoading } = useProducts();
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isLoading || bestSellers.length === 0) return;

        const ctx = gsap.context(() => {
            const cardsContainer = cardsRef.current;
            const mainContainer = containerRef.current;
            if (!cardsContainer || !mainContainer) return;

            const totalScroll =
                cardsContainer.scrollWidth - mainContainer.offsetWidth;

            if (totalScroll <= 0) return;

            gsap.to(cardsContainer, {
                x: -totalScroll,
                ease: "none",
                scrollTrigger: {
                    trigger: mainContainer,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => "+=" + totalScroll,
                    invalidateOnRefresh: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [isLoading, bestSellers.length]);

    if (isLoading) return <LoadingSpinner />;

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center py-16 bg-linear-to-b from-transparent to-gray-50/50 dark:to-gray-900/10"
        >
            <BestSellerHeader />

            <div
                ref={cardsRef}
                className="flex flex-nowrap items-center px-4 md:px-10 gap-6 w-max"
            >
                {bestSellers.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

                <CtaCard />
            </div>
        </section>
    );
};

export default BestSeller;
