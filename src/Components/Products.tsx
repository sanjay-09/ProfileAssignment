import { newProductType, ProductType } from "../product.types";
import Items from "./Items";
import SideBar from "./SideBar";

type ProdTypes={
    products:newProductType[]
}

const Products:React.FC<ProdTypes>=({products})=>{
    return(
        <div className="flex mt-10 ">
           <div className="w-[15%] ">
            <SideBar/>

           </div>
            <div className="grid  sm:grid-cols-4 grid-cols-1 gap-2 w-[85%] pr-2 container mx-auto">
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