import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavArea.css";
import { Contact, Globe, Mail, Phone, Send, Type, Wifi } from "lucide-react";

function NavArea() {
  const path = useLocation();

  return (
    <nav className="nav-area">
      <Link
        className={`nav-item text ${path.pathname === "/" ? "active" : ""}`}
        to="/"
      >
        <Type />
        <p className="nav-item-name">Text</p>
      </Link>
      <Link
        className={`nav-item website ${
          path.pathname === "/website" ? "active" : ""
        }`}
        to="/website"
      >
        <Globe />
        <p className="nav-item-name">Website</p>
      </Link>
      <Link
        className={`nav-item email ${
          path.pathname === "/email" ? "active" : ""
        }`}
        to="/email"
      >
        <Mail />
        <p className="nav-item-name">Email</p>
      </Link>
      <Link
        className={`nav-item sms ${path.pathname === "/sms" ? "active" : ""}`}
        to="/sms"
      >
        <Send />
        <p className="nav-item-name">SMS</p>
      </Link>
      <Link
        className={`nav-item phone ${
          path.pathname === "/phone" ? "active" : ""
        }`}
        to="/phone"
      >
        <Phone />
        <p className="nav-item-name">Phone</p>
      </Link>
      <Link
        className={`nav-item contact ${
          path.pathname === "/contact" ? "active" : ""
        }`}
        to="/contact"
      >
        <Contact />
        <p className="nav-item-name">Contact</p>
      </Link>
      <Link
        className={`nav-item wifi ${path.pathname === "/wifi" ? "active" : ""}`}
        to="/wifi"
      >
        <Wifi />
        <p className="nav-item-name">Wifi</p>
      </Link>
    </nav>
  );
}

export default NavArea;
