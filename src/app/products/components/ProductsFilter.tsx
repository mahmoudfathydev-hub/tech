"use client";

import { Button } from "@/components/ui/button";
import FilterTag from "./FilterTag";
import type { ProductFilters } from "@/types/product";

interface ActiveFilter {
    type: string;
    value: string;
    label: string;
}

interface ProductsFilterProps {
    filters: ProductFilters;
    searchTerm: string;
    onRemoveFilter: (type: string, value: string) => void;
    onClearAll: () => void;
}

function getActiveFilters(
    filters: ProductFilters,
    searchTerm: string
): ActiveFilter[] {
    const active: ActiveFilter[] = [];

    filters.categories.forEach((cat) =>
        active.push({ type: "category", value: cat, label: cat })
    );
    filters.brands.forEach((brand) =>
        active.push({ type: "brand", value: brand, label: brand })
    );
    if (filters.minRating > 0) {
        active.push({
            type: "rating",
            value: String(filters.minRating),
            label: `${filters.minRating}+ Stars`,
        });
    }
    if (searchTerm) {
        active.push({
            type: "search",
            value: searchTerm,
            label: `"${searchTerm}"`,
        });
    }
    return active;
}

export default function ProductsFilter({
    filters,
    searchTerm,
    onRemoveFilter,
    onClearAll,
}: ProductsFilterProps) {
    const activeFilters = getActiveFilters(filters, searchTerm);

    if (activeFilters.length === 0) return null;

    return (
        <div className="flex flex-wrap items-center gap-2 py-3">
            <span className="text-xs font-medium text-muted-foreground mr-1">
                Active Filters:
            </span>
            {activeFilters.map((filter) => (
                <FilterTag
                    key={`${filter.type}-${filter.value}`}
                    label={filter.label}
                    type={filter.type}
                    value={filter.value}
                    onRemove={onRemoveFilter}
                />
            ))}
            <Button
                id="clear-all-filters"
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground hover:text-destructive h-7"
                onClick={onClearAll}
            >
                Clear All
            </Button>
        </div>
    );
}
