import React, { useState } from 'react';

const Header = () => {
  
  return (
    <div>
      <header className="text-white body-font" style={{ background: "linear-gradient(to right, #0F3460 80%, #ADD8E6 )" }}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <img src="energyy_logo.png" width="100px" alt="EnergyHub_Logo"></img>
          <nav className="md:ml-auto flex flex-wrap items-center text-xl font-bold justify-center m-12">
            <a className="mr-10 hover:text-yellow-400" href='#'>Home</a>
            <a className="mr-10 hover:text-yellow-400" href='#'>Know Us</a>
            <a className="mr-10 hover:text-yellow-400" href='#'>Media</a>
            <a className="mr-10 hover:text-yellow-400" href='#'> Contact Us</a>
          </nav>
          <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
            <span className="relative">
              <input id="Toggle1" type="checkbox" className="hidden peer" />
              <div className="w-14 h-6 rounded-full shadow-inner dark:bg-white peer-checked:dark:bg-violet-400"></div>
              <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
            </span>
          </label>
        </div>
      </header>
    </div>
  );
}

export default Header;
