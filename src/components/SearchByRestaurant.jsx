import { Shuffle } from "lucide-react";

function SearchByRestaurant() {
  return (
    <>
      <section className="max-w-full bg-[#e87524]">
        <div className="mx-auto flex min-h-[88px] max-w-[1280px] flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-8 py-6 sm:py-0">
          
          <div className="flex items-center gap-3">
            <h2 className="text-base sm:text-lg font-bold text-white whitespace-nowrap">
              Search by Restaurant
            </h2>
            <Shuffle className="h-4 w-4 text-white shrink-0" />
          </div>

          <input
            type="text"
            placeholder="Enter item or restaurant you are looking for"
            className="
              h-[42px]
              w-full sm:w-[420px]
              rounded-md
              border
              border-white/80
              bg-transparent
              px-4
              text-sm
              text-white
              outline-none
              placeholder:text-white/70
            "
          />

          <button
            className="
              h-[42px]
              w-full sm:w-auto
              shrink-0
              rounded-md
              bg-[#292d32]
              px-6
              text-sm
              font-medium
              text-white
              transition-colors
              hover:bg-black
            "
          >
            Search Now
          </button>
        </div>
      </section>

      <section></section>
    </>
  );
}

export default SearchByRestaurant;