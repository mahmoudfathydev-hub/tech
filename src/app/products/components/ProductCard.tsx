"use client";

import Image from "next/image";
import { Star, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product, ViewMode } from "@/types/product";

interface ProductCardProps {
    product: Product;
    viewMode: ViewMode;
    onViewDetails: (product: Product) => void;
}

export default function ProductCard({
    product,
    viewMode,
    onViewDetails,
}: ProductCardProps) {
    const discountedPrice = (
        product.price * (1 - product.discountPercentage / 100)
    ).toFixed(2);

    if (viewMode === "list") {
        return (
            <div
                className="group flex gap-4 p-4 rounded-xl border border-border/50
                   bg-card hover:shadow-lg hover:border-border transition-all duration-300"
            >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-lg overflow-hidden bg-muted">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        sizes="160px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                    {product.discountPercentage > 5 && (
                        <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-500 text-white text-[10px]">
                            -{Math.round(product.discountPercentage)}%
                        </Badge>
                    )}
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0 py-1">
                    <div>
                        <p className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-1">
                            {product.category}
                        </p>
                        <h3 className="font-semibold text-base truncate">
                            {product.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {product.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-bold">${discountedPrice}</span>
                            {product.discountPercentage > 5 && (
                                <span className="text-sm text-muted-foreground line-through">
                                    ${product.price}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1 text-sm">
                                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                {product.rating.toFixed(1)}
                            </span>
                            <Button
                                size="sm"
                                variant="outline"
                                className="gap-1.5"
                                onClick={() => onViewDetails(product)}
                            >
                                <Eye className="h-3.5 w-3.5" />
                                Details
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Grid view
    return (
        <div
            className="group relative flex flex-col rounded-xl border border-border/50
                 bg-card overflow-hidden hover:shadow-lg hover:border-border
                 transition-all duration-300"
        >
            <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                {product.discountPercentage > 5 && (
                    <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-500 text-white text-[10px]">
                        -{Math.round(product.discountPercentage)}%
                    </Badge>
                )}
                <div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20
                     transition-colors duration-300 flex items-center justify-center"
                >
                    <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 translate-y-2
                       group-hover:translate-y-0 transition-all duration-300 gap-1.5"
                        onClick={() => onViewDetails(product)}
                    >
                        <Eye className="h-3.5 w-3.5" />
                        Quick View
                    </Button>
                </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
                <p className="text-[11px] font-medium text-primary/70 uppercase tracking-wider mb-1">
                    {product.category}
                </p>
                <h3 className="font-semibold text-sm truncate mb-2">{product.title}</h3>
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-base font-bold">${discountedPrice}</span>
                        {product.discountPercentage > 5 && (
                            <span className="text-xs text-muted-foreground line-through">
                                ${product.price}
                            </span>
                        )}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {product.rating.toFixed(1)}
                    </span>
                </div>
            </div>
        </div>
    );
}
