import  { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/appStore';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state: RootState) => state.productSlice.cart);
  const navigate=useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        className="block md:hidden p-2 rounded focus:outline-none"
        onClick={toggleMenu}
      >
        <div className="space-y-1">
          <FaHamburger/>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <h1
           onClick={()=>{
            navigate("/cart")
           }}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Cart - {cart.length}
          </h1>
          <h1
           
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Login
          </h1>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
