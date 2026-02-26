import { PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
    searchTerm: string;
    hasFilters: boolean;
    onClearAll: () => void;
}

export default function EmptyState({
    searchTerm,
    hasFilters,
    onClearAll,
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="rounded-full bg-muted p-6 mb-6">
                <PackageSearch className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground max-w-sm mb-6">
                {searchTerm
                    ? `We couldn't find any products matching "${searchTerm}". Try adjusting your search or filters.`
                    : hasFilters
                        ? "No products match the current filters. Try removing some filters."
                        : "No products available at the moment."}
            </p>
            {(searchTerm || hasFilters) && (
                <Button
                    id="empty-state-clear-filters"
                    variant="outline"
                    onClick={onClearAll}
                >
                    Clear All Filters
                </Button>
            )}
        </div>
    );
}
