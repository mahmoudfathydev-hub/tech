import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-xl border border-border/50 bg-card shadow-sm h-full">
            {/* Thumbnail Skeleton */}
            <Skeleton className="aspect-square w-full rounded-lg" />

            <div className="space-y-3 mt-auto">
                {/* Category & Rating Skeleton */}
                <div className="flex justify-between items-center">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-10" />
                </div>

                {/* Title Skeleton */}
                <Skeleton className="h-4 w-3/4" />

                {/* Price & Rating (small icons) Skeleton */}
                <div className="flex items-center justify-between pt-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-4 w-12" />
                </div>

                {/* Add to Cart Button Skeleton */}
                <Skeleton className="h-10 w-full rounded-lg" />
            </div>
        </div>
    );
}
