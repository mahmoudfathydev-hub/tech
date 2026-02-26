"use client";

import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { SortOption, ViewMode } from "@/types/product";

interface ProductsSortBarProps {
    sortOption: SortOption;
    viewMode: ViewMode;
    totalResults: number;
    currentPage: number;
    totalPages: number;
    onSortChange: (option: SortOption) => void;
    onViewModeChange: (mode: ViewMode) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
    { value: "default", label: "Default" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "rating", label: "Top Rated" },
    { value: "name-asc", label: "Name: A–Z" },
    { value: "name-desc", label: "Name: Z–A" },
];

export default function ProductsSortBar({
    sortOption,
    viewMode,
    totalResults,
    currentPage,
    totalPages,
    onSortChange,
    onViewModeChange,
}: ProductsSortBarProps) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-border/50">
            {/* Results info */}
            <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-medium text-foreground">{totalResults}</span>{" "}
                results
                {totalPages > 1 && (
                    <span>
                        {" · Page "}
                        <span className="font-medium text-foreground">{currentPage}</span>
                        {" of "}
                        <span className="font-medium text-foreground">{totalPages}</span>
                    </span>
                )}
            </p>

            {/* Sort & View Controls */}
            <div className="flex items-center gap-2">
                <Select
                    value={sortOption}
                    onValueChange={(val) => onSortChange(val as SortOption)}
                >
                    <SelectTrigger
                        id="sort-select"
                        className="w-[180px] h-9 text-sm bg-muted/50"
                    >
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        {SORT_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {/* View toggle */}
                <div className="hidden sm:flex items-center border rounded-lg overflow-hidden">
                    <Button
                        id="grid-view-btn"
                        variant={viewMode === "grid" ? "default" : "ghost"}
                        size="icon"
                        className="h-9 w-9 rounded-none"
                        onClick={() => onViewModeChange("grid")}
                    >
                        <LayoutGrid className="h-4 w-4" />
                    </Button>
                    <Button
                        id="list-view-btn"
                        variant={viewMode === "list" ? "default" : "ghost"}
                        size="icon"
                        className="h-9 w-9 rounded-none"
                        onClick={() => onViewModeChange("list")}
                    >
                        <List className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
