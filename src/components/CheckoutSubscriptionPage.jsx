import { useState } from "react";
import { useCart } from "../context/CartContext";
import { MapPin, Calendar } from "lucide-react";

function CheckoutSubscriptionPage() {
  const { cart } = useCart();
  const [orderType, setOrderType] = useState("subscription");
  const [subType, setSubType] = useState("monthly");
  const [plan, setPlan] = useState("3days");
  const [address, setAddress] = useState("primary");

  const itemTotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const deliveryFee = 131;
  const taxes = 2;
  const total = itemTotal + deliveryFee + taxes;
  const discount = orderType === "subscription" ? Math.round(total * 0.35) : 0;
  const finalTotal = total - discount;

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-6 sm:py-10">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 border-b pb-4">Secure Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mt-8">
        {/* Left column */}
        <div className="flex-1">
          {/* Delivery address */}
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} className="text-orange-500" />
            <h2 className="font-semibold text-gray-800">Delivery address</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => setAddress("primary")}
              className={`flex-1 flex items-start gap-2 text-left rounded-xl px-4 py-3 text-sm ${
                address === "primary"
                  ? "bg-orange-500 text-white"
                  : "border border-dashed border-gray-300 text-gray-600"
              }`}
            >
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana
            </button>
            <button
              onClick={() => setAddress("secondary")}
              className={`flex-1 flex items-start gap-2 text-left rounded-xl px-4 py-3 text-sm ${
                address === "secondary"
                  ? "bg-orange-500 text-white"
                  : "border border-dashed border-gray-300 text-gray-600"
              }`}
            >
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana
            </button>
          </div>

          {/* Type of order */}
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} className="text-orange-500" />
            <h2 className="font-semibold text-gray-800">Type of Order</h2>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
            {[
              { key: "subscription", label: "Subscription" },
              { key: "schedule", label: "Schedule Order" },
              { key: "now", label: "Order Now" },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setOrderType(opt.key)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg text-sm font-medium border ${
                  orderType === opt.key
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-dashed border-gray-300 text-gray-600"
                }`}
              >
                <Calendar size={16} />
                {opt.label}
              </button>
            ))}
          </div>

          {orderType === "subscription" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <p className="text-sm text-gray-500 mb-2">Type of subscription?</p>
                <div className="flex gap-4 sm:gap-6 border-b border-gray-200">
                  {["monthly", "weekly", "custom"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSubType(t)}
                      className={`pb-2 text-sm capitalize ${
                        subType === t
                          ? "text-orange-500 border-b-2 border-orange-500 font-medium"
                          : "text-gray-500"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mt-6 mb-2">What time do you want us to deliver?</p>
                <p className="flex items-center gap-2 text-orange-500 font-medium">
                  <Calendar size={16} /> 16:30 <span className="text-xs text-gray-400">24 hrs</span>
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">What's the plan?</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { key: "3days", label: "3-Days/Week" },
                    { key: "5days", label: "5-Days/Week" },
                  ].map((p) => (
                    <button
                      key={p.key}
                      onClick={() => setPlan(p.key)}
                      className={`px-4 py-2 rounded-lg text-sm border ${
                        plan === p.key
                          ? "border-orange-500 text-orange-500"
                          : "border-gray-300 text-gray-600"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mt-6 mb-2">Any Note for us?</p>
                <textarea
                  placeholder="Type you note here"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-orange-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart summary panel */}
        <div className="w-full lg:w-[340px] shrink-0 bg-gray-50 rounded-xl p-5 h-fit">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Cart</h3>
            <span className="text-sm text-gray-400">{cart.length} Items</span>
          </div>

          {cart.map((item) => (
            <div key={item.id} className="mb-4">
              <p className="text-xs text-gray-400">
                from <span className="text-orange-500">{item.restaurantTag}</span>
              </p>
              <div className="flex justify-between items-center mt-1">
                <div>
                  <p className="text-sm font-medium text-gray-700">{item.title}</p>
                  <p className="text-xs text-gray-400">₹{item.price}</p>
                </div>
                <span className="text-sm text-gray-500">{item.qty}</span>
              </div>
            </div>
          ))}

          <div className="border-t pt-4 mt-2 text-sm text-gray-500 space-y-2">
            <p className="text-xs text-gray-400">Bill details</p>
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹{itemTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes and Charges</span>
              <span>₹{taxes.toFixed(2)}</span>
            </div>
          </div>

          <div className="border-t pt-4 mt-4 space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Discount</span>
              <span>₹{discount.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t font-bold text-lg">
            <span>Total</span>
            <span>₹{finalTotal.toFixed(2)}</span>
          </div>

          <button
            onClick={() => alert("Order placed!")}
            className="w-full mt-6 h-[48px] rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
          >
            Proceed To Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSubscriptionPage;