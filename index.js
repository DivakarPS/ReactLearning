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

const styleCard = {
    backgroundColor: "lightgrey",
}

const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yfyo8aklppbwdplv7ofp"/>
            <h3>Meghna Foods</h3>
            <h4>Biriyani, North Indian, Asian</h4>
            <span>4.4 Stars</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>38 mins</span>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search </div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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