import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2 } from "lucide-react";

function CartDrawer({ isOpen, onClose, cart, setCart }) {
  const updateQuantity = (index, change) => {
    setCart((currentCart) => {
      const updatedCart = [...currentCart];

      if (change === -1) {
        updatedCart.splice(index, 1);
      }

      return updatedCart;
    });
  };

  const removeItem = (index) => {
    setCart((currentCart) =>
      currentCart.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  const subtotal = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/30"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Your Cart
                </h2>

                <p className="text-sm text-gray-500">
                  {cart.length} items
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              >
                <X size={22} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="text-6xl">🛒</div>

                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Add some products to get started.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((product, index) => (
                    <div
                      key={`${product.id}-${index}`}
                      className="flex items-center gap-4 rounded-xl border p-3"
                    >
                      {/* Product */}
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 text-3xl">
                        {product.emoji}
                      </div>

                      {/* Details */}
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-semibold text-gray-900">
                          {product.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          ₹{product.price}
                        </p>

                        {/* Quantity */}
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(index, -1)}
                            className="flex h-7 w-7 items-center justify-center rounded-md border hover:bg-gray-100"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="w-5 text-center text-sm font-semibold">
                            1
                          </span>

                          <button
                            onClick={() => updateQuantity(index, 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-md border hover:bg-gray-100"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(index)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-gray-600">
                    Subtotal
                  </span>

                  <span className="text-xl font-bold text-gray-900">
                    ₹{subtotal}
                  </span>
                </div>

                <button className="w-full rounded-xl bg-orange-500 py-3.5 font-semibold text-white transition hover:bg-orange-600">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;