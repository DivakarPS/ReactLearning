import React from "react";
import { CDN_URL} from "../utils/constants";

const styleCard = {
    backgroundColor: "lightgrey",
}

const RestaurantCard = (props) => {
   const {resObj} = props;
   const { cloudinaryImageId,name, cuisines, sla, costForTwo,avgRating } = resObj.info;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-400">
            <img alt="res-logo im" className="rounded-lg" src={ CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4 className="res-cuisines">{cuisines.join(" ")}</h4>
            <h4 className="res-deliveryTime">{sla.deliveryTime +" Minutes"}</h4>
            <h4 className="res-costForTwo">{costForTwo}</h4>
            <h4 className="res-avgRating">{avgRating}</h4>
        </div>
    )
}

export default RestaurantCard;