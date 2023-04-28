import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { RiDashboardLine, RiBook2Line, RiCalendar2Line, RiUserSearchLine, RiContactsLine, RiTaskLine, RiFileTextLine, RiSettings4Line } from "react-icons/ri";
import './sidenav.css';

function Sidenav() {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar"><br></br><br></br><br></br>
   
        <div className="navbar-header-menu" onClick={handleMenuClick}>
          {isMobile ? <GrClose /> : <FaBars />}

      </div>
     
      <ul className={`navbar-menu ${isMobile ? "active" : ""}`}>
      <div className="navbar-item">
        <span className="navbar-header-title">GENERAL</span></div>
        <li className="navbar-subitem">
          <a href="#" className="navbar-link">
            <RiDashboardLine className="navbar-icon" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="navbar-subitem">
          <a href="#" className="navbar-link">
            <RiBook2Line className="navbar-icon" />
            <span>Bookings</span>
          </a>
        </li>
        <li className="navbar-item">
          <span className="navbar-header-title">APPLICATIONS</span>
          <ul className="navbar-submenu">
            <li className="navbar-subitem">
              <a href="#" className="navbar-link">
                <RiCalendar2Line className="navbar-icon" />
                <span>Calendar</span>
              </a>
            </li>
            <li className="navbar-subitem">
              <a href="#" className="navbar-link">
                <RiUserSearchLine className="navbar-icon" />
                <span>Leads</span>
              </a>
            </li>
            <li className="navbar-subitem">
              <a href="#" className="navbar-link">
                <RiUserSearchLine className="navbar-icon" />
                <span>Clients</span>
              </a>
            </li>
            <li className="navbar-subitem">
              <a href="#" className="navbar-link">
                <RiContactsLine className="navbar-icon" />
                <span>Contacts</span>
              </a>
            </li>
            <li className="navbar-subitem">
              <a href="#" className="navbar-link">
                <RiTaskLine className="navbar-icon" />
                <span>Tasks</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="navbar-item">
          <span className="navbar-header-title">FORMS</span>
          <ul className="navbar-submenu">
            <li className="navbar-subitem">
              <a href="#" className="navbar-link">
                <RiFileTextLine className="navbar-icon" />
                <span>Forms</span>
              </a>
            </li>
            </ul>
        </li>
        <li className="navbar-item">
            <span className="navbar-header-title">Settings</span>
            <ul className="navbar-submenu">
            <li className="navbar-subitem">
              <a href="#" className="navbar-link">
                <RiFileTextLine className="navbar-icon" />
                <span>Forms</span>
              </a>
            </li>
            </ul>
        </li>
      </ul>
    </nav>
 

  );
}

export default Sidenav;
