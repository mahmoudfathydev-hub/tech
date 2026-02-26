import Image from "next/image";
import Link from "next/link";
import Sale from "./components/Sale";
import HeroSwiper from "./components/Swiper";

function Hero() {
    return (
        <main className="p-4 sm:p-6 lg:p-10">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                    <div
                        data-aos="fade-right"
                        className="h-112.5 sm:h-125 lg:h-140 xl:h-155 w-full lg:w-3/4 rounded-3xl overflow-hidden shadow-2xl relative">
                        <HeroSwiper />
                    </div>
                    <div
                        data-aos="fade-left"
                        className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 w-full lg:w-1/4">
                        <div className="flex-1 flex flex-col justify-between rounded-3xl bg-[#1c6fd1] overflow-hidden shadow-2xl border border-white/10 relative group transition-all duration-500 hover:shadow-[#1c6fd1]/20">
                            <div className="h-1/2 min-h-45 relative overflow-hidden">
                                <Image
                                    src="/images/heroImg.png"
                                    alt="Special Offers"
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#1c6fd1] via-transparent to-black/20" />
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] text-white font-bold uppercase tracking-wider border border-white/20">
                                        Weekly Deals
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 p-4 flex flex-col justify-center relative bg-[#1c6fd1]">
                                <Sale />
                                <div className="mt-2 text-center">
                                    <span className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">Limited Time Offers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link
                    href="/products"
                    className="mt-4 sm:mt-6 h-32 sm:h-40 xl:h-32 w-full rounded-3xl bg-linear-to-r from-[#1c6fd1] via-[#1c6fd1] to-[#0f3d75] flex items-center justify-between px-6 sm:px-12 text-white overflow-hidden relative group cursor-pointer shadow-xl border border-white/10 block">
                    <div className="relative z-10 lg:max-w-xl">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest mb-2 font-bold">Flash Sale</span>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-1 leading-none tracking-tight">UP TO 70% OFF!</h3>
                        <p className="text-white/90 text-xs sm:text-sm lg:text-base font-medium">Mega discounts on latest gadgets and premium tech accessories.</p>
                    </div>
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="hidden xl:flex flex-col items-end mr-4">
                            <span className="text-xs uppercase opacity-70">Ending in</span>
                            <span className="text-xl font-mono font-bold">10 October</span>
                        </div>
                        <button className="px-6 py-2.5 bg-white text-[#1c6fd1] rounded-xl font-bold transform transition-all duration-300 group-hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg shadow-black/10 hidden sm:block hover:bg-slate-50">
                            Shop All Deals
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl transition-opacity group-hover:opacity-70" />
                    <div className="absolute -bottom-10 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
                    <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse" />
                </Link>
            </div>
        </main>
    );
}


export default Hero;