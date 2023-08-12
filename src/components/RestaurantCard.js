import React from "react";
import { CDN_URL} from "../utils/constants";

const styleCard = {
    backgroundColor: "lightgrey",
}

const RestaurantCard = (props) => {
   const {resObj} = props;
   const { cloudinaryImageId,name, cuisines, sla, costForTwo,avgRating } = resObj.info;
    return (
        <div className="res-card" style={styleCard}>
            <img alt="res-logo" className="res-logo" src={ CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(" ")}</h4>
            <h4>{sla.deliveryTime +" Minutes"}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
        </div>
    )
}

export default RestaurantCard;