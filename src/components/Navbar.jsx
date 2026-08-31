import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import myLogo from "../assets/images/Logo.png";
import { useState } from "react";
import { Search, Menu, X, User } from "lucide-react";
import { FiShoppingBag } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.qty, 0);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleSearch(e) {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/searchResults?q=${query}`);
      setMenuOpen(false);
    }
  }

  function handleSignin() {
    navigate("/login", { state: { from: "/homepage" } });
    setMenuOpen(false);
  }

  function handleSignout() {
    navigate("/homepage");
    logout()
  }

  return (
    <nav className="w-full bg-[#ffffff] relative z-50">
      <div className="mx-auto flex h-[70px] sm:h-[90px] max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-8">
        <Link to="/homepage" className="shrink-0">
          <div className="flex items-center gap-2">
            <img src={myLogo} alt="FitMe" className="h-[24px] sm:h-[28px] w-[24px] sm:w-[28px] object-contain" />
            <span className="text-xl font-bold text-[#292D32]">FitMe</span>
          </div>
        </Link>


        <div className="relative hidden md:block flex-1 max-w-[420px]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Enter item or restaurant you are looking for"
            className="h-[46px] w-full rounded-lg border border-[#C9CDD1] bg-transparent px-4 pr-12 text-sm text-[#444] outline-none placeholder:text-[#9A9A9A] focus:border-[#AEB3B8]"
          />
          <svg className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#5F6368]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-4.35-4.35m1.35-5.15a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
          </svg>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/cart" className="relative flex items-center justify-center text-[#292D32]">
            <FiShoppingBag size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          {isLoggedIn ? (
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center justify-center text-[#292D32]">
                <User size={22} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-4 py-4 px-6 rounded-xl border border-zinc-200 bg-[#f7f7f7] flex flex-col gap-3">
                  <h1>Hello User</h1>
                  <button onClick={handleSignout}>Log out</button>
                </div>
              )}
            </div>

         )

            :
            (<button
              type="button"
              className="h-[46px] rounded-lg bg-[#292D32] px-6 text-sm font-medium text-white transition-colors hover:bg-black"
              onClick={handleSignin}
            >
              Sign In
            </button>)
          }

        </div>


        <div className="flex md:hidden items-center gap-4">
          <Link to="/cart" className="relative flex items-center justify-center text-[#292D32]">
            <FiShoppingBag size={22} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#292D32]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-5 space-y-4">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Enter item or restaurant you are looking for"
              className="h-[46px] w-full rounded-lg border border-[#C9CDD1] bg-transparent px-4 pr-12 text-sm text-[#444] outline-none placeholder:text-[#9A9A9A]"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5F6368]" size={18} />
          </div>

          <button
            type="button"
            className="w-full h-[46px] rounded-lg bg-[#292D32] text-sm font-medium text-white"
            onClick={handleSignin}
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;