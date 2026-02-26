import Link from "next/link";

const BestSellerHeader = () => {
    return (
        <div className="container mx-auto px-4 z-10 mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <span className="inline-block px-3 py-1 bg-[#1c6fd1]/10 text-[#1c6fd1] rounded-full text-[10px] uppercase tracking-widest font-bold mb-3 border border-[#1c6fd1]/20">
                        Popular Choice
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                        Best Sellers <span className="text-[#1c6fd1]">Products.</span>
                    </h2>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium max-w-md">
                        Discover our top-rated tech products that customers love most this month.
                    </p>
                </div>
                <Link
                    href="/products"
                    className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl font-bold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm group"
                >
                    View Collection
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1c6fd1] transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>

            </div>
        </div>
    );
};

export default BestSellerHeader;
