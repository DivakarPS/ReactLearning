
import {Shimmer} from "./index";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import useOnlineStatus from "../utils/useOnlineStatus";


const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(!resInfo){
        return (<div>
            <h2>Fetching Data...</h2>
                  <Shimmer />
               </div> )

    }

    const  {name,cloudinaryImageId,costForTwoMessage,cuisines} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return (
        <div>
            <h1>{name}</h1>
            {itemCards? (
                <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
            ):null}
            <ul>
                {/*{if(itemCards)?*/}
                {/*itemCards.map(item =>*/}
                {/*    (<li key={item.card.info.name}>{item.card.info.name} - {item.card.info.price? item.card.info.price/100:item.card.info.defaultPrice/100 }</li>)*/}
                {/*):null*/}
                {/*}*/}
                {itemCards ?
             itemCards.map(item => (
            <li key={item.card.info.name}>
                {item.card.info.name} - {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
            </li>
        ))
        : <h1>No Menu for now :(</h1>
    }
            </ul>
        </div>
    )
}

export default RestaurantMenu;