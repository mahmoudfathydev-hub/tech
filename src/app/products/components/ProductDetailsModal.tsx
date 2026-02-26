"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Package, Tag } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Product } from "@/types/product";
import { useProducts } from "@/context/ProductContext";

interface ProductDetailsModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductDetailsModal({
    product,
    isOpen,
    onClose,
}: ProductDetailsModalProps) {
    const { addToCart } = useProducts();
    const [selectedImage, setSelectedImage] = useState(0);

    if (!product) return null;

    const discountedPrice = (
        product.price * (1 - product.discountPercentage / 100)
    ).toFixed(2);

    const images = product.images?.length ? product.images : [product.thumbnail];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
                <DialogHeader className="px-6 pt-6">
                    <DialogTitle className="text-xl font-bold">
                        {product.title}
                    </DialogTitle>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6 p-6 pt-2">
                    {/* Image gallery */}
                    <div className="space-y-3">
                        <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                            <Image
                                src={images[selectedImage]}
                                alt={product.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                        {images.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto pb-1">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0
                      border-2 transition-colors ${idx === selectedImage
                                                ? "border-primary"
                                                : "border-transparent hover:border-border"
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${product.title} ${idx + 1}`}
                                            fill
                                            sizes="64px"
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="secondary">{product.category}</Badge>
                            {product.brand && (
                                <Badge variant="outline">{product.brand}</Badge>
                            )}
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>

                        <Separator />

                        {/* Pricing */}
                        <div className="space-y-1">
                            <div className="flex items-baseline gap-3">
                                <span className="text-2xl font-bold">${discountedPrice}</span>
                                {product.discountPercentage > 5 && (
                                    <>
                                        <span className="text-base text-muted-foreground line-through">
                                            ${product.price}
                                        </span>
                                        <Badge className="bg-red-500 hover:bg-red-500 text-white text-[10px]">
                                            -{Math.round(product.discountPercentage)}% OFF
                                        </Badge>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Rating & Stock */}
                        <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1.5">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">{product.rating.toFixed(1)}</span>
                                <span className="text-muted-foreground">
                                    ({product.reviews?.length || 0} reviews)
                                </span>
                            </span>
                            <span className="flex items-center gap-1.5 text-muted-foreground">
                                <Package className="h-4 w-4" />
                                {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                            </span>
                        </div>

                        <Separator />

                        {/* Reviews preview */}
                        {product.reviews && product.reviews.length > 0 && (
                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold flex items-center gap-1.5">
                                    <Tag className="h-4 w-4" />
                                    Recent Reviews
                                </h4>
                                <div className="space-y-2 max-h-40 overflow-y-auto">
                                    {product.reviews.slice(0, 3).map((review, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-muted/50 rounded-lg p-3 text-sm"
                                        >
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="flex items-center gap-0.5">
                                                    {Array.from({ length: 5 }, (_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-3 w-3 ${i < review.rating
                                                                ? "fill-yellow-400 text-yellow-400"
                                                                : "text-muted-foreground/30"
                                                                }`}
                                                        />
                                                    ))}
                                                </span>
                                                <span className="font-medium text-xs">
                                                    {review.reviewerName}
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground text-xs line-clamp-2">
                                                {review.comment}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <Button
                            id="add-to-cart-modal"
                            className="w-full mt-2"
                            size="lg"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
