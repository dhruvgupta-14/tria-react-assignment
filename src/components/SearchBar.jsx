import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative flex-1 w-full max-w-full">
      <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent text-lg sm:text-xl" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search contacts by name..."
        className="w-full pl-10 pr-4 py-2 sm:py-3 rounded-full border-accent border-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 shadow-sm text-sm sm:text-base"
      />
    </div>
  );
};

export default SearchBar;

