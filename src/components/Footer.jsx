import myLogo from "../assets/images/Logo.png";

function Footer() {
  return (
    <footer className="w-full bg-[#e87524]">
      <div className="mx-auto flex min-h-[160px] max-w-[1280px] flex-col justify-center px-8">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={myLogo}
              alt="FitMe"
              className="h-[18px] w-[18px] object-contain brightness-0 invert"
            />

            <span className="text-[16px] font-semibold text-white">
              FitMe
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-10">
            <a
              href="#about"
              className="text-[9px] text-white transition-opacity hover:opacity-70"
            >
              About us
            </a>

            <a
              href="#delivery"
              className="text-[9px] text-white transition-opacity hover:opacity-70"
            >
              Delivery
            </a>

            <a
              href="#help"
              className="text-[9px] text-white transition-opacity hover:opacity-70"
            >
              Help & Support
            </a>

            <a
              href="#terms"
              className="text-[9px] text-white transition-opacity hover:opacity-70"
            >
              T&C
            </a>
          </nav>

          {/* Contact */}
          <p className="text-[9px] text-white">
            Contact +91 123456789
          </p>
        </div>

        {/* Social Icons */}
        <div className="ml-[46%] mt-5 flex items-center gap-4 text-white">

          {/* Facebook */}
          <span className="cursor-pointer text-[12px] font-medium">
            f
          </span>

          {/* Instagram */}
          <svg
            className="h-[13px] w-[13px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              strokeWidth="1.8"
            />

            <circle
              cx="12"
              cy="12"
              r="4"
              strokeWidth="1.8"
            />

            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>

          {/* Twitter / X */}
          <span className="cursor-pointer text-[12px] font-light">
            𝕏
          </span>

        </div>
      </div>
    </footer>
  );
}

export default Footer;