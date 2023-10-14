import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [auth , setAuth] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
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
                    <li> Online {onlineStatus ? "✅" : "🔴"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;