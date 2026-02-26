"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductsPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

function getPageNumbers(current: number, total: number): (number | "...")[] {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    const pages: (number | "...")[] = [1];

    if (current > 3) pages.push("...");

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) pages.push(i);

    if (current < total - 2) pages.push("...");

    pages.push(total);
    return pages;
}

export default function ProductsPagination({
    currentPage,
    totalPages,
    onPageChange,
}: ProductsPaginationProps) {
    if (totalPages <= 1) return null;

    const pages = getPageNumbers(currentPage, totalPages);

    return (
        <nav
            className="flex items-center justify-center gap-1 pt-8 pb-4"
            aria-label="Pagination"
        >
            <Button
                id="pagination-prev"
                variant="outline"
                size="icon"
                className="h-9 w-9"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            {pages.map((page, idx) =>
                page === "..." ? (
                    <span
                        key={`ellipsis-${idx}`}
                        className="w-9 h-9 flex items-center justify-center text-muted-foreground text-sm"
                    >
                        …
                    </span>
                ) : (
                    <Button
                        key={page}
                        variant={page === currentPage ? "default" : "outline"}
                        size="icon"
                        className="h-9 w-9 text-sm"
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </Button>
                )
            )}

            <Button
                id="pagination-next"
                variant="outline"
                size="icon"
                className="h-9 w-9"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </nav>
    );
}
