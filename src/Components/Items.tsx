import { CiStar } from "react-icons/ci";
import { motion } from 'framer-motion';
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Redux/appSlice";
import { ProductType } from "../product.types";
import { MinusCircle, PlusCircle } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";


type Item = {
    product: ProductType
}
const Items: React.FC<Item> = ({ product }) => {
    const dispatch = useDispatch();



    const handleAddClick = () => {
        dispatch(addItem(product));
        toast.success('Item added to cart!')
    }
    const handleRemoveClick = () => {
        dispatch(removeItem(product.id));
        toast('Item removed from cart!',
            {
                icon: '❌',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }

    return (
        <>
            <Toaster />
            <div className=" shadow-xl rounded-md p-2 cursor-pointer" key={product.id} >
                <img src={product.thumbnail} alt="item-image" className="h-[300px] w-full shadow-md rounded-md object-contain" />
                <motion.div className="mt-4 bg-white p-2"
                    whileHover={{ y: -25 }}>
                    <h1 className="text-2xl  hover:text-blue-500 cursor-pointer truncate font-bold">{product.title}</h1>
                    <div className="flex justify-between items-center mt-2">
                        <div className="">
                            <h1 className=" hover:text-blue-500 cursor-pointer text-xl">₹{product.price}</h1>
                            <div className="flex gap-2 mt-4">
                                <button className="bg-green-500 flex items-center gap-2 text-white px-2 rounded-md">{product.rating.toFixed(1)} <span className="text-yellow"><CiStar /></span> </button>
                                <h1 className="font-bold">{product.reviews.length} Reviews</h1>

                            </div>
                            <h1>{product.returnPolicy}</h1>
                        </div>
                        <div className="flex flex-col gap-2 justify-center">
                            <PlusCircle className="bg-green-400 rounded-md size-8 font-extrabold text-2xl" onClick={handleAddClick} />
                            <MinusCircle className="bg-red-400 rounded-md size-8 font-extrabold text-2xl" onClick={handleRemoveClick} />

                        </div>

                    </div>
                </motion.div>




            </div>
        </>
    )
}
export default Items;