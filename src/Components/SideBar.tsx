
import Price from "../SideBar/Price";
import data from "../db/db";
import { useDispatch } from "react-redux";
import { addData } from "../Redux/appSlice";

import Color from "../SideBar/Color";
import Category from "../SideBar/Category";
const SideBar = () => {
    const dispatch=useDispatch();
 
   const handleChange=(selectedType:string,selectedValue:string)=>{

    if(selectedValue==='all'){
       
            //@ts-ignore
            dispatch(addData(data));
            return;
           
        
    }
    if(selectedType==='price'){
        let secValue=parseInt(selectedValue);
     
        const lowerLimit=secValue-50;
        const filterData=data.filter((item)=>{
            return parseInt(item.newPrice)<=secValue&&parseInt(item.newPrice)>=lowerLimit;
        })
        //@ts-ignore
        
        dispatch(addData(filterData));
    }
  else  if(selectedType==='color'){
        const filterData=data.filter((item)=>{
            return item.color.includes(selectedValue);
        })
        //@ts-ignore
        dispatch(addData(filterData));
    }
    else if(selectedType==='category'){
        const filterData=data.filter((item)=>{
            return item.category.includes(selectedValue);
        })
        //@ts-ignore
        dispatch(addData(filterData));

    }
    
   }
  

  return (
    <div className="bg-blue-400 w-full text-white rounded-md ">
        <div className="flex justify-center items-center py-2 border-b-[0.5px] border-gray-100 mb-2">
            <h1 className="text-xl font-bold">Filters</h1>
        </div>
      
      <div className="mb-2 px-2 border-b-[0.5px] border-gray-300">
        <Price handleChange={handleChange}/>

      </div>
      <div className="mb-2 px-2 border-b-[0.5px] border-gray-300">
        <Color handleChange={handleChange}/>

      </div>
      <div className="mb-2 px-2 border-b-[0.5px] border-gray-300">
        <Category handleChange={handleChange}/>

      </div>
      <div className="mb-2 px-2 border-b-[0.5px] border-gray-300">
        <Category handleChange={handleChange}/>

      </div>
      
       

      
      
    </div>
  );
};
export default SideBar;
