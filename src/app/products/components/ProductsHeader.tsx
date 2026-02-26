"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductsHeaderProps {
  totalResults: number;
  onOpenFilters: () => void;
}

export default function ProductsHeader({
  totalResults,
  onOpenFilters,
}: ProductsHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All Products
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Discover our curated collection of premium tech products.
            <span className="ml-1 font-medium text-foreground">
              {totalResults} products
            </span>
          </p>
        </div>

        {/* Mobile Filter Toggle (Visible only on mobile/tablet) */}
        <Button
          id="mobile-filter-toggle"
          variant="outline"
          size="sm"
          className="lg:hidden h-10 px-3 shrink-0 flex items-center gap-2"
          onClick={onOpenFilters}
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span className="text-xs font-medium">Filters</span>
        </Button>
      </div>
    </div>
  );
}

