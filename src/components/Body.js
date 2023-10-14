import React from "react";
import RestaurantCard from "./RestaurantCard";
import {useState, useEffect } from "react";
import {API_URL} from "../utils/constants";
import Shimmer from "./Shimmer.js";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [resList, setResList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredResList, setFilteredResList] = useState([]);
    useEffect(() => {
         fetchData();
    },[]);
    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setResList(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            setFilteredResList(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        }
        catch (error) {
            console.log(error);
        }
    }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
            <h1>
                You are offline! please check your internet
            </h1>
        )
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
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        onChange={(e) => { setSearchText(e.target.value) }}
                        value={searchText}/>
                    <button
                        className="search-btn"
                        onClick={() => {
                            const filteredRes = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredResList(filteredRes);
                            //if I search for some other restaurant it will search only within the filtered restaurant, how to solve this?
                            if(searchText === ""){
                                alert("Please enter a restaurant name")
                            }
                            if(filteredRes.length === 0){
                                alert("No restaurant found");
                                 setFilteredResList(resList);
                                setSearchText("");
                            }
                        }}
                    >Search</button>
                </div>
                <button
                    className = "filter-btn"
                    onClick={ () => {
                        const filteredRes = resList.filter( (res) => res.info.avgRating >4.2);
                        setFilteredResList(filteredRes);
                    } }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredResList.map((restaurant) => {
                    return <Link
                        key={restaurant.info.id}
                        to={"/restaurant/"+restaurant.info.id}
                        className="restaurant-link"
                    >
                       <div className="restaurant-card-wrapper">
                           <RestaurantCard resObj={restaurant} />
                       </div>
                    </Link>
                })
              }
            </div>
        </div>
    )
}

export default Body;