import { navLists } from "../constants";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    
    <footer className="w-full p-4  shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-white  sm:text-center ">
        © 2024{" "}
        <Link to="#Home" className="hover:underline">
          ShivaCodeSmith
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300  sm:mt-0">
        {navLists.map((title,id) => (
          <li key={id}>
          <Link to={`#${title}`} className="hover:underline me-4 md:me-6">
            {title}
          </Link>
        </li>
        ))}
        
      </ul>
    </footer>
  );
};

export default Footer;
