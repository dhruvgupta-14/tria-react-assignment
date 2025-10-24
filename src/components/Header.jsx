import React, { useEffect, useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";
import Logo from "./Logo";
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
    <div className=" absolute top-12 left-0 right-0  flex justify-between items-center max-w-3xl w-full mx-auto px-12 py-4  bg-secondary border-accent border shadow-sm rounded-2xl ">
      <Logo />
      {/* //github or readme doc */}
      <button onClick={() => setDarkMode(!isDarkMode)} className="cursor-pointer p-2 rounded-full hover:bg-accent/30 transition-colors">
        {isDarkMode ? <BsMoonStars size={24} /> : <AiOutlineSun size={28} />}
      </button>
    </div>
  );
};

export default Header;
