import React from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="mb-8 lg:mb-6 wrapper">
      <img
        src={logo}
        alt="Website Logo"
        className="mx-auto w-[36.72px] h-[36.72px] lg:mx-0 lg:w-[58.75px] lg:h-[58.75px]"
      />
    </header>
  );
};

export default Header;
