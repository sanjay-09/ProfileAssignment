import { useSelector } from "react-redux"
import { AppStore, RootState } from "../Redux/appStore"




const PriceDetailsCard = () => {
    const products = useSelector((state: RootState) => state.productSlice.cart);
    const cartPrice = useSelector((state: RootState) => state.productSlice.cartPrice);
    
    return (
        <div className='card_container h-full flex-col p-4 shadow-lg gap-6 min-w-full '>
            <h2 className='text-gray-400 font-bold text-2xl'>PRICE DETAILS</h2>
            <hr/>

            <div className='flex flex-col mt-4 gap-4  border-b-2'>
                <div className='flex gap-2 items-center justify-between'><p>{`Price( ${products.length} items)`}</p> <p>${cartPrice.toFixed(2)}</p></div>
                <div className='flex gap-2 items-center justify-between'><p>discount</p> <p>- 19000</p></div>
                <div className='flex gap-2 items-center justify-between'><p>revised price</p> <p>$10000</p></div>

                <div className='flex gap-2 items-center justify-between font-extrabold mt-2 mb-2 border-t-2'><p className=''>Total Amount</p> <p>$19000</p></div>
            </div>

            <p className='text-green-500 font-bold mt-4 mb-1 text-lg'>You will save ₹16,500 on this order</p>

        </div>
        
    )
}

export default PriceDetailsCard