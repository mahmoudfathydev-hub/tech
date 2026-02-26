"use client";

import { useProducts } from "@/context/ProductContext";
import ProductsHeader from "./components/ProductsHeader";
import ProductsSortBar from "./components/ProductsSortBar";
import ProductsFilter from "./components/ProductsFilter";
import ProductsFiltersSidebar from "./components/ProductsFiltersSidebar";
import ProductsGrid from "./components/ProductsGrid";
import ProductsPagination from "./components/ProductsPagination";
import ProductDetailsModal from "./components/ProductDetailsModal";
import LoadingGrid from "./components/LoadingGrid";
import EmptyState from "./components/EmptyState";

export default function ProductsPage() {
  const {
    paginatedProducts,
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
    toggleCategory,
    toggleBrand,
    setMinRating,
    clearFilters,
    removeFilter,
    openProductModal,
    closeProductModal,
    setFilterSidebarOpen,
  } = useProducts();

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    filters.minRating > 0;

  return (
    <main className="min-h-screen pb-12">
      <div className="container px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        {/* Header with search */}
        <ProductsHeader
          totalResults={totalResults}
          onOpenFilters={() => setFilterSidebarOpen(true)}
        />


        {/* Active filter tags */}
        <ProductsFilter
          filters={filters}
          searchTerm={searchTerm}
          onRemoveFilter={removeFilter}
          onClearAll={clearFilters}
        />

        {/* Sort bar */}
        <ProductsSortBar
          sortOption={sortOption}
          viewMode={viewMode}
          totalResults={totalResults}
          currentPage={currentPage}
          totalPages={totalPages}
          onSortChange={setSortOption}
          onViewModeChange={setViewMode}
        />

        {/* Content area with sidebar */}
        <div className="flex gap-8 mt-6">
          {/* Filters sidebar */}
          <ProductsFiltersSidebar
            filters={filters}
            allCategories={allCategories}
            allBrands={allBrands}
            isOpen={isFilterSidebarOpen}
            onToggleCategory={toggleCategory}
            onToggleBrand={toggleBrand}
            onSetMinRating={setMinRating}
            onClearFilters={clearFilters}
            onClose={() => setFilterSidebarOpen(false)}
          />

          {/* Products grid area */}
          <div className="flex-1 min-w-0">
            {isLoading ? (
              <LoadingGrid />
            ) : paginatedProducts.length === 0 ? (
              <EmptyState
                searchTerm={searchTerm}
                hasFilters={hasActiveFilters}
                onClearAll={clearFilters}
              />
            ) : (
              <>
                <ProductsGrid
                  products={paginatedProducts}
                  viewMode={viewMode}
                  onViewDetails={openProductModal}
                />
                <ProductsPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Product details modal */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
      />
    </main>
  );
}
