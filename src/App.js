import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Profile from "./components/Profile";
import Shimmer from "./Shimmer";
import Instamart from "./components/Instamart";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";


// const Instamart = lazy(()=> import("./components/Instamart"));

const AppLayout = ()=>{
    const [user, setUser] = useState({
        name: "Amitesh Singh",
        email: "amitesh02150@gmail.com",
        });

    return(
        <Provider store={store}>
        <UserContext.Provider
        value={{
            user: user,
            setUser: setUser,
            }}>
        <Header/>
        <Outlet/>
        <Footer/>
        </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>,
                children : [
                    {
                    path : "profile",
                    element : <Profile/>
                },
            ],
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/restaurant/:id",
                element : <RestaurantMenu/>
            },
            {
                path : "/instamart",
                element : (
                <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
            ),
            },
            {
                path : "/cart",
                element : <Cart/>
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
