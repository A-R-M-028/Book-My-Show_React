import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsSearchHeartFill } from "react-icons/bs";

const NavSm = () => {
  return (
    <>
    <div className="text-white flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold">It All Starts Here!</h3>
        {/* Inline property -> span */}
        <span className="text-gray-400 text-xm flex items-center">
          Kolkata <BiChevronRight />
        </span>
      </div>
      <div className="text-white w-8 h-8">
        <BsSearchHeartFill className="w-full h-full"/>
      </div>
    </div>
    </>
  );
};

const NavMd = () => {
  // Content for the tablet screen
  return <div>Tablet Screen</div>;
};

const NavLg = () => {
  // Content for the desktop screen
  return <div>Desktop Screen</div>;
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-navCol-900 p-4">
        <div className="md:hidden">
          {/* Mobile screen */}
          <NavSm />
        </div>

        <div className="hidden md:flex">
          {/* Tablet screen */}
          <NavMd />
        </div>

        <div className="hidden lg:flex">
          {/* Desktop screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
