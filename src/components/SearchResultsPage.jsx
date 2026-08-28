import { useSearchParams } from "react-router-dom";
import { products } from "../products.js";
import FoodCard from "./FoodCard";

function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-8 py-10">
      <h2 className="text-xl font-semibold mb-6">
        Results for "{query}" ({results.length})
      </h2>

      {results.length === 0 ? (
        <p className="text-gray-500">No matching items found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 max-w-xl">
          {results.map((product) => (
            <FoodCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;