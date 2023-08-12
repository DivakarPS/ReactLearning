import React from "react";
import RestaurantCard from "./RestaurantCard";
import {useState, useEffect } from "react";
import {API_URL} from "../utils/constants";
import Shimmer from "./Shimmer.js";

const Body = () => {
    const [resList, setResList] = useState([]);

    useEffect(() => {
         fetchDate();
    },[]);
    const fetchDate = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setResList(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        }
        catch (error) {
            console.log(error);
        }
    }

    if(!resList.length) {
        return (
            <div>
                 <h1>Loading...</h1>
                 <Shimmer />
            </div>
        )
    }

    return (
        <div className="body">
            <div className="filter">
                <button
                    className = "filter-btn"
                    onClick={ () => {
                        const filteredRes = resList.filter( (res) => res.info.avgRating >4.2);
                        setResList(filteredRes);
                    } }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                resList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resObj={restaurant}/>
                })
              }
            </div>
        </div>
    )
}

export default Body;