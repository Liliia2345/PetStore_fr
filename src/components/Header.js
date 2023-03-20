import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="text-white font-bold">
                <span className="material-symbols-outlined">PetShop</span>
              </NavLink>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4 px-5 py-2">
                <NavLink
                  to="/"
                  className="text-gray-50 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-sm font-medium">
                  Home
                </NavLink>
                <NavLink
                  to="/api/Petshop"
                  className="text-gray-50 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-sm font-medium"
                >
                  Pet list
                </NavLink>
                <NavLink
                  to="/api/Petsapi"
                  className="text-gray-50 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-sm font-medium"
                >
                  Pets API
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-gray-50 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-sm font-medium">
                  About
                </NavLink>
                <NavLink
                  to="/adopt"
                  className="text-gray-50 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-sm font-medium">
                  Adopt
                </NavLink>
                <NavLink
                  to="/comments"
                  className="text-gray-50 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-sm font-medium">
                  Comment section
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-gray-50 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-sm font-medium">
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen ? (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-300 hover:bg-gray-700  hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </NavLink>
              <NavLink
                to="/adopt"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Adopt
              </NavLink>
              <NavLink
                to="/comments"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Comment section
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </NavLink>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
}

export default Header;
