import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductSection from "./components/ProductSection";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cart={cart} />

      <main>
        <Hero />
        <Categories />

        <ProductSection addToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;