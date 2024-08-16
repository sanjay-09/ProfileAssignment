import React from 'react';
import { newProductType } from '../product.types';
import { useDispatch } from 'react-redux';
import { MinusCircle, PlusCircle } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import { addItemQuantity, removeItem, removeItemQuantity } from '../Redux/appSlice';

type ProductDetailsFooterProps = {
  product: newProductType;
};

const ProductDetailsFooter: React.FC<ProductDetailsFooterProps> = ({ product }: ProductDetailsFooterProps) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 items-center m-4 p-4">
      <div className="add_more_items">
        <div className="flex gap-2 items-center cursor-pointer">
          <MinusCircle
            className="rounded-full bg-white w-6 border border-gray-400 hover:bg-gray-300 drop-shadow-lg "
            onClick={() => {
              //@ts-ignore
              dispatch(removeItemQuantity(product.id));
              toast('Item removed from cart!', {
                icon: '❌',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              });
            }}
          />
          <div className="bg-white border-2 border-gray-500 rounded-md w-12 text-center">
            {product.quantity}
          </div>
          <PlusCircle
            className="rounded-full bg-white w-6 border border-gray-400 hover:bg-gray-300 drop-shadow-lg "
            onClick={() => {
              //@ts-ignore
              dispatch(addItemQuantity(product.id));
              toast.success('Item added to cart!');
            }}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <button className="font-bold hover:text-blue-400 transition-colors">SAVE FOR LATER</button>
        <button
          className="font-bold hover:text-blue-400 transition-colors"
          onClick={() => {
            dispatch(removeItem(product.id));
          }}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

const CartProductCard = (selectedProduct: newProductType) => {
  return (
    <>
      <Toaster />
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row p-6 shadow-xl rounded-md m-2 bg-white justify-around gap-4 md:gap-2">
          <img
            src={selectedProduct.img}
            className="rounded-xl border cursor-pointer w-full md:w-[200px] h-[300px] md:h-[300px]"
          />
          <div className="flex flex-col gap-4 md:gap-24 justify-center">
            <div className="line-clamp-10">
              <a
                className="text-black text-xl md:text-3xl font-bold hover:underline"
                href={"https://google.com"}
              >
                {selectedProduct.title} X {selectedProduct.quantity}
              </a>
              <p className="mt-4 text-[16px] md:text-[20px]">{selectedProduct.category}</p>
            </div>
            <div className="flex gap-4 md:gap-6 text-lg">
              <h3 className="font-extrabold text-2xl md:text-4xl">$ {selectedProduct.newPrice}</h3>
              <div className="flex font-medium text-green-600 items-center gap-2 md:gap-5">
                <p>{10}% off</p>
                <p className="">1 offer applied</p>
              </div>
            </div>
          </div>
        </div>
        <ProductDetailsFooter product={selectedProduct} />
      </div>
    </>
  );
};

export default CartProductCard;
