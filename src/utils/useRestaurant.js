import { useState } from "react";
import { useEffect } from "react";


const useRestaurant = (id) =>{

    const [ restaurant , setRestaurant ] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
      }, []);
      async function getRestaurantInfo() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3674525&lng=83.025396&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
      };

      return restaurant;
};

export default useRestaurant;