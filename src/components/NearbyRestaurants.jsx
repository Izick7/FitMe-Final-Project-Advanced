import { products } from "../products.js"
import FoodCard from "./FoodCard.jsx"

function NearbyRestaurants() {
  return (
    <section className="px-8 py-10">
      <h2 className="text-xl font-semibold mb-6">Nearby Restaurants</h2>
      <div className="grid grid-cols-2 gap-6 max-w-xl">
        {products.map((product) => (
          <FoodCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default NearbyRestaurants;