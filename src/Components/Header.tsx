import { useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { RxDropdownMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { AppStore } from "../Redux/appStore";


const Header=()=>{

    const [showDropDown,setShowDropDown]=useState(true);
    const cart=useSelector((store:AppStore)=>store.productSlice.cart);


    return(
        <div className="w-full sm:h-[60px] h-[50px] bg-blue-700 text-white fixed z-[999] top-0">
            <div className="sm:container sm:mx-auto px-8 flex justify-between pt-2 ">
                
                <h1 className="font-extrabold sm:text-4xl  text-xl">Profile.FYI</h1>

                
             
              <div className="flex gap-6">
                <div className="flex justify-center items-center gap-1 text-xl">
                    <span className="font-bold">Cart</span>
                    <BsCartCheckFill/> {cart.length}

                </div>
                <div className="flex justify-center items-center text-xl">
                    <span className="font-bold">Login</span>

                </div>
                <div className="flex justify-center items-center text-xl">
                    <span className="font-bold">About Us</span>

                </div>
              </div>
              

                </div>
                


            </div>

        
    )

}
export default Header;