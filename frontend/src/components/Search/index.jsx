import { useState } from "react";
import classNames from 'classnames';
import { HiSparkles, HiOutlineSparkles } from "react-icons/hi";


const Search = ({ onSearch, className }) => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    
    setSearchTerm(enteredText);
    onSearch(enteredText);
  };

  const handleTextChange = (event) => {
    setEnteredText(event.target.value);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
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
            onChange={handleTextChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-4 hover:cursor-pointer" onClick={handleSearch} onMouseEnter={handleHover} onMouseLeave={handleHoverEnd}>
        {isHovered ? (
            <HiOutlineSparkles className="h-4 w-4 text-gray-400" />
          ) : (
            <HiSparkles className="h-4 w-4 text-gray-400" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;