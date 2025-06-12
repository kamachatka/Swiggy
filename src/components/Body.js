import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "../Shimmer";
import { Link } from "react-router";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";


const Body = ()=>{
  const [ searchInput, setSearchInput] = useState("");
  const [ filterRestaurants, setFilterRestaurants ] = useState([]);

  const [ allRestaurants, setAllRestaurants ] = useState([]);

  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3261031&lng=82.9982824&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // Optional Chaining( ? )
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  console.log(filterRestaurants);

  if (filterRestaurants?.length == 0 )
    return <h1>no restaurant found</h1>;

    return allRestaurants?.length == 0 ? (<Shimmer />) :(
      <>
      <div className="search-container p-5 bg-pink-100 my-5">
      <input
      data-testid="search-input"
      type="text"
      className="focus:bg-yellow-100 bg-white rounded-sm"
      placeholder="Search"
      value={searchInput}
      onChange={ (e) => {
        setSearchInput(e.target.value);
      }}/>

        <button data-testid="search-btn" className="search-btn p-2 m-5 bg-purple-900 hover:bg-purple-700 text-white rounded-md"
        onClick={()=>{
          const data = filterData( searchInput, allRestaurants);
          setFilterRestaurants(data);
        }}>Search</button>
        
        <input value={user.name} onChange={
          e => setUser({
            ...user,
          name: e.target.value,
        })
        }></input>

<input value={user.email} onChange={
          e => setUser({
            ...user,
          email: e.target.value,
        })
        }></input>
      </div>
        <div className="flex flex-wrap bg-pink-100" data-testid="res-list">
        {filterRestaurants.map((restaurant) =>{
          return ( <Link to ={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}> <RestaurantCard{...restaurant.info} /> </Link>);
        })}
        </div>
        </>
    );
};
export default Body;