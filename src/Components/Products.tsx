import { ProductType } from "../product.types";
import Items from "./Items";

type ProdTypes={
    products:ProductType[]
}

const Products:React.FC<ProdTypes>=({products})=>{
    return(
        <div className="grid  sm:grid-cols-4 grid-cols-1 gap-4 container mx-auto px-8 mt-2 ">
            {
               products.map((product)=>{
               return  <Items product={product}/>
               })
                
            }

        </div>
    )
}
export default Products;