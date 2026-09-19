import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductSection from "./components/ProductSection";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
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
  onCartClick={() => setIsCartOpen(true)}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>

      <main>
        <Hero />
        <Categories
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>
        <ProductSection
  addToCart={addToCart}
  searchTerm={searchTerm}
  selectedCategory={selectedCategory}
/>
      </main>

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