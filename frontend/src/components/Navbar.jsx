import { useState } from "react";
import {
  Search,
  MapPin,
  User,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar({
  cart,
  user,
  setUser,
  onCartClick,
  searchTerm,
  setSearchTerm,
}) {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const navigate = useNavigate();

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
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search for products..."
            className="ml-3 w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* Account */}
        <div className="relative">
          <button
            onClick={() => {
              if (user) {
                setIsAccountOpen((current) => !current);
              } else {
                navigate("/login");
              }
            }}
            className="flex items-center gap-2 text-gray-700"
          >
            <User size={22} />

            <span className="font-medium">
              {user ? user.name : "Account"}
            </span>

            {user && <ChevronDown size={17} />}
          </button>

          {/* Account Dropdown */}
          {user && isAccountOpen && (
            <div className="absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">

              {/* User Information */}
              <div className="border-b border-gray-100 px-4 py-4">
                <p className="text-sm font-semibold text-gray-900">
                  {user.name}
                </p>

                <p className="mt-1 truncate text-xs text-gray-500">
                  {user.email}
                </p>
              </div>

              {/* My Profile */}
              <button
                onClick={() => {
                  setIsAccountOpen(false);
                  navigate("/profile");
                }}
                className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50"
              >
                My Profile
              </button>

              {/* My Orders */}
              <button
                onClick={() => {
                  setIsAccountOpen(false);
                  navigate("/orders");
                }}
                className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50"
              >
                My Orders
              </button>

              {/* Logout */}
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");

                  setUser(null);
                  setIsAccountOpen(false);

                  navigate("/");
                }}
                className="w-full border-t border-gray-100 px-4 py-3 text-left text-sm font-semibold text-red-500 hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>

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