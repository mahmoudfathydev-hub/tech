import { Product, ProductsResponse } from "@/types/product";

const BASE_URL = "https://dummyjson.com/products";

const CATEGORIES = [
  "smartphones",
  "laptops",
  "tablets",
  "mobile-accessories",
];

/**
 * Fetches products from DummyJSON API for specific categories and merges them.
 * This is designed to be scalable and easily integrated with React Query later.
 */
export const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    // Fetch all categories in parallel for better performance
    const fetchPromises = CATEGORIES.map((category) =>
      fetch(`${BASE_URL}/category/${category}`).then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch ${category}`);
        return res.json() as Promise<ProductsResponse>;
      })
    );

    const responses = await Promise.all(fetchPromises);

    // Flatten the products from all categories into a single array
    const combinedProducts = responses.flatMap((res) => res.products);

    return combinedProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
