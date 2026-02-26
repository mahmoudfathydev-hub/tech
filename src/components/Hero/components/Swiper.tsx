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
        {
            gradient: "from-[#1c6fd1] via-[#1c6fd1] to-[#0f3d75]",
            badge: "bg-white/15 text-white border border-white/30 backdrop-blur-md",
            dot: "bg-white"
        },
        {
            gradient: "from-[#1c6fd1] via-[#0f3d75] to-[#0b2f5f]",
            badge: "bg-white/15 text-white border border-white/30 backdrop-blur-md",
            dot: "bg-white"
        },
        {
            gradient: "from-[#1c6fd1] via-[#1c6fd1] to-[#1c6fd1]",
            badge: "bg-white/15 text-white border border-white/30 backdrop-blur-md",
            dot: "bg-white"
        },
        {
            gradient: "from-[#0f3d75] via-[#0f3d7a] to-[#0b2f5f]",
            badge: "bg-white/15 text-white border border-white/30 backdrop-blur-md",
            dot: "bg-white"
        }
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
                                <div className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] p-8 sm:p-10 lg:p-12 xl:p-16 text-center lg:text-left">
                                    <span className={`inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest ${colors.badge} backdrop-blur-md mb-4 sm:mb-6 mx-auto lg:mx-0 shadow-sm border border-white/20 transition-all hover:bg-white/30`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} animate-pulse`} />
                                        {product.category}
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-[1.1] mb-3 sm:mb-4 drop-shadow-2xl tracking-tight">
                                        {product.title}
                                    </h2>
                                    <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 line-clamp-3 lg:line-clamp-2 max-w-xl mx-auto lg:mx-0 font-medium">
                                        {product.description || "Discover premium quality products curated just for you."}
                                    </p>
                                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 sm:mb-8">
                                        <div className="flex flex-col items-start lg:items-start">
                                            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-lg">
                                                ${product.price}
                                            </span>
                                        </div>
                                        {product.rating && (
                                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md text-yellow-300 text-sm sm:text-base font-bold border border-white/10 shadow-lg">
                                                ★ {product.rating.toFixed(1)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                                        <button className="px-6 sm:px-8 py-2.5 sm:py-3.5 bg-white text-[#1c6fd1] rounded-2xl font-bold text-sm sm:text-base hover:bg-slate-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-black/20 cursor-pointer flex items-center gap-2">
                                            Add to Cart
                                        </button>

                                        <button className="px-6 sm:px-8 py-2.5 sm:py-3.5 bg-white/10 text-white rounded-2xl font-bold text-sm sm:text-base backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                                            View Specs
                                        </button>
                                    </div>
                                </div>
                                <div className="relative z-10 w-full lg:w-[45%] h-64 sm:h-96 lg:h-auto flex items-center justify-center p-8 sm:p-12">
                                    <div className="relative w-full h-full flex items-center justify-center group/img">
                                        <div className={`absolute inset-0 bg-white/30 rounded-full blur-[100px] scale-90 opacity-40 group-hover/img:opacity-70 transition-opacity duration-1000 animate-pulse`} />
                                        <div className="relative w-full h-full transform transition-all duration-700 group-hover/img:-translate-y-2.5 sm:group-hover/img:-translate-y-5">
                                            <Image
                                                src={product.images[2] || product.thumbnail}
                                                alt={product.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 45vw"
                                                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] select-none"
                                                priority
                                            />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-2xl hidden sm:block shadow-2xl transform rotate-3">
                                            <p className="text-white text-[10px] font-bold uppercase tracking-tighter opacity-60 mb-1">Authentic Gear</p>
                                            <div className="flex items-center gap-1.5 leading-none">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                                <span className="text-white text-xs font-black">In Stock Now</span>
                                            </div>
                                        </div>
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
