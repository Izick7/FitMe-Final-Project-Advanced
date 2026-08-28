import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import myLogo from "../assets/images/Logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.qty, 0);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
 
  function handleSearch(e) {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/searchResults?q=${query}`);
    }
  }

  function handleSignin() {
    navigate("/login");
  }

  return (
    <nav className="w-full bg-[#ffffff]">
      <div className="mx-auto flex h-[90px] max-w-[1280px] items-center justify-between px-8">
        <Link to="/homepage">
          <div className="flex items-center gap-2">
            <img src={myLogo} alt="FitMe" className="h-[28px] w-[28px] object-contain" />
            <span className="text-xl font-bold text-[#292D32]">FitMe</span>
          </div>

        </Link>
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Enter item or restaurant you are looking for"
              className="h-[46px] w-[420px] rounded-lg border border-[#C9CDD1] bg-transparent px-4 pr-12 text-sm text-[#444] outline-none placeholder:text-[#9A9A9A] focus:border-[#AEB3B8]"
            />

            <svg className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#5F6368]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-4.35-4.35m1.35-5.15a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
            </svg>
          </div>
          <Link to="/cart" className="relative flex items-center justify-center text-[#292D32]">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          <button type="button" className="h-[46px] rounded-lg bg-[#292D32] 
          px-6 text-sm font-medium text-white 
          transition-colors hover:bg-black
          "  onClick={handleSignin}>
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
