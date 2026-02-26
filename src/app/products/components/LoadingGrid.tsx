export default function LoadingGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 12 }, (_, i) => (
                <div
                    key={i}
                    className="rounded-xl border border-border/50 bg-card overflow-hidden animate-pulse"
                >
                    {/* Image skeleton */}
                    <div className="aspect-square bg-muted" />

                    {/* Content skeleton */}
                    <div className="p-4 space-y-3">
                        <div className="h-3 bg-muted rounded-full w-16" />
                        <div className="h-4 bg-muted rounded-full w-3/4" />
                        <div className="flex justify-between items-center pt-2">
                            <div className="h-5 bg-muted rounded-full w-20" />
                            <div className="h-3 bg-muted rounded-full w-10" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
