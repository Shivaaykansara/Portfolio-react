
import { useState } from "react";
import { navLists } from "../constants";
import { HashLink as Link } from "react-router-hash-link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const [open, setOpen] = useState(false);
  let navTimeline = gsap.timeline();
  useGSAP(()=>{
    
    navTimeline.from('#navLogo', {duration: 0.5, delay: 0.5, opacity: 0, y:-30 }),
    navTimeline.from('#navList', {duration: 0.5, delay: 0.5, opacity: 0, y:-30, stagger: 0.2 })
  },[])
  const handleBehaviour = () => {
    setOpen(!open);
  }
  return (
    <nav className="bg-white  fixed shadow-md backdrop-filter backdrop-blur-sm bg-opacity-5 w-full z-10 md:py-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            
            <span id="navLogo" className="text-2xl md:text-4xl font-bold text-white font-allura ">
              Shubham Kansara
            </span>
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-6">
            {navLists.map((title,id) => (
              <Link key={id} id="navList" to={`#${title}`} className="text-white text-lg hover:text-gray-300">
              {title}
            </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden text-center">
          <div className="space-y-2 px-2 pb-3">
            {navLists.map((title,id) => (
              <Link key={id} to={`#${title}`} onClick={handleBehaviour} className="block bg-slate-400 rounded-sm text-white bg-opacity-15 hover:text-gray-300">
              {title}
            </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
