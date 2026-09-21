import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductSection from "./components/ProductSection";
import CartDrawer from "./components/CartDrawer";
import ProductDetails from "./components/ProductDetails";
import { productImages } from "./data";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem("user");

  return savedUser ? JSON.parse(savedUser) : null;
});

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");

        const data = await response.json();

        const formattedProducts = data.map((product) => ({
          ...product,
          price: Number(product.price),
          originalPrice: Number(product.original_price),
          image: productImages[product.image],
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar
  cart={cart}
  user={user}
  setUser={setUser}
  onCartClick={() => setIsCartOpen(true)}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>

      <Routes>

        <Route
          path="/"
          element={
            <main>
              <Hero />

              <Categories
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />

              <ProductSection
                products={products}
                addToCart={addToCart}
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
              />
            </main>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              products={products}
              addToCart={addToCart}
            />
          }
        />

<Route
  path="/login"
  element={<Auth setUser={setUser} />}
/>

      </Routes>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        setCart={setCart}
      />

    </div>
  );
}

export default App;