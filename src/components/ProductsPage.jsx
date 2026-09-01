import { useCart } from "../context/CartContext";
import { useParams, Link } from "react-router-dom";
import { products } from "../products.js";
import { Tag, Clock } from "lucide-react";

function ProductsPage() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const foundProduct = products.find((product) => String(product.id) === id);

  if (!foundProduct) {
    return (
      <div className="max-w-xl mx-auto px-4 sm:px-8 py-20 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Product not found</h2>
        <Link to="/" className="text-orange-500 underline mt-2 inline-block">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-6 sm:py-10">
      <p className="text-sm text-gray-400 mb-6">
        Home / {foundProduct.restaurantTag} / <span className="text-gray-700">{foundProduct.title}</span>
      </p>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="w-full lg:w-[420px] shrink-0 rounded-xl overflow-hidden">
          <img
            src={foundProduct.img}
            alt={foundProduct.title}
            className="w-full h-[240px] sm:h-[320px] lg:h-[420px] object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">{foundProduct.title}</h1>
          <p className="text-sm text-gray-400 mt-1">{foundProduct.restaurantTag}</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 text-sm text-gray-700">
            <span className="flex items-center gap-1">
              <Tag size={18} className="text-orange-500" />
              <span className="text-lg sm:text-xl font-semibold text-gray-900">₹{foundProduct.price}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock size={18} className="text-orange-500" /> {foundProduct.deliveryTime} Mins
            </span>
          </div>

          {foundProduct.badge && (
            <span className="inline-block mt-4 bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
              NEW MENU
            </span>
          )}

          <button
            onClick={() => addToCart(foundProduct)}
            className="mt-8 w-full max-w-xs h-[48px] rounded-lg bg-[#292d32] text-white text-sm font-medium hover:bg-black transition-colors"
          >
            Add to Cart
          </button>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">About this meal</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Freshly prepared and delivered hot, {foundProduct.title.toLowerCase()} from{" "}
              {foundProduct.restaurantTag} is made with quality ingredients and ready in
              just {foundProduct.deliveryTime} minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;