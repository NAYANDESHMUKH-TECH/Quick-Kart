import { Search, MapPin, User, ShoppingCart } from "lucide-react";

function Navbar({ cart, onCartClick }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold text-white">
            Q
          </div>

          <span className="text-2xl font-bold text-gray-900">
            Quick-Kart
          </span>
        </div>

        {/* Location */}
        <button className="flex items-center gap-2 text-left">
          <MapPin className="text-orange-500" size={22} />

          <div>
            <p className="text-xs text-gray-500">
              Deliver to
            </p>

            <p className="text-sm font-semibold text-gray-900">
              Margao, Goa
            </p>
          </div>
        </button>

        {/* Search */}
        <div className="flex flex-1 items-center rounded-xl bg-gray-100 px-4 py-3">
          <Search
            size={21}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search for products..."
            className="ml-3 w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* Account */}
        <button className="flex items-center gap-2 text-gray-700">
          <User size={22} />

          <span className="font-medium">
            Account
          </span>
        </button>

        {/* Cart */}
        <button
        onClick={onCartClick}
        className="relative flex items-center gap-2 text-gray-700"
          >
            <ShoppingCart size={23} />


          <span className="font-medium">
            Cart
          </span>

          <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
            {cart.length}
          </span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;