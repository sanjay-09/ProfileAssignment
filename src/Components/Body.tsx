
import Products from "./Products";

import { useSelector } from "react-redux";
import { RootState } from "../Redux/appStore";
import { randProduct } from '@ngneat/falso';

const Body=()=>{

    const products = useSelector((state: RootState) => state.productSlice.dataFiltered);
    console.log(products);
    
console.log("rand",randProduct(
    {
        length:50
    }
));
   

    return(
        <div className="">

            <div>
                {
                    products.length>0 && <Products products={products}/>
                }
            </div>

        

    
        </div>
    )
}
export default Body;