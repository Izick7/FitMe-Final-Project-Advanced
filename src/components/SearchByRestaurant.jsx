import { Shuffle } from "lucide-react";

function SearchByRestaurant() {
  return (
   <>

    <section className="w-full bg-[#e87524]">
      <div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-center gap-4 px-8">
        
        <div className="flex items-center gap-3">
          <h2 className="text-[15px] font-bold text-white">
            Search by Restaurant
          </h2>

          <Shuffle className="h-[15px] w-[15px] text-white" />
        </div>
        <input
          type="text"
          placeholder="Enter item or restaurant you are looking for"
          className="
            h-[38px]
            w-[420px]
            rounded-md
            border
            border-white/80
            bg-transparent
            px-4
            text-[9px]
            text-white
            outline-none
            placeholder:text-white/70
          "
        />

        {/* Search Button */}
        <button
          className="
            h-[38px]
            rounded-md
            bg-[#292d32]
            px-6
            text-[9px]
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

    <section>
        
    </section>
   </>
  );
}

export default SearchByRestaurant;