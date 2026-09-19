import { motion } from "framer-motion";
import { Plus, ShoppingCart } from "lucide-react";

function ProductCard({ product, addToCart }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      {/* Product Image Area */}
      <div className="relative flex h-52 items-center justify-center bg-gray-100">

        {/* Discount */}
        <div className="absolute left-3 top-3 rounded-md bg-green-600 px-2 py-1 text-xs font-bold text-white">
          {Math.round(
            ((product.originalPrice - product.price) /
              product.originalPrice) *
              100
          )}
          % OFF
        </div>

        {/* Product */}
        <motion.div
          whileHover={{ scale: 1.12, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-8xl"
        >
          {product.emoji}
        </motion.div>

      </div>

      {/* Product Information */}
      <div className="p-4">

        <p className="text-xs font-medium text-gray-500">
          {product.unit}
        </p>

        <h3 className="mt-1 truncate text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-1 truncate text-sm text-gray-500">
          {product.description}
        </p>

        {/* Price + Add */}
        <div className="mt-4 flex items-center justify-between">

          <div>
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price}
            </span>

            <span className="ml-2 text-sm text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => addToCart(product)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md transition-colors hover:bg-orange-600"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus size={22} />
          </motion.button>

        </div>

      </div>
    </motion.div>
  );
}

export default ProductCard;