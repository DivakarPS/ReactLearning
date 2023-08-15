import ReactDom from "react-dom/client";
import React from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";


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

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />
    }
])

const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter}/>);