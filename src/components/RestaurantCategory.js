import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = (data) => {
    console.log(data);
    const [showList,setShowList] = useState(false);
    const handleClick = () =>{
        console.log("clicked");
        setShowList(!showList)
        data.setShowIndex(showList);
    }

    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.data.title} ({data.data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {data.showItems && <ItemList items={data.data.itemCards}/>}
        </div>
    );
}
export default RestaurantCategory;