"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: number;
    thumbnail: string;
    images: string;
}

const urls: string[] = [
    "https://dummyjson.com/products/101",
    "https://dummyjson.com/products/78",
    "https://dummyjson.com/products/123",
    "https://dummyjson.com/products/79",
];

const HeroSwiper: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const requests = urls.map((url) =>
                    fetch(url).then((res) => {
                        if (!res.ok) {
                            throw new Error("Failed to fetch product");
                        }
                        return res.json();
                    })
                );

                const data: Product[] = await Promise.all(requests);
                setProducts(data);
            } catch (err) {
                setError("Something went wrong while fetching products");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="h-full w-full flex items-center justify-center rounded-3xl bg-linear-to-br from-slate-900 to-slate-800">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-3 border-white/20 border-t-white rounded-full animate-spin" />
                    <p className="text-white/60 text-sm tracking-wider uppercase">Loading products...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-full w-full flex items-center justify-center rounded-3xl bg-linear-to-br from-red-950 to-slate-900">
                <p className="text-red-400 text-sm">{error}</p>
            </div>
        );
    }

    const accentColors = [
        { gradient: "from-violet-600 via-purple-600 to-indigo-700", badge: "bg-violet-500/20 text-violet-300", dot: "bg-violet-400" },
        { gradient: "from-emerald-600 via-teal-600 to-cyan-700", badge: "bg-emerald-500/20 text-emerald-300", dot: "bg-emerald-400" },
        { gradient: "from-rose-600 via-pink-600 to-fuchsia-700", badge: "bg-rose-500/20 text-rose-300", dot: "bg-rose-400" },
        { gradient: "from-amber-600 via-orange-600 to-red-700", badge: "bg-amber-500/20 text-amber-300", dot: "bg-amber-400" },
    ];

    return (
        <div className="hero-swiper-wrapper h-full w-full rounded-3xl overflow-hidden relative">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: "hero-swiper-bullet",
                    bulletActiveClass: "hero-swiper-bullet-active",
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                speed={600}
                className="h-full w-full"
            >
                {products.map((product, index) => {
                    const colors = accentColors[index % accentColors.length];
                    return (
                        <SwiperSlide key={product.id}>
                            <div className={`h-full w-full bg-linear-to-br ${colors.gradient} relative flex flex-col lg:flex-row items-center lg:items-stretch overflow-hidden`}>
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
                                    <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
                                    <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                                </div>
                                <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 text-center lg:text-left">
                                    <span className={`inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wider ${colors.badge} backdrop-blur-sm mb-3 sm:mb-4 mx-auto lg:mx-0`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                                        {product.category}
                                    </span>
                                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white leading-tight mb-2 sm:mb-3 drop-shadow-lg">
                                        {product.title}
                                    </h2>
                                    <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-2">
                                        {product.description || "Discover premium quality products curated just for you."}
                                    </p>
                                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 sm:mb-6">
                                        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                                            ${product.price}
                                        </span>
                                        {product.rating && (
                                            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm text-yellow-300 text-xs sm:text-sm font-medium">
                                                ★ {product.rating.toFixed(1)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start gap-3">
                                        <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-gray-900 rounded-xl font-semibold text-xs sm:text-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/20 cursor-pointer">
                                            Shop Now
                                        </button>
                                        <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white/10 text-white rounded-xl font-semibold text-xs sm:text-sm backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                                            Details →
                                        </button>
                                    </div>
                                </div>
                                <div className="relative z-10 w-full lg:w-1/2 h-40 sm:h-56 lg:h-auto flex items-center justify-center p-4 sm:p-6">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div className="absolute inset-0 bg-white/10 rounded-2xl blur-2xl scale-90" />
                                        <Image
                                            src={product.images[2] || product.thumbnail}
                                            alt={product.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="relative object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105 rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <style jsx global>{`
                .hero-swiper-wrapper .swiper {
                    height: 100%;
                    width: 100%;
                }
                .hero-swiper-wrapper .swiper-slide {
                    height: 100% !important;
                }
                .hero-swiper-wrapper .swiper-pagination {
                    bottom: 16px !important;
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    z-index: 20;
                }
                .hero-swiper-bullet {
                    width: 32px;
                    height: 4px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.3);
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: inline-block;
                }
                .hero-swiper-bullet:hover {
                    background: rgba(255, 255, 255, 0.5);
                }
                .hero-swiper-bullet-active {
                    background: rgba(255, 255, 255, 0.95) !important;
                    width: 80px;
                    box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
                }
            `}</style>
        </div>
    );
};

export default HeroSwiper;
