import workshopImage from "../assets/images/E-commerce-Workshop.png";
import cartImage from "../assets/images/pngtree-supermarket-cart-with-food-and-beverage-items-png-image_21103524.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-[#fff1e8] px-12 py-14"
      >
        {/* Text */}
        <div className="relative z-30 max-w-xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-orange-500">
            Quick delivery
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Everything you need,
            <span className="block text-orange-500">
              delivered quickly.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-7 text-gray-600">
            Groceries, snacks, beverages and everyday essentials
            delivered straight to your doorstep.
          </p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
          >
            Shop now
            <ArrowRight size={20} />
          </motion.button>
        </div>

        {/* Product Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute right-8 top-1/2 h-80 w-[420px] -translate-y-1/2"
        >
          {/* Yellow circle */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-24 top-0 h-32 w-32 rounded-full bg-yellow-300/70"
          />

          {/* Orange circle */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-20px] right-4 h-52 w-52 rounded-full bg-orange-300/50"
          />

          {/* Left card */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-20 top-10 z-10 flex h-48 w-36 rotate-[-7deg] items-center justify-center overflow-hidden rounded-3xl bg-white p-4 shadow-xl"
          >
            <img
              src={workshopImage}
              alt="Quick-Kart shopping"
              className="h-full w-full object-contain"
            />
          </motion.div>

          {/* Right card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-10 top-4 z-20 flex h-56 w-40 rotate-[8deg] items-center justify-center overflow-hidden rounded-3xl bg-white p-4 shadow-xl"
          >
            <img
              src={cartImage}
              alt="Shopping cart"
              className="h-full w-full object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;