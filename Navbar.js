import React from "react";
import logo from "./logor.png";

export default function Navbar(){
    return (
        <nav className="nav">
            <img src={logo} alt="logo" className="image"></img>
            <h1>ReactFacts</h1>
        </nav>
    )
}