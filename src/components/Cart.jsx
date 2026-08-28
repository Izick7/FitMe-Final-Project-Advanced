import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Cart() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { cart } = useCart();
  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);

  function handleCheckout() {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/checkoutSubscription");
    }
  }

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500">
        Your cart is empty. <Link to="/homepage" className="text-orange-500 underline">Browse food</Link>
      </div>
    );
  }

  const featured = cart[0];

  return (
    <div>
      {/* Dark featured banner */}
      <div className="bg-[#1a1a1a] px-8 py-6 flex items-center gap-6">
        <img
          src={featured.img}
          alt={featured.title}
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="flex-1 text-white">
          <h1 className="text-lg font-semibold">{featured.title}</h1>
          <p className="text-sm text-gray-400">{featured.restaurantTag}</p>
          <div className="flex gap-6 mt-2 text-sm text-gray-300">
            <span>{featured.deliveryTime} Mins</span>
            <span>₹{featured.price} Cost for two</span>
          </div>
        </div>
        <div className="border border-orange-500 rounded-lg px-4 py-2 text-orange-400 text-sm">
          <p className="font-medium">Offers</p>
          <p className="text-xs mt-1">50% off up to ₹100 | Use code TRYNEW</p>
          <p className="text-xs">20% off | Use code PARTY</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 py-8 flex gap-8">
        {/* Sidebar */}
        <div className="w-[180px] shrink-0 text-sm text-gray-500 space-y-3">
          <p className="text-orange-500 font-medium">Recommended</p>
          <p>Breakfast Box</p>
          <p>Lunch Box</p>
          <p>Combo Box</p>
          <p>Biryani Box</p>
        </div>

        {/* Item list */}
        <div className="flex-1 border-l border-gray-100 pl-8">
          {cart.map((item) => (
            <div key={item.id} className="mb-6">
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {item.qty} meal{item.qty > 1 ? "s" : ""} from {item.restaurantTag}, ready in {item.deliveryTime} minutes.
              </p>
            </div>
          ))}
        </div>

        {/* Cart panel */}
        <div className="w-[300px] shrink-0 border border-gray-100 rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Cart</h3>
            <span className="text-sm text-gray-400">{cart.length} Items</span>
          </div>

          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-700">{item.title}</p>
                  <p className="text-xs text-gray-400">Qty: {item.qty}</p>
                </div>
                <p className="text-sm font-semibold">₹{item.price * item.qty}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 pt-4 border-t font-semibold">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full mt-6 h-[46px] rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;