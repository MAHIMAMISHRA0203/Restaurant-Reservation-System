import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (elementLink) => {
    if (elementLink === 'qualities') {
      if (location.pathname !== '/') {
        navigate('/');
        // Add a small delay to ensure navigation completes before scrolling
        setTimeout(() => {
          const qualitiesSection = document.getElementById('qualities');
          if (qualitiesSection) {
            qualitiesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };
return (
    <>
    <nav>
        <div className="logo">SIT.EAT.REPEAT</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
            {data[0].navbarLinks.map((element) => (
            <div
                key={element.id}
                onClick={() => handleNavClick(element.link)}
                style={{ cursor: 'pointer' }}
                className="nav-link"
            >
                {element.title}
            </div>
            ))}
        </div>
        <RouterLink to="/menu" className="menuBtn">OUR MENU</RouterLink>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
    </nav>
    </>
);
};

export default Navbar;