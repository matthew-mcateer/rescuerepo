import { useState } from "react";
import classNames from 'classnames';


const Search = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Perform search functionality here
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
            className="w-full h-10 py-7 px-6 text-base placeholder-white hover:placeholder-black border rounded-lg focus:shadow-outline"
            value={searchTerm}
            onChange={handleSearch}
        />
        </div>
    </div>
  );
};

export default Search;