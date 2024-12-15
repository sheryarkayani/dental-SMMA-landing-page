import { useState, useEffect } from "react";
import Logo from "/public/images/logo.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Close the menu when a section is clicked
    }
  };

  return (
    <nav
      className={`bg-gray-800 py-4 px-6 fixed w-full top-0 z-50 transition-shadow duration-300 text-white ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="30pt"
            height="30pt"
            viewBox="0 0 181.000000 195.000000"
            preserveAspectRatio="xMidYMid meet"
            className="ml-4"
          >
            <g
              transform="translate(0.000000,195.000000) scale(0.100000,-0.100000)"
              fill="#dc2625"
              stroke="none"
            >
              <path
                d="M487 1563 c-4 -3 -7 -235 -7 -515 0 -561 -2 -543 64 -616 47 -52 115
              -84 170 -80 l41 3 0 75 0 74 -38 9 c-23 6 -45 20 -57 37 -19 27 -20 42 -18
              247 l3 218 75 5 75 5 3 82 3 82 -78 3 -78 3 -3 188 -2 187 -74 0 c-40 0 -76
              -3 -79 -7z"
              ></path>
              <path
                d="M1233 1171 c-113 -39 -216 -132 -264 -239 -13 -30 -24 -84 -30 -147
              -10 -111 -9 -418 1 -435 4 -7 35 -10 81 -8 l74 3 5 245 c4 206 8 250 22 276
              47 86 118 137 220 158 l63 13 3 76 3 77 -63 0 c-35 -1 -86 -9 -115 -19z"
              ></path>
              <path
                d="M1278 524 c-35 -19 -48 -43 -48 -92 0 -33 6 -45 32 -67 27 -23 39
              -26 72 -22 98 13 120 145 31 182 -42 18 -53 18 -87 -1z"
              ></path>
            </g>
          </svg>
          <h1 className="text-2xl font-bold text-white">Trendtial</h1>
        </div>

        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-50 hover:underline transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("case-studies")}
            className="text-gray-50 hover:underline transition-colors"
          >
            Case Studies
          </button>
          <button
            onClick={() => scrollToSection("getquote")}
            className="text-gray-50 hover:underline transition-colors"
          >
            Contact Us
          </button>
          <a
            href="tel:+18163253036"
            className="text-gray-50 hover:underline transition-colors"
          >
            +12135928534
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-50 hover:underline"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left text-gray-50 hover:underline transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("case-studies")}
            className="block w-full text-left text-gray-50 hover:underline transition-colors"
          >
            Case Studies
          </button>
          <button
            onClick={() => scrollToSection("getquote")}
            className="block w-full text-left text-gray-50 hover:underline transition-colors"
          >
            Contact Us
          </button>
          <a
            href="tel:+18163253036"
            className="block w-full text-left text-gray-50 hover:underline transition-colors"
          >
            +12135928534
          </a>
        </div>
      )}
    </nav>
  );
}
