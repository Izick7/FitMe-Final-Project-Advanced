import { Link } from 'react-router-dom';
import { Tag, Clock } from 'lucide-react';

function FoodCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
        <div className="relative">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-40 object-cover"
          />
          {product.badge && (
            <span className="absolute top-2 right-2 bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
              NEW MENU
            </span>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 leading-snug">
            {product.title}
          </h3>
          <p className="text-sm text-gray-400 mt-1">{product.restaurantTag}</p>

          <div className="flex items-center gap-4 mt-3 text-sm text-gray-700">
            <span className="flex items-center gap-1">
              <Tag size={14} className="text-orange-500" /> ₹{product.price}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-orange-500" /> {product.deliveryTime} Mins
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FoodCard;