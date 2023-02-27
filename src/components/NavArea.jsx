import React from "react";
import "./NavArea.css";

function NavArea() {
    return (
        <nav className="nav-area">
            <div className="nav-item">
                <ion-icon name="document-text-outline"></ion-icon>
                <p className="nav-item-name">Text</p>
            </div>
            <div className="nav-item">
                <ion-icon name="globe-outline"></ion-icon>
                <p className="nav-item-name">Website</p>
            </div>
            <div className="nav-item">
            <ion-icon name="mail-outline"></ion-icon>
                <p className="nav-item-name">Email</p>
            </div>
            <div className="nav-item">
                <ion-icon name="send-outline"></ion-icon>
                <p className="nav-item-name">SMS</p>
            </div>
            <div className="nav-item">
                <ion-icon name="person-circle-outline"></ion-icon>
                <p className="nav-item-name">Contact</p>
            </div>
            <div className="nav-item">
                <ion-icon name="wifi-outline"></ion-icon>
                <p className="nav-item-name">Wifi</p>
            </div>
        </nav>
    );
}

export default NavArea;