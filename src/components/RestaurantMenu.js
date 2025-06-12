import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const { id } = useParams();

    const restaurant = useRestaurant(id);

    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem("Grapes"));
    };

       console.log(restaurant);
    return (
        <>
        { restaurant ? (
        <div>
            <h1>Restaurant id: {id}</h1>
            <h2>{restaurant?.cards[2]?.card?.card?.info?.name}</h2>
            <img src= {IMG_CDN_URL + restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId}/>
            <h3>{restaurant?.cards[2]?.card?.card?.info?.avgRating} stars</h3>
            <h3>{restaurant?.cards[2]?.card?.card?.info?.area}</h3>
            <h3>{restaurant?.cards[2]?.card?.card?.info?.city}</h3>
        </div>) : <></> }
        <div className="flex">
            <button className="p-2 m-5 bg-green-200" onClick={() => handleAddItem()}>Add Item</button>
        </div>
      </>
    );
};
export default RestaurantMenu;