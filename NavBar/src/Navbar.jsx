import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links } from "./data";

const Navbar = () => {
  const [stateChange, setStateChange] = useState(false);
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);

  const toggel = () => {
    setStateChange(!stateChange);
  };
  const containerStyle = {
    height: stateChange
      ? `${linkRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggel" onClick={toggel}>
            <FaBars />
          </button>
        </div>
      </div>
      <div className="links-container" ref={linkContainerRef} style={containerStyle}>
        <ul className="links" ref={linkRef}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <ul>
                  <a href={link.url}>{link.text}</a>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
