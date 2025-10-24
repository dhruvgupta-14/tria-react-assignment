import React, { useEffect, useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";
import Logo from "./Logo";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="absolute top-4 left-2 right-2 md:left-0 md:right-0 flex justify-between items-center max-w-3xl w-full mx-auto px-4 md:px-12 py-3 md:py-4 bg-secondary border-accent border shadow-sm rounded-2xl">
      <Logo />
      <div className="flex gap-2 items-center">
        <button
          onClick={() => setDarkMode(!isDarkMode)}
          className="cursor-pointer p-2 rounded-full hover:bg-accent/30 transition-colors"
        >
          {isDarkMode ? <BsMoonStars className="w-5 h-5 md:w-6 md:h-6" /> : <AiOutlineSun className="w-6 h-6 md:w-7 md:h-7" />}
        </button>
        <a
          href="https://github.com/dhruvgupta-14/tria-react-assignment"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>
    </div>
  );
};

export default Header;

