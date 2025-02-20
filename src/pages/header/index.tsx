import React, { useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { AppContext } from "../AppContextProvider";

const Header = () => {
  const { firstletter, handleLogOut } = useContext(AppContext);
  
  // Ensure firstletter is defined and has at least one character
  const alpha = firstletter && firstletter.length > 0 ? firstletter[0] : '';
  const letter = alpha ? alpha.toUpperCase() : '';

  return (
    <>
      <div className="flex justify-between px-4 items-center py-2 bg-white shadow-lg sticky top-0 z-20">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-stone-100 text-red-500 font-extrabold transition shadow-md hover:shadow-lg border border-gray-300 border-solid">
            {letter}
          </div>
          <div className="text-lg font-medium text-stone-800">Dashboard</div>
        </div>
        <button onClick={handleLogOut} className="flex items-center gap-2 hover:opacity-85 ">
          <BiLogOut className="text-2xl text-red-500" />Logout
        </button>
      </div>
    </>
  );
};

export default Header;
