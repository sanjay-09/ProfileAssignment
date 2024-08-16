import { useSelector } from "react-redux"
import { RootState } from "../Redux/appStore"




const PriceDetailsCard = () => {
    // const products = useSelector((state: RootState) => state.productSlice.cart);
    const cartPrice = useSelector((state: RootState) => state.productSlice.cartPrice);
    const discount=10;
    const discountedAmount=(cartPrice*discount)/100;
    const finalPrice=cartPrice-discountedAmount;
    
    return (
        <div className='card_container h-full flex-col p-4 shadow-lg gap-6 min-w-full '>
            <h2 className='text-gray-400 font-bold text-2xl'>PRICE DETAILS</h2>
            <hr/>

            <div className='flex flex-col mt-4 gap-4  border-b-2'>
                <div className='flex gap-2 items-center justify-between'><p>{`Price)`}</p> <p>${cartPrice.toFixed(2)}</p></div>
                <div className='flex gap-2 items-center justify-between'><p>discount - 10%</p>  <p>-$ {discountedAmount}</p></div>
               

                <div className='flex gap-2 items-center justify-between font-extrabold mt-2 mb-2 border-t-2'><p className=''>Total Amount</p> <p>{finalPrice}</p></div>
            </div>

            <p className='text-green-500 font-bold mt-4 mb-1 text-lg'>You will save ${discountedAmount} on this order</p>

        </div>
        
    )
}

export default PriceDetailsCard