import { motion } from "framer-motion";

const categories = [
  {
    name: "Groceries",
    emoji: "🥦",
    color: "bg-green-100",
  },
  {
    name: "Fruits",
    emoji: "🍎",
    color: "bg-red-100",
  },
  {
    name: "Dairy",
    emoji: "🥛",
    color: "bg-blue-100",
  },
  {
    name: "Snacks",
    emoji: "🍿",
    color: "bg-yellow-100",
  },
  {
    name: "Beverages",
    emoji: "🥤",
    color: "bg-purple-100",
  },
  {
    name: "Personal Care",
    emoji: "🧴",
    color: "bg-pink-100",
  },
];

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-8">

      {/* Section heading */}
      <div className="mb-6 flex items-end justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Explore
          </p>

          <h2 className="mt-1 text-3xl font-bold text-gray-900">
            Shop by category
          </h2>
        </div>

        <button className="font-semibold text-orange-500 hover:text-orange-600">
          View all →
        </button>

      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

        {categories.map((category, index) => (

          <motion.button
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group rounded-2xl bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-lg"
          >

            <div
              className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full ${category.color} text-6xl transition-transform duration-300 group-hover:scale-110`}
            >
              {category.emoji}
            </div>

            <h3 className="mt-4 font-semibold text-gray-800">
              {category.name}
            </h3>

          </motion.button>

        ))}

      </div>

    </section>
  );
}

export default Categories;