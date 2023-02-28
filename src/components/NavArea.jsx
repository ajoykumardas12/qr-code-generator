import React from "react";
import { Link } from "react-router-dom";
import "./NavArea.css";

function NavArea() {
    return (
        <nav className="nav-area">
            <Link className="nav-item text" to="/">
                <ion-icon name="document-text-outline"></ion-icon>
                <p className="nav-item-name">Text</p>
            </Link>
            <Link className="nav-item website" to="/website">
                <ion-icon name="globe-outline"></ion-icon>
                <p className="nav-item-name">Website</p>
            </Link>
            <Link className="nav-item email" to="/email">
                <ion-icon name="mail-outline"></ion-icon>
                <p className="nav-item-name">Email</p>
            </Link>
            <Link className="nav-item sms" to="/sms">
                <ion-icon name="send-outline"></ion-icon>
                <p className="nav-item-name">SMS</p>
            </Link>
            <Link className="nav-item phone" to="/phone">
                <ion-icon name="call-outline"></ion-icon>
                <p className="nav-item-name">Phone</p>
            </Link>
            <div className="nav-item contact">
                <ion-icon name="person-circle-outline"></ion-icon>
                <p className="nav-item-name">Contact</p>
                <p className="tooltip-text">coming soon!</p>
            </div>
            <div className="nav-item wifi">
                <ion-icon name="wifi-outline"></ion-icon>
                <p className="nav-item-name">Wifi</p>
                <p className="tooltip-text">coming soon!</p>
            </div>
        </nav>
    );
}

export default NavArea;