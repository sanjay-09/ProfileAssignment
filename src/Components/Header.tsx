import { useEffect, useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {  RootState } from "../Redux/appStore";
import { useNavigate } from "react-router-dom";

import data from "../db/db";
import { addData } from "../Redux/appSlice";

import HamburgerMenu from "./Hamburger";
import { newProductType } from "../product.types";

const Header = () => {

    const [input,setInput]=useState('');
    const dispatch=useDispatch();
    

    const cart = useSelector((state: RootState) => state.productSlice.cart);
    const navigate = useNavigate();

    useEffect(()=>{
       
            changeData();
        

    },[input]);

    const changeData=()=>{
        const filterData=data.filter((item:newProductType)=>{
            return item.title.includes(input) ;
        })
        console.log('filterData',filterData);
        //@ts-ignore
        dispatch(addData(filterData));
    }

    return (
        <div className="min-w-full sm:h-[60px] h-[50px] bg-blue-500 text-white fixed z-[999] top-0">
            <div className="flex justify-between pt-2 items-center sm:px-2 w-full">

                <h1 className="font-extrabold sm:text-3xl cursor-pointer" onClick={()=>{
                    navigate("/");
                }}>Profile.FYI</h1>

                <div>
                    <input type="text" className="sm:w-[300px] w-[150px] px-2 py-1 rounded-md text-black" placeholder="Enter the Product Name......" value={input} onChange={(e)=>{
                        setInput(e.target.value);
                    }}/>
                </div>



                <div className="flex gap-6 cursor-pointer sm:inline-flex hidden">
                    <div className="flex justify-center items-center gap-1 text-xl" onClick={() => navigate("/cart")}>
                        <span className="font-bold">Cart</span>
                        <BsCartCheckFill  onClick={()=>{
                            navigate("/cart")
                        }}/> {cart.length}

                    </div>
                    <div className="flex justify-center items-center text-xl">
                        <span className="font-bold">Login</span>

                    </div>
                    <div className="flex justify-center items-center text-xl">
                        <span className="font-bold">About Us</span>

                    </div>
                </div>

                <div className="sm:hidden block pr-4">
               <HamburgerMenu/>

                </div>


            </div>



        </div>


    )

}
export default Header;