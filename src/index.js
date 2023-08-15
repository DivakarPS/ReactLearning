import ReactDom from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {Header, Body,About, Contact, Error} from "./components/index.js";


const styleCard = {
    backgroundColor: "lightgrey",
}





const AppLayout = () => {
    return (
        <div className = "app">
               <Header />
                <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
               path: "/about",
               element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/",
                element: <Body />
            }],
        errorElement: <Error />
    }
])

const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter}/>);