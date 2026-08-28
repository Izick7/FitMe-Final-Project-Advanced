import { products } from "../products.js"
import FoodCard from "./FoodCard.jsx"

import sandwich from "../assets/images/sandwich.png";
import northIndian from "../assets/images/northIndian.png";
import eggBreakfast from "../assets/images/eggBreakfast.png";
import rollsPuffs from "../assets/images/rollsPuffs.png";
import salads from "../assets/images/salads.png";
import biryani from "../assets/images/biryani.png";


function FoodRecommendations() {
  const categories = [
    {
      name: "Sandwich",
      image: sandwich,
    },
    {
      name: "North Indian Thali",
      image: northIndian,
    },
    {
      name: "Egg Breakfast",
      image: eggBreakfast,
    },
    {
      name: "Rolls & Puffs",
      image: rollsPuffs,
    },
    {
      name: "Salads",
      image: salads,
    },
    {
      name: "Biryani Box",
      image: biryani,
    },
  ];

  
  return (
    <section className="w-full bg-[#f7f7f7] py-20">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="mb-10 text-[16px] font-medium text-[#292d32]">
          What's on your mind?
        </h2>

        <div className="flex items-start justify-between">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex w-[130px] flex-col items-center"
            >
              <div className="h-[90px] w-[90px] overflow-hidden rounded-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-3 text-center text-[9px] text-[#292d32]">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="mb-8 text-[16px] font-medium text-[#292d32]">
            Personalized recommendations
          </h2>

          <section className="px-8 py-10">
                <div className="flex  flex-row gap-2 items-center">
                  {products.map((product) => (
                    <FoodCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
        </div>
      </div>
    </section>
  );
}

export default FoodRecommendations;