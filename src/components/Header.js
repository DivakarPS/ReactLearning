import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [auth , setAuth] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button
                        className="login-btn"
                        onClick={() => {
                            if(auth === "Login"){
                                setAuth("Logout");
                            }
                            else{
                                setAuth("Login");
                            }
                        }}
                    >{auth}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;