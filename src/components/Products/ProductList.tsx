"use client";

import { useProducts } from "@/context/ProductContext";

export const ProductList = () => {
    const { filteredProducts, isLoading, addToCart } = useProducts();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (filteredProducts.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500 text-lg">
                No products found matching your search.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {filteredProducts.map((product) => (
                <div
                    key={product.id}
                    className="border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white"
                >
                    <div className="relative h-48 overflow-hidden bg-gray-50">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        />
                        {product.discountPercentage > 0 && (
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                                -{Math.round(product.discountPercentage)}%
                            </span>
                        )}
                    </div>
                    <div className="p-4">
                        <p className="text-[10px] text-primary font-bold uppercase tracking-wider mb-1">
                            {product.category}
                        </p>
                        <h3 className="font-bold text-base mb-2 truncate group-hover:text-primary transition-colors">
                            {product.title}
                        </h3>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-black text-foreground">
                                ${product.price}
                            </span>
                            <div className="flex items-center">
                                <span className="text-yellow-400 text-sm mr-1">★</span>
                                <span className="text-xs font-bold text-muted-foreground">{product.rating}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => addToCart(product)}
                            className="w-full mt-4 bg-gray-900 text-white py-2.5 rounded-xl font-bold text-sm tracking-tight hover:bg-primary transition-all active:scale-[0.98] cursor-pointer"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
