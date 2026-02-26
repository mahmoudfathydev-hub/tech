export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  reviews: Review[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type SortOption = "default" | "price-asc" | "price-desc" | "rating" | "name-asc" | "name-desc";
export type ViewMode = "grid" | "list";

export interface ProductFilters {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  minRating: number;
}
