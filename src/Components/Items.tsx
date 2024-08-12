import { productsTypes } from "../product.types"
import { CiStar } from "react-icons/ci";
import { motion } from 'framer-motion';
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/appSlice";


type Item={
    product:productsTypes
}
const Items:React.FC<Item>=({product})=>{
    const dispatch=useDispatch();
  
   

    const handleAddClick=()=>{
         dispatch(addItem(product));
    }

    return(
        <motion.div className=" shadow-xl rounded-md p-2 cursor-pointer" key={product.id}  whileHover={{ y: -20 }}>
            <img src={product.thumbnail} alt="item-image" className="h-[300px] w-full shadow-md rounded-md"/>
            <div className="mt-4 bg-white p-2" 
     >
            <h1 className="text-xl  hover:text-blue-500 cursor-pointer truncate">{product.title}</h1>
            <div className="flex justify-between items-center mt-2">
                <div className="">
                <h1 className=" hover:text-blue-500 cursor-pointer">₹{product.price}</h1>
            <div className="flex gap-2">
                <button className="bg-green-500 flex items-center gap-2 text-white px-2 rounded-md">{parseInt(product.rating).toFixed(1)} <span className="text-yellow"><CiStar/></span> </button>
                <h1 className="font-bold">{product.reviews.length} Reviews</h1>

            </div>
            <h1>{product.returnPolicy}</h1>
                </div>
                <div className="flex flex-col gap-2 justify-center">
                    <button className="bg-green-400 rounded-lg px-2 font-bold" onClick={handleAddClick}>+</button>
                    <button className="bg-red-400 rounded-lg px-2 font-bold">-</button>

                </div>
                
            </div>
            </div>
            



        </motion.div>
    )
}
export default Items;