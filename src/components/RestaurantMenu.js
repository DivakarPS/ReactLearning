
import {Shimmer} from "./index";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";


const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);


    if(!resInfo){
        return (<div>
            <h2 className="font-bold text-lg p-4">Fetching Data...</h2>
                  <Shimmer />
               </div> )

    }

    const  {name,cloudinaryImageId,costForTwoMessage,cuisines} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    // console.log(itemCards);
    const catogories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(catogories)
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            {itemCards? (
                <h2 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h2>
            ):null}
            {catogories.map((category,index) => (<RestaurantCategory
                data={category?.card?.card}
                key={category?.card?.card.title}
                showItems={index === showIndex}
                setShowIndex = {(state) => !state? setShowIndex(index): setShowIndex(null)} />
            ))}
    {/*        <ul>*/}
    {/*            /!*{if(itemCards)?*!/*/}
    {/*            /!*itemCards.map(item =>*!/*/}
    {/*            /!*    (<li key={item.card.info.name}>{item.card.info.name} - {item.card.info.price? item.card.info.price/100:item.card.info.defaultPrice/100 }</li>)*!/*/}
    {/*            /!*):null*!/*/}
    {/*            /!*}*!/*/}
    {/*            {itemCards ?*/}
    {/*         itemCards.map(item => (*/}
    {/*        <li key={item.card.info.name}>*/}
    {/*            {item.card.info.name} - {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}*/}
    {/*        </li>*/}
    {/*    ))*/}
    {/*    : <h1>No Menu for now :(</h1>*/}
    {/*}*/}
    {/*        </ul>*/}
        </div>
    )
}

export default RestaurantMenu;