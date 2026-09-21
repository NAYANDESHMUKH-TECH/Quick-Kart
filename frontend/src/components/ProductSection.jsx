import ProductCard from "./ProductCard";

function ProductSection({
  products,
  addToCart,
  searchTerm,
  selectedCategory,
}) {
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="mx-auto max-w-7xl px-8 py-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Fresh picks
          </p>

          <h2 className="mt-1 text-3xl font-bold text-gray-900">
            Popular products
          </h2>
        </div>

        <button className="font-semibold text-orange-500 hover:text-orange-600">
          View all →
        </button>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <div className="text-5xl">🔍</div>

          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            No products found
          </h3>

          <p className="mt-2 text-gray-500">
            Try searching for something else.
          </p>
        </div>
      )}
    </section>
  );
}

export default ProductSection;