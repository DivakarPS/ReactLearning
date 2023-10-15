import React, {lazy} from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const [auth , setAuth] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const Grocery = lazy(() => import('./Grocery'));
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-44" src={LOGO_URL}/>
            </div>
            <div className="flex items-center p-4 m-4">
                <ul className="flex">
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="px-4">
                        <Link to='/grocery'>Grocery</Link>
                    </li>
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
                    <li className="px-4"> Online {onlineStatus ? "✅" : "🔴"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;