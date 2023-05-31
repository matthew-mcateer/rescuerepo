import React, { useState } from 'react';
import classNames from 'classnames';
import { FaChevronDown } from 'react-icons/fa';

const DropdownSearch = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const classes = classNames(
    'w-full',
    'rounded',
    'rounded-lg',
    'h-full',
    'bg-sky-800',
    'text-center',
    'justify-center',
    'hover:cursor-pointer',
    'text-white',
    'hover:bg-sky-500',
    'hover:text-gray-300',
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
          className="w-full h-10 py-7 px-6 text-base placeholder-white hover:placeholder-gray-300 border rounded-lg focus:shadow-outline"
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-4" onClick={toggleDropdown}>
          <FaChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      {isOpen && (
        <div className="flex mt-2 rounded-md shadow-lg bg-transparent ring-1 ring-black ring-opacity-0">
          <div className="py-2 px-2 w-full text-start" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Option 2
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSearch;