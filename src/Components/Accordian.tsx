import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
type menu={
    title:string,
    src:string

}
type AccordianType={   
    menu:menu
    show:Boolean
    onChange:(value:number)=>void
    index:number
}
const Accordian:React.FC<AccordianType>=({menu,show,onChange,index})=>{
   
    return(
       <div className="border-b-[0.5px] border-gray-300 shadow-md py-2 text-white">
         <div className="flex justify-between items-center text-white cursor-pointer px-2">
            <h1 className="text-xl font-bold">{menu.title}</h1>
            <FaAngleDown onClick={()=>{
                onChange(index);
            }}  />
 


        </div>
        {
            show && <div className="flex gap-2 items-center px-2">
            <input type="checkbox" className="text-xl"/>
            <span className="font-bold">Item1</span>
            
        </div>
        }
        
       </div>
    )
}
export default Accordian;