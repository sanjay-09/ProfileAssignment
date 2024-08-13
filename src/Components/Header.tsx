import { useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { AppStore, RootState } from "../Redux/appStore";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Header = () => {

    const [showDropDown, setShowDropDown] = useState(true);
    const cart = useSelector((state: RootState) => state.productSlice.cart);
    const navigate = useNavigate();

    return (
        <div className="w-full sm:h-[60px] h-[50px] bg-blue-700 text-white fixed z-[999] top-0">
            <div className="sm:container sm:mx-auto px-8 flex justify-between pt-2 ">

                <h1 className="font-extrabold sm:text-4xl  text-xl">Profile.FYI</h1>



                <div className="flex gap-6 cursor-pointer">
                    <div className="flex justify-center items-center gap-1 text-xl" onClick={() => navigate("/cart")}>
                        <span className="font-bold">Cart</span>
                        <BsCartCheckFill /> {cart.length}

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