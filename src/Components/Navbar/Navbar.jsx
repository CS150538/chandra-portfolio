import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import { Link } from "react-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img onClick={openMenu} className="nav-mob-open" src={menu_open} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <Link
            className="anchor-link"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <p onClick={() => setMenu("home")}>Home</p>
          </Link>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link
            className="anchor-link"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <p onClick={() => setMenu("about")}>About Me</p>
          </Link>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link
            className="anchor-link"
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <p onClick={() => setMenu("services")}>Services</p>
          </Link>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link
            className="anchor-link"
            to="work"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </Link>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link
            className="anchor-link"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <p onClick={() => setMenu("contact")}>Contact</p>
          </Link>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <Link
          className="anchor-link"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Connect With Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
