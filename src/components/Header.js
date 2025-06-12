import { useState, useContext } from "react";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { Link } from "react-router";


const Title = ()=>(
    <a href="/">
    <img data-testid="logo" className="h-28 p-2"
    alt="logo"
    src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"/>
    </a>
);

const Header = ()=>{
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const isOnline = useOnline();

    const {user} = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
        <Title/>
            <div className="nav-items">
            <ul className="flex py-10">
            <Link to = "/"><li className="px-2">Home</li></Link>
                <Link to = "/about"><li className="px-2">About</li></Link>
                <Link to = "/contact"><li className="px-2">Contact</li></Link>
                <Link to = "/instamart"><li className="px-2">Instamart</li></Link>
                <Link to = "/cart" ><li className="px-2" data-testid="cart" >Cart- {cartItems.length} items</li></Link>
            </ul>
            </div>
            <h1 data-testid="online-status">{isOnline? "ONLINE" : "OFFLINE"}</h1>
            <h1 className="p-10 font-bold text-red-900">{user.name}</h1>
            { isLoggedIn ? (
                <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
                )}
        </div>
    );
};

export default Header;