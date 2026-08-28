import heroImage1 from "../assets/images/heroImage1.png";
import heroImage2 from "../assets/images/heroImage2.png";
import heroImage3 from "../assets/images/heroImage3.png";
import heroIcon1 from "../assets/images/heroIcon1.png";
import heroIcon2 from "../assets/images/heroIcon2.png";
import heroBlob from "../assets/images/heroBlob.png";

function HeroSection() {
  const cities = ["Hyderabad", "Chennai", "Mumbai", "Bangalore", "Delhi", "Kolkata"];

  return (
    <section className="relative w-full overflow-hidden bg-[#ffffff]">
      <div className="pointer-events-none absolute left-0 top-[145px]">
        <img src={heroBlob} alt="" className="w-[170px] -translate-x-[45%]" />
      </div>

      <div className="pointer-events-none absolute right-[-85px] top-[255px] h-[125px] w-[125px] rounded-full border-[3px] border-[#e87524]" />

      <div className="relative mx-auto flex w-full max-w-[1280px] items-center gap-16 px-8 pb-24 pt-16">
        
        <div className="w-[560px] shrink-0">
          <h1 className="text-5xl font-semibold leading-[1.3] tracking-wide text-[#292d32]">
            Premium <span className="text-[#e87524]">quality</span>
            <br />
            Food for your{" "}
            <span className="mx-1 inline-flex h-[54px] w-[76px] translate-y-2 items-center justify-center rounded-full bg-[#fde7c6] align-middle">
              <img src={heroIcon2} alt="Banana" className="h-8 w-auto object-contain" />
            </span>
            <span className="text-[#e87524]">healthy</span>
            <br />
            <span className="mr-1 inline-flex h-[54px] w-[76px] translate-y-2 items-center justify-center rounded-full bg-[#f8dde2] align-middle">
              <img src={heroIcon1} alt="Tomato" className="h-8 w-auto object-contain" />
            </span>
            <span className="text-[#e87524]">& Daily Life</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#777b7f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="mt-6 flex w-[500px] items-center gap-3">
            <input
              type="text"
              placeholder="Enter your delivery location"
              className="h-[48px] min-w-0 flex-1 rounded-lg border border-[#bfc3c7] bg-transparent px-4 text-sm outline-none placeholder:text-[#9a9a9a]"
            />
            <button className="h-[48px] shrink-0 rounded-lg bg-[#292d32] px-6 text-sm font-medium text-white">
              Get Started
            </button>
          </div>

          <div className="mt-6 flex flex-col items-start gap-3 text-sm">
            <span className="text-[#666a6d]">Popular cities in India</span>
            <div className="flex gap-4">
              {cities.map((city, index) => (
                <span
                  key={city}
                  className={`cursor-pointer ${
                    index === 1 || index === 3 || index === 5
                      ? "text-[#e87524]"
                      : "text-[#777b7f]"
                  }`}
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-1 items-center gap-6">
          <div className="h-[440px] w-[260px] shrink-0 overflow-hidden rounded-xl">
            <img src={heroImage1} alt="Healthy food" className="h-full w-full object-cover" />
          </div>
          <div className="h-[300px] w-[220px] shrink-0 overflow-hidden rounded-xl">
            <img src={heroImage2} alt="Healthy food" className="h-full w-full object-cover" />
          </div>
          <div className="h-[300px] w-[220px] shrink-0 overflow-hidden rounded-l-xl">
            <img src={heroImage3} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;