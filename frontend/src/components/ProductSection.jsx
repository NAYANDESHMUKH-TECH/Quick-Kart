import { products } from "../data";
import ProductCard from "./ProductCard";

function ProductSection({ addToCart }) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-8">

      {/* Section heading */}
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

      {/* Product grid */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

    </section>
  );
}

export default ProductSection;