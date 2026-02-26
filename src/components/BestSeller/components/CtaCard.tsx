import Link from "next/link";

const CtaCard = () => {
    return (
        <Link href="/products" className="min-w-70 h-100 bg-linear-to-br from-[#1c6fd1] to-[#0f3d75] rounded-3xl p-8 flex flex-col justify-end text-white relative overflow-hidden group cursor-pointer shadow-xl">
            <div className="relative z-10">
                <h3 className="text-2xl font-black mb-2 leading-tight">
                    More Tech Waiting For You
                </h3>
                <p className="text-white/80 text-sm mb-6">
                    Explore 50+ more products in our collection.
                </p>
                <div className="flex items-center gap-2 font-bold group-hover:translate-x-2 transition-transform">
                    Browse All <span className="text-xl">→</span>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-xl" />
        </Link>
    );
};

export default CtaCard;

