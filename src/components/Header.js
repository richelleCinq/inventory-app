import logo from '../Limn_logo.png';
import '../css/Header.css'; 
import React from "react";


export default function Header() {
    return (
        <header className = "nav">
            <div>
            <img src= {logo} alt= "LIMN logo" className="logo" />
            </div>
            <nav>
                <ul className="menu">
                    <li className="nav-item">Shop</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-item">Blog</li>
                </ul>
            </nav>
        </header>
    );
};