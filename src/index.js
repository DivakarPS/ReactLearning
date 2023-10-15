import ReactDom from "react-dom/client";
import React, {lazy, Suspense} from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {Header, Body, AboutClass, Contact, Error, RestaurantMenu} from "./components/index.js";
import {Shimmer} from "./components";



const styleCard = {
    backgroundColor: "lightgrey",
}



const Grocery = lazy(() => import('./components/Grocery'));

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
               element: <AboutClass />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}>
                            <Grocery/>
                         </Suspense>
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter}/>);