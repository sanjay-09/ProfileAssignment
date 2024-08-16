import { useEffect, useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/appStore";
import { useNavigate } from "react-router-dom";

import data from "../db/db";
import { addData } from "../Redux/appSlice";

import HamburgerMenu from "./Hamburger";
import { newProductType } from "../product.types";

const Header = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.productSlice.cart);
    const navigate = useNavigate();

    useEffect(() => {
        changeData();
    }, [input]);

    const changeData = () => {
        const filterData = data.filter((item: newProductType) => {
            return item.title.includes(input);
        });
        console.log('filterData', filterData);
        //@ts-ignore
        dispatch(addData(filterData));
    };

    return (
        <header className="min-w-full h-[60px] sm:h-[70px] bg-blue-600 text-white fixed z-[999] top-0 shadow-md">
            <div className="flex justify-between items-center h-full px-4 sm:px-8">
                {/* Logo */}
                <h1
                    className="font-extrabold text-2xl sm:text-3xl cursor-pointer"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Profile.FYI
                </h1>

                {/* Search Input */}
                <div className="flex-1 mx-4 sm:mx-8 max-w-sm">
                    <input
                        type="text"
                        className="w-full px-2 py-1 rounded-md text-black"
                        placeholder="Enter the Product Name..."
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex gap-6 items-center">
                    <div
                        className="flex items-center gap-1 text-lg cursor-pointer"
                        onClick={() => navigate("/cart")}
                    >
                        <span className="font-bold">Cart</span>
                        <BsCartCheckFill />
                        <span>{cart.length}</span>
                    </div>
                    <div className="flex items-center text-lg cursor-pointer">
                        <span className="font-bold">Login</span>
                    </div>
                    <div className="flex items-center text-lg cursor-pointer">
                        <span className="font-bold">About Us</span>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="sm:hidden flex items-center">
                    <HamburgerMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;
