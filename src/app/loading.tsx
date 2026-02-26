import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Hero Skeleton (approximation) */}
            <section className="relative h-[80vh] flex items-center justify-center p-8 bg-muted/20">
                <div className="max-w-4xl w-full text-center space-y-8">
                    <Skeleton className="h-16 w-3/4 mx-auto rounded-3xl" />
                    <Skeleton className="h-16 w-1/2 mx-auto rounded-3xl" />
                    <Skeleton className="h-4 w-5/6 mx-auto rounded-xl" />
                    <div className="flex justify-center gap-6 pt-10">
                        <Skeleton className="h-16 w-48 rounded-2xl" />
                        <Skeleton className="h-16 w-48 rounded-2xl" />
                    </div>
                </div>
            </section>

            {/* Basic Featured Section Skeleton */}
            <section className="py-24 px-8 max-w-7xl mx-auto w-full">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <Skeleton className="h-4 w-32 rounded-full" />
                    <Skeleton className="h-10 w-64 rounded-xl" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="space-y-4">
                            <Skeleton className="aspect-square w-full rounded-3xl" />
                            <Skeleton className="h-4 w-3/4 rounded-lg" />
                            <Skeleton className="h-6 w-1/4 rounded-lg" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
