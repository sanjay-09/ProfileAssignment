import { newProductType } from "../product.types";
import Items from "./Items";
import SideBar from "./SideBar";
import Sliders from "./Slider";

type ProdTypes={
    products:newProductType[]
}

const Products:React.FC<ProdTypes>=({products})=>{
    return(
        <div className="flex sm:mt-10 mt-5 gap-2 sm:flex-row flex-col">
           <div className="sm:w-[15%] w-full ">
         <div className="sm:block hidden">
         <SideBar />
         
         </div>
         <div className="sm:hidden block">
            <Sliders/>
         </div>

           </div>
            <div className="grid  sm:grid-cols-4 grid-cols-1 gap-2 sm:w-[85%]  sm:px-0 pl-2 container mx-auto">
            {
               products.map((product)=>{
               return  <Items product={product}/>
               })
                
            }

        </div>
        </div>
    )
}
export default Products;