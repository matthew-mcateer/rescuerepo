import React, { useState } from 'react';
import classNames from 'classnames';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import Toggle from '../Toggle';

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
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-4 hover:cursor-pointer" onClick={toggleDropdown}>
          {isOpen ? <FaChevronUp className="h-4 w-4 text-gray-400" /> : <FaChevronDown className="h-4 w-4 text-gray-400" />}
        </div>
      </div>
      {isOpen && (
        <div className="flex mt-2 rounded-md shadow-lg bg-transparent ring-1 ring-black ring-opacity-0">
          <div className="py-2 px-2 w-full text-start text-white" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="flex flex-row items-center w-full px-4 py-2 text-sm" role="menuitem">
              <span className="flex-grow">Starred repositories</span>
              <Toggle />
            </div>
            <div className="flex flex-row items-center w-full px-4 py-2 text-sm" role="menuitem">
              <span className="flex-grow">List one</span>
              <Toggle />
            </div>
            <div className="flex flex-row items-center w-full px-4 py-2 text-sm" role="menuitem">
              <span className="flex-grow">List two</span>
              <Toggle />
            </div>
            <div className="flex flex-row items-center w-full px-4 py-2 text-sm" role="menuitem">
              <span className="flex-grow">List three</span>
              <Toggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSearch;