import React, { useRef, useState } from "react";
import menuIcon from "../assets/MenuVector.png";
import RegisterBtn from "./RegisterBtn";
import MenuOptions from "./MenuOptions";
import { Link as RouteLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const navItems = ["Timeline", "Overview", "FAQs", "Contact"];

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const location = useLocation();

  return (
    <nav className="w-full h-20 flex px-16 z-[999]">
      <div className="w-3/5 lg:w-2/5 flex items-center">
        <RouteLink to="/" className="w-1/3 z-50">
          <span className="text-white font-[ClashDisplay-Bold] lg:text-4xl text-xl cursor-pointer">
            get
          </span>
          <span className="text-[#D434FE] font-[ClashDisplay-Bold] lg:text-4xl text-xl cursor-pointer">
            linked
          </span>
        </RouteLink>
      </div>
      <ul className="hidden lg:w-3/5 text-white lg:flex items-center justify-center gap-4">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`w-fit p-2 cursor-pointer hover:text-[#D434FE] transition-colors duration-300`}
          >
            {item.toLowerCase() === "contact" ? (
              location.pathname.toLowerCase() !== "/contact" ? (
                <RouteLink
                  to={'/'+item.toLocaleLowerCase()}
                  className="text-base cursor-pointer"
                >
                  {item}
                </RouteLink>
              ) : (
                <span className="no-select ">{item}</span>
              )
            ) : (
              <ScrollLink
                to={item}
                smooth={true}
                offset={0}
                duration={500}
                className="text-base cursor-pointer"
              >
                {item}
              </ScrollLink>
            )}
          </li>
        ))}
        {location.pathname.toLowerCase() !== "/register" ? (
          <div className="ml-14">
            <RegisterBtn link="/register" text="Register" />
          </div>
        ) : (
          <div>
            <RouteLink
              to="/register"
              className="text-base font-[montserrat] text-white gradientBorder bg-transparent py-2 px-7 rounded-sm"
            >
              Register
            </RouteLink>
          </div>
        )}
      </ul>
      <div className="w-2/5 lg:hidden flex items-center justify-end">
        <div className="w-6 h-6 object-contain overflow-hidden">
          <img src={menuIcon} alt="menu" onClick={toggleModal} />
        </div>
      </div>

      <MenuOptions isOpen={isModalOpen} onClose={toggleModal}>
        {/* Add your menu content here */}
        <ul className=" text-white">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`w-fit p-2 cursor-pointer hover:text-[#D434FE] transition-colors duration-300`}
            >
              {item === "Contact" ? (
                location.pathname.toLowerCase() !== "/contact" ? (
                  <RouteLink
                    to={item}
                    // smooth={true}
                    // offset={0}
                    // duration={500}
                    className="text-base cursor-pointer"
                  >
                    {item}
                  </RouteLink>
                ) : (
                  <span className="no-select ">{item}</span>
                )
              ) : (
                <ScrollLink
                  to={item}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="text-base cursor-pointer"
                >
                  {item}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      </MenuOptions>
    </nav>
  );
}

export default Navbar;

// 903AFF
// D434FE
// FE34B9
