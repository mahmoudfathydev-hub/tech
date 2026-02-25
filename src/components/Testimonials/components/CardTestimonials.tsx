"use client";

import React, { useMemo } from "react";
import { useProducts } from "@/context/ProductContext";
import Image from "next/image";
const SHUFFLE_SEED = Date.now();

const CardTestimonials = () => {
  const { products, isLoading } = useProducts();

  const displayReviews = useMemo(() => {
    if (!products || products.length === 0) return [];

    const allReviews = products.flatMap((product) =>
      product.reviews.map((review) => ({
        ...review,
        productTitle: product.title,
        productThumbnail: product.thumbnail,
      })),
    );

    const filtered = allReviews.filter((review) => review.rating >= 4);
    const shuffled = [...filtered].sort((a, b) => {
      const hashA =
        a.reviewerEmail
          .split("")
          .reduce((acc, char) => acc + char.charCodeAt(0), 0) + SHUFFLE_SEED;
      const hashB =
        b.reviewerEmail
          .split("")
          .reduce((acc, char) => acc + char.charCodeAt(0), 0) + SHUFFLE_SEED;
      return hashA - hashB;
    });

    const unique = [];
    const used = new Set();

    for (const review of shuffled) {
      if (!used.has(review.productTitle)) {
        unique.push(review);
        used.add(review.productTitle);
      }
      if (unique.length === 3) break;
    }

    return unique;
  }, [products, SHUFFLE_SEED]);

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <div className="w-10 h-10 border-4 border-[#2384eb]/20 border-t-[#2384eb] rounded-full animate-spin" />
      </div>
    );
  }

  if (displayReviews.length !== 3) return null;

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
        {displayReviews.map((review, idx) => {
          const isMiddle = idx === 1;

          return (
            <div
              key={`${review.reviewerEmail}-${idx}`}
              data-aos={isMiddle ? "zoom-in-up" : "zoom-in-down"}
              data-aos-offset="200"
              data-aos-delay={idx * 100}
              className={`
                                bg-[#6b6b6454] dark:bg-gray-900 
                                rounded-3xl 
                                border border-gray-100 dark:border-white/10
                                shadow-xl
                                p-6 md:p-8
                                ${isMiddle ? "mb-0 md:mb-0" : "mb-8 md:mb-20"}`}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-linear-to-br from-[#2384eb] to-[#144a94] flex items-center justify-center text-white text-lg md:text-xl font-bold mb-4 md:mb-6">
                {(review.reviewerName || "U").charAt(0)}
              </div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-base md:text-lg capitalize text-gray-900 dark:text-white">
                  {review.reviewerName}
                </h4>

                <div className="flex gap-1 text-yellow-400 text-xs md:text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-xs md:text-sm">
                “{review.comment}”
              </p>
              <div className="mt-4 md:mt-6 flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-xs font-semibold">
                <Image
                  src={review.productThumbnail}
                  className="w-5 h-5 rounded-full object-cover"
                  alt="product thumbnail"
                  width={20}
                  height={20}
                />
                <span className="truncate max-w-24 md:max-w-30">
                  {review.productTitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardTestimonials;
