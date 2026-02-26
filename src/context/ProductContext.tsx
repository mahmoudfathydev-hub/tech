"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import {
  Product,
  SortOption,
  ViewMode,
  ProductFilters,
} from "@/types/product";
import { fetchAllProducts } from "@/api/products";
import { useDebounce } from "@/hooks/useDebounce";

// ─── Constants ────────────────────────────────────────────────────
const ITEMS_PER_PAGE = 12;
const DEFAULT_FILTERS: ProductFilters = {
  categories: [],
  brands: [],
  priceRange: [0, 10000],
  minRating: 0,
};

// ─── Context Type ─────────────────────────────────────────────────
interface ProductContextType {
  // Data
  products: Product[];
  filteredProducts: Product[];
  paginatedProducts: Product[];
  bestSellers: Product[];
  selectedProduct: Product | null;

  // Derived data
  allCategories: string[];
  allBrands: string[];
  totalPages: number;
  totalResults: number;

  // State
  isLoading: boolean;
  searchTerm: string;
  sortOption: SortOption;
  viewMode: ViewMode;
  currentPage: number;
  filters: ProductFilters;
  isModalOpen: boolean;
  isFilterSidebarOpen: boolean;

  // Actions
  setSearchTerm: (term: string) => void;
  setSortOption: (option: SortOption) => void;
  setViewMode: (mode: ViewMode) => void;
  setCurrentPage: (page: number) => void;
  setFilters: (filters: ProductFilters) => void;
  toggleCategory: (category: string) => void;
  toggleBrand: (brand: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setMinRating: (rating: number) => void;
  clearFilters: () => void;
  removeFilter: (type: string, value: string) => void;
  openProductModal: (product: Product) => void;
  closeProductModal: () => void;
  setFilterSidebarOpen: (open: boolean) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

// ─── Helper: Sort Products ────────────────────────────────────────
function sortProducts(products: Product[], option: SortOption): Product[] {
  const sorted = [...products];
  switch (option) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sorted;
  }
}

// ─── Helper: Filter Products ──────────────────────────────────────
function filterProducts(
  products: Product[],
  searchTerm: string,
  filters: ProductFilters
): Product[] {
  return products.filter((product) => {
    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const matchesSearch =
        product.title.toLowerCase().includes(term) ||
        product.brand?.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);
      if (!matchesSearch) return false;
    }

    // Category filter
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    ) {
      return false;
    }

    // Brand filter
    if (
      filters.brands.length > 0 &&
      !filters.brands.includes(product.brand)
    ) {
      return false;
    }

    // Price range filter
    if (
      product.price < filters.priceRange[0] ||
      product.price > filters.priceRange[1]
    ) {
      return false;
    }

    // Rating filter
    if (product.rating < filters.minRating) {
      return false;
    }

    return true;
  });
}

// ─── Provider ─────────────────────────────────────────────────────
export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Core data
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Search & filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<ProductFilters>(DEFAULT_FILTERS);

  // Modal state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterSidebarOpen, setFilterSidebarOpen] = useState(false);

  // Debounced search
  const debouncedSearch = useDebounce(searchTerm, 300);

  // Fetch products
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchAllProducts();
      setProducts(data);
      setIsLoading(false);
    };
    loadData();
  }, []);

  // Sync with URL params
  // To avoid Suspense issues at the root, we use a component that only mounts on client
  // and reads params.
  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts: [], // Placeholder, see below
        paginatedProducts: [], // Placeholder, see below
        bestSellers: [], // Placeholder, see below
        selectedProduct,
        allCategories: [], // Placeholder
        allBrands: [], // Placeholder
        totalPages: 0,
        totalResults: 0,
        isLoading,
        searchTerm,
        sortOption,
        viewMode,
        currentPage,
        filters,
        isModalOpen,
        isFilterSidebarOpen,
        setSearchTerm,
        setSortOption,
        setViewMode,
        setCurrentPage,
        setFilters,
        toggleCategory: () => { }, // Placeholder
        toggleBrand: () => { }, // Placeholder
        setPriceRange: () => { },
        setMinRating: () => { },
        clearFilters: () => { },
        removeFilter: () => { },
        openProductModal: () => { },
        closeProductModal: () => { },
        setFilterSidebarOpen,
      }}
    >
      <ProductProviderInner
        products={products}
        isLoading={isLoading}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
        viewMode={viewMode}
        setViewMode={setViewMode}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filters={filters}
        setFilters={setFilters}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isFilterSidebarOpen={isFilterSidebarOpen}
        setFilterSidebarOpen={setFilterSidebarOpen}
        debouncedSearch={debouncedSearch}
      >
        {children}
      </ProductProviderInner>
    </ProductContext.Provider>
  );
};

// Internal provider to handle logic and optional Suspense
function ProductProviderInner({
  children,
  products,
  isLoading,
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
  viewMode,
  setViewMode,
  currentPage,
  setCurrentPage,
  filters,
  setFilters,
  selectedProduct,
  setSelectedProduct,
  isModalOpen,
  setIsModalOpen,
  isFilterSidebarOpen,
  setFilterSidebarOpen,
  debouncedSearch
}: any) {
  // Use search params for reactive updates
  return (
    <Suspense fallback={null}>
      <URLSync setFilters={setFilters} setSearchTerm={setSearchTerm} />
      <ProductLogic
        products={products}
        isLoading={isLoading}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
        viewMode={viewMode}
        setViewMode={setViewMode}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filters={filters}
        setFilters={setFilters}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isFilterSidebarOpen={isFilterSidebarOpen}
        setFilterSidebarOpen={setFilterSidebarOpen}
        debouncedSearch={debouncedSearch}
      >
        {children}
      </ProductLogic>
    </Suspense>
  );
}

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function URLSync({ setFilters, setSearchTerm }: any) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlCategory = searchParams.get("category");
    const urlBrand = searchParams.get("brand");
    const urlSearch = searchParams.get("search");

    if (urlCategory || urlBrand || urlSearch) {
      setFilters((prev: any) => ({
        ...prev,
        categories: urlCategory ? [urlCategory] : prev.categories,
        brands: urlBrand ? [urlBrand] : prev.brands,
      }));
      if (urlSearch) setSearchTerm(urlSearch);
    }
  }, [searchParams, setFilters, setSearchTerm]);

  return null;
}

function ProductLogic({
  children,
  products,
  isLoading,
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
  viewMode,
  setViewMode,
  currentPage,
  setCurrentPage,
  filters,
  setFilters,
  selectedProduct,
  setSelectedProduct,
  isModalOpen,
  setIsModalOpen,
  isFilterSidebarOpen,
  setFilterSidebarOpen,
  debouncedSearch
}: any) {

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, filters, sortOption, setCurrentPage]);

  // Derived: all categories & brands
  const allCategories = useMemo(
    () => [...new Set(products.map((p: Product) => p.category))].sort() as string[],
    [products]
  );

  const allBrands = useMemo(
    () =>
      [...new Set(products.map((p: Product) => p.brand).filter(Boolean))].sort() as string[],
    [products]
  );


  // Derived: filtered + sorted products
  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(products, debouncedSearch, filters);
    return sortProducts(filtered, sortOption);
  }, [products, debouncedSearch, filters, sortOption]);

  // Derived: pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const totalResults = filteredProducts.length;

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Derived: best sellers
  const bestSellers = useMemo(
    () => [...products].sort((a: Product, b: Product) => b.rating - a.rating).slice(0, 8),
    [products]
  );

  // ── Actions ───────────────────────────────────────────────────
  const toggleCategory = useCallback((category: string) => {
    setFilters((prev: any) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c: any) => c !== category)
        : [...prev.categories, category],
    }));
  }, [setFilters]);

  const toggleBrand = useCallback((brand: string) => {
    setFilters((prev: any) => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter((b: any) => b !== brand)
        : [...prev.brands, brand],
    }));
  }, [setFilters]);

  const setPriceRange = useCallback((range: [number, number]) => {
    setFilters((prev: any) => ({ ...prev, priceRange: range }));
  }, [setFilters]);

  const setMinRating = useCallback((rating: number) => {
    setFilters((prev: any) => ({ ...prev, minRating: rating }));
  }, [setFilters]);

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
    setSearchTerm("");
  }, [setFilters, setSearchTerm]);

  const removeFilter = useCallback((type: string, value: string) => {
    setFilters((prev: any) => {
      switch (type) {
        case "category":
          return {
            ...prev,
            categories: prev.categories.filter((c: any) => c !== value),
          };
        case "brand":
          return {
            ...prev,
            brands: prev.brands.filter((b: any) => b !== value),
          };
        case "rating":
          return { ...prev, minRating: 0 };
        default:
          return prev;
      }
    });
  }, [setFilters]);

  const openProductModal = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }, [setSelectedProduct, setIsModalOpen]);

  const closeProductModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, [setSelectedProduct, setIsModalOpen]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        paginatedProducts,
        bestSellers,
        selectedProduct,
        allCategories,
        allBrands,
        totalPages,
        totalResults,
        isLoading,
        searchTerm,
        sortOption,
        viewMode,
        currentPage,
        filters,
        isModalOpen,
        isFilterSidebarOpen,
        setSearchTerm,
        setSortOption,
        setViewMode,
        setCurrentPage,
        setFilters,
        toggleCategory,
        toggleBrand,
        setPriceRange,
        setMinRating,
        clearFilters,
        removeFilter,
        openProductModal,
        closeProductModal,
        setFilterSidebarOpen,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {

  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
