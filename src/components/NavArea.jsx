import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavArea.css";
import { AtSign, Contact, Globe, Phone, Send, Type, Wifi } from "lucide-react";

function NavArea() {
  const path = useLocation();

  return (
    <nav className="nav-area">
      <Link
        className={`nav-item text ${path.pathname === "/" ? "active" : ""}`}
        to="/"
      >
        <Type size={22} />
        <p className="nav-item-text">Text</p>
      </Link>
      <Link
        className={`nav-item website ${
          path.pathname === "/website" ? "active" : ""
        }`}
        to="/website"
      >
        <Globe size={22} />
        <p className="nav-item-text">Website</p>
      </Link>
      <Link
        className={`nav-item email ${
          path.pathname === "/email" ? "active" : ""
        }`}
        to="/email"
      >
        <AtSign size={22} />
        <p className="nav-item-text">Email</p>
      </Link>
      <Link
        className={`nav-item sms ${path.pathname === "/sms" ? "active" : ""}`}
        to="/sms"
      >
        <Send size={22} />
        <p className="nav-item-text">SMS</p>
      </Link>
      <Link
        className={`nav-item phone ${
          path.pathname === "/phone" ? "active" : ""
        }`}
        to="/phone"
      >
        <Phone size={22} />
        <p className="nav-item-text">Phone</p>
      </Link>
      <Link
        className={`nav-item contact ${
          path.pathname === "/contact" ? "active" : ""
        }`}
        to="/contact"
      >
        <Contact size={22} />
        <p className="nav-item-text">Contact</p>
      </Link>
      <Link
        className={`nav-item wifi ${path.pathname === "/wifi" ? "active" : ""}`}
        to="/wifi"
      >
        <Wifi size={22} />
        <p className="nav-item-text">Wifi</p>
      </Link>
    </nav>
  );
}

export default NavArea;
