import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import menuLogo from '../../assets/menu-icon.png'
import "./NavBar.css";
import { Link }from 'react-scroll';
const NavBar = () => {
  
  const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY <= 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    const [toggle ,setToggle] = useState(false)
    const isHidden = () => {
      setToggle(() => !toggle)
    }
  return (
    <div >
       <nav className={`container ${isVisible ? 'visible' : 'notvisible'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={logo} alt="not found" className="logo" />
        <ul className={`${toggle ? 'hide-menu':''}`}>
          <li><div className="tooltip"> <Link to='Hero' spy={true} smooth={true} offset={0}>Home</Link>
          <span className="tooltipText">
            <ul> 
              <li>Tooltip text</li>
              <li>Tooltip text2</li>
              <li>Tooltip text3</li>
              <li>Tooltip text4</li>
            </ul></span></div></li>
          <li><Link to='Programs' spy={true} smooth={true} offset={-190} className="linkItem">Programs</Link></li>
          <li><Link to='About' spy={true} smooth={true} offset={-120} className="linkItem">About Us</Link></li>
          <li><Link to='Campus' spy={true} smooth={true} offset={-160} className="linkItem">Campus</Link></li>
          <li><Link to='Testimonials' spy={true} smooth={true} offset={-170} className="linkItem">Testimonials</Link></li>
          <li>
            <Link to='Contact' spy={true} smooth={true} offset={-100} className="btn LinkItem">Contact us </Link>
          </li>
        </ul>
        <img src={menuLogo} alt="menuIcon" className="menu" onClick={isHidden}/>
      </nav>
    </div>
  );
};

export default NavBar;
