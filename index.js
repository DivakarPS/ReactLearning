import ReactDom from "react-dom";
import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <h3>Meghna Foods</h3>
            <div className="res-img"> </div>
            <div className="res-info">
                <div className="res-name"> </div>
                <div className="res-rating"> </div>
                <div className="res-cuisine"> </div>
                <div className="res-price"> </div>
                <div className="res-delivery"> </div>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search </div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className = "app">
               <Header />
               <Body />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout />);