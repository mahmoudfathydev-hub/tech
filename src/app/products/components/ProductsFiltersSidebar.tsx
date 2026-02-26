"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import type { ProductFilters } from "@/types/product";

interface ProductsFiltersSidebarProps {
    filters: ProductFilters;
    allCategories: string[];
    allBrands: string[];
    isOpen: boolean;
    onToggleCategory: (category: string) => void;
    onToggleBrand: (brand: string) => void;
    onSetMinRating: (rating: number) => void;
    onClearFilters: () => void;
    onClose: () => void;
}

const RATING_OPTIONS = [4, 3, 2, 1];

function FilterContent({
    filters,
    allCategories,
    allBrands,
    onToggleCategory,
    onToggleBrand,
    onSetMinRating,
    onClearFilters,
}: Omit<ProductsFiltersSidebarProps, "isOpen" | "onClose">) {
    return (
        <div className="space-y-6">
            {/* Categories */}
            <div>
                <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">
                    Categories
                </h3>
                <div className="space-y-1.5">
                    {allCategories.map((category) => {
                        const isActive = filters.categories.includes(category);
                        return (
                            <button
                                key={category}
                                onClick={() => onToggleCategory(category)}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                  ${isActive
                                        ? "bg-primary text-primary-foreground font-medium"
                                        : "hover:bg-muted text-foreground"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
            </div>

            <Separator />

            {/* Brands */}
            <div>
                <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">
                    Brands
                </h3>
                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                    {allBrands.map((brand) => {
                        const isActive = filters.brands.includes(brand);
                        return (
                            <button
                                key={brand}
                                onClick={() => onToggleBrand(brand)}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                  ${isActive
                                        ? "bg-primary text-primary-foreground font-medium"
                                        : "hover:bg-muted text-foreground"
                                    }`}
                            >
                                {brand}
                            </button>
                        );
                    })}
                </div>
            </div>

            <Separator />

            {/* Rating */}
            <div>
                <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">
                    Minimum Rating
                </h3>
                <div className="space-y-1.5">
                    {RATING_OPTIONS.map((rating) => {
                        const isActive = filters.minRating === rating;
                        return (
                            <button
                                key={rating}
                                onClick={() => onSetMinRating(isActive ? 0 : rating)}
                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors
                  ${isActive
                                        ? "bg-primary text-primary-foreground font-medium"
                                        : "hover:bg-muted text-foreground"
                                    }`}
                            >
                                <span className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-3.5 w-3.5 ${i < rating
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-muted-foreground/30"
                                                }`}
                                        />
                                    ))}
                                </span>
                                <span>& Up</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <Separator />

            <Button
                id="sidebar-clear-filters"
                variant="outline"
                className="w-full"
                onClick={onClearFilters}
            >
                Reset All Filters
            </Button>
        </div>
    );
}

export default function ProductsFiltersSidebar(
    props: ProductsFiltersSidebarProps
) {
    const { isOpen, onClose, ...filterProps } = props;

    return (
        <>
            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-64 shrink-0 space-y-6 pr-6 border-r border-border/50">
                <h2 className="text-lg font-semibold">Filters</h2>
                <FilterContent {...filterProps} />
            </aside>

            {/* Mobile sheet */}
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                        <FilterContent {...filterProps} />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}
