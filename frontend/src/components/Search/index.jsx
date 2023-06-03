import { useState } from "react";
import classNames from 'classnames';
import { FaSearch } from "react-icons/fa";


const Search = ({ onSearch, className }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    // Perform search functionality here
    onSearch(event.target.value);
  };

  const classes = classNames(
    'w-full',
    'rounded',
    'rounded-lg',
    'h-full',
    'bg-sky-800',
    'text-center',
    'justify-center',
    'hover:cursor-default',
    'text-white',
    className
  );

  return (
    <div className={classes}>
      <div className="relative">
        <input
            type="text"
            name="search"
            id="search"
            placeholder="Resurrect..."
            className="w-full h-10 py-7 px-6 text-base placeholder-white border rounded-lg focus:shadow-outline"
            value={searchTerm}
            onChange={handleSearch}
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-4 hover:cursor-pointer" onClick={handleSearch}>
          <FaSearch className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Search;