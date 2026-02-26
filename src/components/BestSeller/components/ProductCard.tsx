import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useProducts } from "@/context/ProductContext";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { openProductModal, addToCart } = useProducts();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <div
            onClick={() => openProductModal(product)}
            className="card shrink-0 min-w-70 group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
        >
            <div className="relative h-56 w-full bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                />
                {product.discountPercentage > 0 && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full shadow-lg shadow-red-500/30">
                            -{Math.round(product.discountPercentage)}% OFF
                        </span>
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#1c6fd1] font-bold">
                        {product.category}
                    </span>
                    <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
                    <div className="flex items-center">
                        <span className="text-yellow-400 text-xs">★</span>
                        <span className="text-[10px] font-bold ml-1 text-gray-500">{product.rating}</span>
                    </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate mb-1">
                    {product.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-4 line-clamp-1">
                    {product.brand}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-2xl font-black text-[#1c6fd1]">
                            ${product.price}
                        </span>
                        {product.discountPercentage > 0 && (
                            <span className="text-xs text-gray-400 line-through">
                                ${Math.round(product.price * (1 + product.discountPercentage / 100))}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className="p-3 bg-gray-900 dark:bg-[#1c6fd1] text-white rounded-2xl cursor-pointer transform active:scale-90 transition-all hover:shadow-lg hover:shadow-[#1c6fd1]/20"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ProductCard;
