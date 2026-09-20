import { useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Product not found
          </h2>

          <button
            onClick={() => navigate("/")}
            className="mt-4 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Back */}
      <div className="mx-auto max-w-7xl px-8 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-medium text-gray-600 hover:text-orange-500"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Product */}
      <main className="mx-auto max-w-7xl px-8 py-10">

        <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">

          {/* Image */}
          <div className="flex min-h-[450px] items-center justify-center rounded-2xl bg-gray-50">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[400px] max-w-[400px] object-contain"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-3 text-lg text-gray-500">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ₹{product.price}
              </span>

              <span className="text-lg text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>

              <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-bold text-green-700">
                {Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )}
                % OFF
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Pack size: {product.unit}
            </p>

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-2 text-sm font-semibold text-gray-700">
                Quantity
              </p>

              <div className="flex w-fit items-center gap-4 rounded-xl border border-gray-200 p-2">

                <button
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100"
                >
                  <Minus size={18} />
                </button>

                <span className="w-8 text-center font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100"
                >
                  <Plus size={18} />
                </button>

              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
            >
              <ShoppingCart size={22} />
              Add {quantity} to Cart
            </button>

          </div>

        </div>

        {/* Description */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Product information
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            {product.description}. This product is part of our
            Quick-Kart everyday essentials collection and is
            available for quick delivery.
          </p>
        </div>

      </main>
    </div>
  );
}

export default ProductDetails;