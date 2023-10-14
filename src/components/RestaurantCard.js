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
            <h3 className="res-name">{name}</h3>
            <h4 className="res-cuisines">{cuisines.join(" ")}</h4>
            <h4 className="res-deliveryTime">{sla.deliveryTime +" Minutes"}</h4>
            <h4 className="res-costForTwo">{costForTwo}</h4>
            <h4 className="res-avgRating">{avgRating}</h4>
        </div>
    )
}

export default RestaurantCard;