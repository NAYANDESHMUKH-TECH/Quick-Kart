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
        <div className="relative z-10 max-w-xl">

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

        {/* Decorative circles */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-32 top-12 h-36 w-36 rounded-full bg-yellow-300/70"
        />

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-30px] right-10 h-64 w-64 rounded-full bg-orange-300/50"
        />

        {/* Product visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute right-20 top-1/2 flex -translate-y-1/2 items-center gap-4"
        >

          <div className="flex h-44 w-32 rotate-[-8deg] items-center justify-center rounded-3xl bg-white text-7xl shadow-xl">
            🥛
          </div>

          <div className="flex h-52 w-36 rotate-[8deg] items-center justify-center rounded-3xl bg-white text-8xl shadow-xl">
            🛒
          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}

export default Hero;