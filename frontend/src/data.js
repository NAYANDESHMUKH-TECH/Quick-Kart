import milkImage from "./assets/products/Amul-Taaza-Toned-Fresh-Milk.jpeg";
import bananaImage from "./assets/products/Banana-Raw.webp";
import breadImage from "./assets/products/brownbread.webp";
import potatoImage from "./assets/products/potato.png";
import orangeJuiceImage from "./assets/products/fresh-orange-juice.png";
import appleImage from "./assets/products/apples.webp";
import cookiesImage from "./assets/products/Double-Chocolate-Chip-Cookies.jpg";
import colaImage from "./assets/products/cola-juice.jpg";

export const products = [
  {
    id: 1,
    name: "Fresh Milk",
    description: "Full cream milk",
    price: 60,
    originalPrice: 70,
    category: "Dairy",
    unit: "1 L",
    image: milkImage,
  },
  {
    id: 2,
    name: "Fresh Bananas",
    description: "Naturally sweet bananas",
    price: 50,
    originalPrice: 60,
    category: "Fruits",
    unit: "6 pcs",
    image: bananaImage,
  },
  {
    id: 3,
    name: "Brown Bread",
    description: "Freshly baked bread",
    price: 45,
    originalPrice: 55,
    category: "Bakery",
    unit: "400 g",
    image: breadImage,
  },
  {
    id: 4,
    name: "Potato Chips",
    description: "Crispy salted chips",
    price: 30,
    originalPrice: 40,
    category: "Snacks",
    unit: "100 g",
    image: potatoImage,
  },
  {
    id: 5,
    name: "Orange Juice",
    description: "Refreshing fruit juice",
    price: 90,
    originalPrice: 110,
    category: "Beverages",
    unit: "1 L",
    image: orangeJuiceImage,
  },
  {
    id: 6,
    name: "Fresh Apples",
    description: "Crisp and juicy apples",
    price: 120,
    originalPrice: 140,
    category: "Fruits",
    unit: "500 g",
    image: appleImage,
  },
  {
    id: 7,
    name: "Chocolate Cookies",
    description: "Chocolate filled cookies",
    price: 55,
    originalPrice: 65,
    category: "Snacks",
    unit: "200 g",
    image: cookiesImage,
  },
  {
    id: 8,
    name: "Cola",
    description: "Chilled soft drink",
    price: 45,
    originalPrice: 50,
    category: "Beverages",
    unit: "750 ml",
    image: colaImage,
  },
];