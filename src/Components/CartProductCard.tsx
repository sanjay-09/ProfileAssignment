import React from 'react'
import { ProductType } from '../product.types'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from '../Redux/appSlice'
import { MinusCircle, PlusCircle } from 'lucide-react'
import { toast, Toaster } from 'react-hot-toast'
type ProductDetailsFooterProps = {
    product: ProductType
}
const ProductDetailsFooter: React.FC<ProductDetailsFooterProps> = ({ product }: ProductDetailsFooterProps) => {
    const dispatch = useDispatch();
    // const selectedQuant = useSelector((state:RootState)=> state.productSlice.cart)
    return (
        <div className="flex justify-center gap-12 items-center m-4 p-4">
            <div className="add_more_items">

                <div className="flex gap-2 items-center cursor-pointer">
                    <MinusCircle  className="rounded-full bg-white w-6 border border-gray-400 hover:bg-gray-300 drop-shadow-lg "
                        onClick={() => {
                            dispatch(decreaseQuantity(product.id))
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
                        }} />


                    <div className="bg-white border-2 border-gray-500 rounded-md w-12 text-center">
                        {product.selectedQuantity}
                    </div>
                    <PlusCircle className="rounded-full bg-white w-6 border border-gray-400 hover:bg-gray-300 drop-shadow-lg "
                        onClick={() => {
                            dispatch(increaseQuantity(product.id));
                            toast.success('Item added to cart!')
                        }
                        } />
                </div>
            </div>

            <button className="font-bold hover:text-blue-400 transition-colors">SAVE FOR LATER</button>
            <button className="font-bold hover:text-blue-400 transition-colors">REMOVE</button>
        </div>
    )
}

const CartProductCard = (selectedProduct: ProductType) => {
    return (
        <>
            <Toaster />
            <div className="flex flex-col">

                <div className='flex p-6 shadow-xl rounded-md m-2 bg-white justify-around '>
                    <img src={selectedProduct.images[0]} className='rounded-xl border shadow-2xl cursor-pointer' height={250} width={250} />
                    <div className='flex flex-col gap-24 justify-center'>
                        <div className='line-clamp-10 '>
                            <a className='text-black text-3xl font-bold hover:underline' href={"https://google.com"}>{selectedProduct.title}</a>
                            <p className='mt-4 text-[20px]'>{selectedProduct.category}</p>
                        </div>
                        <div className='flex gap-6 text-lg'>
                            <h3 className='font-extrabold text-4xl'>$ {selectedProduct.price}</h3>
                            <div className='flex font-medium text-green-600 items-center gap-5'>
                                <p> {selectedProduct.discountPercentage}% off </p>
                                <p className=''>1 offer applied </p>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col justify-start'>

                        <p className='whitespace-wrap '>
                            Delivery by Fri Aug 16 | <span className='text-green-400 font-bold'>FREE</span>
                        </p>
                    </div>
                </div>
                <ProductDetailsFooter product={selectedProduct} />
            </div>
        </>

    )
}

export default CartProductCard