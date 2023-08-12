import ReactDom from "react-dom/client";
import React from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";




const styleCard = {
    backgroundColor: "lightgrey",
}





const AppLayout = () => {
    return (
        <div className = "app">
               <Header />
               <Body/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout />);