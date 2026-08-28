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
    <section className="w-full bg-[#f7f7f7] py-12 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 md:mb-10 text-[16px] font-medium text-[#292d32]">
          What's on your mind?
        </h2>

        <div className="flex flex-wrap items-start justify-center md:justify-between gap-6 md:gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex w-[100px] sm:w-[130px] flex-col items-center"
            >
              <div className="h-[75px] w-[75px] sm:h-[90px] sm:w-[90px] overflow-hidden rounded-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-3 text-center text-[10px] sm:text-[11px] text-[#292d32]">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <h2 className="mb-6 md:mb-8 text-[16px] font-medium text-[#292d32]">
            Personalized recommendations
          </h2>

          <section className="py-6 md:py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
