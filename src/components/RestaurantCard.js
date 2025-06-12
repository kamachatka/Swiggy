import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestaurantCard = ({name, avgRating, cuisines, cloudinaryImageId, areaName})=>{
    const {user} = useContext(UserContext);
    return(
        <div className="card w-[200px] p-2 m-2 shadow-lg bg-pink-50">
            <img src={ IMG_CDN_URL +
            cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{avgRating} stars</h3>
            <h5>{cuisines?.join(", ")}</h5>
            <h5>{areaName}</h5>
            <h5 className="font-bold">{user.name}</h5>
            <h5 className="font-bold">{user.email}</h5>
        </div>
    );
};

export default RestaurantCard;