import { useDispatch, useSelector } from "react-redux"
import CartProductCard from "../Components/CartProductCard"
import PriceDetailsCard from "../Components/PriceDetailsCard"
import { RootState } from "../Redux/appStore"
import React from "react"
import { ProductType } from "../product.types"
import { decreaseQuantity, increaseQuantity } from "../Redux/appSlice"







const CartPage = () => {
  const selectedProducts = useSelector((state: RootState) => state.productSlice.cart);
  return (
    
    <div className="bg-gray-300 w-[100vw] h-100%">
      <div className="container mx-auto pt-[9vh] h-100%">
        <div className="flex justify-between items-start gap-4 ">
          <div className="product_details bg-neutral-200 h-full min-w-[70vw] rounded-sm mt-2 relative flex flex-col">
            <div className="flex-grow">
              {selectedProducts.map((product) =>
                <React.Fragment key={product.id}>
                  <CartProductCard {...product} />
                
                </React.Fragment>
              )}

            </div>
            <div className="sticky bottom-2 bg-white/15  backdrop-blur-xl bg-opacity-100 flex justify-end border items-center shadow-xl rounded-2xl mx-2 p-1">
              <button type="button" className="text-white bg-orange-500 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium text-lg px-10 py-2.5 text-center me-6 mb-2 dark:focus:ring-yellow-900 mt-2">
                PLACE ORDER
              </button>
            </div>
          </div>

          <div className="price_details min-h-[30vh] min-w-[20vw] bg-white mt-4 rounded-lg sticky top-12">
            <PriceDetailsCard />
          </div>
        </div>
      </div>
    </div>

  )
}

export default CartPage