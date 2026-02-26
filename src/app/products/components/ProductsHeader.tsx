"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProductsHeaderProps {
  searchTerm: string;
  totalResults: number;
  onSearchChange: (value: string) => void;
  onOpenFilters: () => void;
}

export default function ProductsHeader({
  searchTerm,
  totalResults,
  onSearchChange,
  onOpenFilters,
}: ProductsHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Title Section */}
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

      {/* Search + Filter Toggle */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="product-search-input"
            type="text"
            placeholder="Search products, brands, categories..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 h-11 bg-muted/50 border-border/60 focus-visible:ring-primary/30"
          />
        </div>
        <Button
          id="mobile-filter-toggle"
          variant="outline"
          size="icon"
          className="lg:hidden h-11 w-11 shrink-0"
          onClick={onOpenFilters}
        >
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
