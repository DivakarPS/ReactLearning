import {CDN_URL} from "../utils/constants";

const ItemList = ({items}) => {
    console.log(items," is items")
    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                        <span className="font-bold">{item.card.info.name}</span>
                        <span className="font-bold"> - ₹ {item.card.info.price?item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        <p className="text-xs py-4"> {item.card.info.description}</p>
                    </div>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="bg-black text-white shadow-lg p-2 rounded-lg">Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId}  alt="food-image" className="border-b-2 rounded-lg"/>
                    </div>
                </div>
            ))}
        </div>)

}

export default ItemList;