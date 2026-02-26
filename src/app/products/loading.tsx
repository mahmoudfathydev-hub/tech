import ProductCardSkeleton from "./components/ProductCardSkeleton";

export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header Skeleton */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4 max-w-lg">
                        <div className="h-4 w-28 bg-primary/10 rounded-full animate-pulse" />
                        <div className="h-12 w-80 bg-foreground/5 rounded-2xl animate-pulse" />
                        <div className="h-5 w-full bg-muted/60 rounded-xl animate-pulse" />
                    </div>
                    <div className="flex gap-4">
                        <div className="h-10 w-24 bg-muted/60 rounded-xl animate-pulse" />
                        <div className="h-10 w-24 bg-muted/60 rounded-xl animate-pulse" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Filters Sidebar Skeleton (Visible on Desktop) */}
                    <aside className="hidden lg:block lg:col-span-3 space-y-10">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="space-y-4">
                                <div className="h-5 w-24 bg-foreground/10 rounded-lg animate-pulse" />
                                <div className="space-y-2">
                                    {[...Array(5)].map((_, j) => (
                                        <div key={j} className="h-4 w-full bg-muted/40 rounded-md animate-pulse" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </aside>

                    {/* Product Grid Skeleton */}
                    <div className="lg:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(9)].map((_, i) => (
                                <ProductCardSkeleton key={i} />
                            ))}
                        </div>

                        {/* Pagination Skeleton */}
                        <div className="mt-12 flex justify-center py-4">
                            <div className="h-10 w-64 bg-muted/50 rounded-xl animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
