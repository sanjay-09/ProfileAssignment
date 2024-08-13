import { useEffect, useState } from "react";
import Products from "./Products";
import Pagination from "./Pagination";
import { ProductType } from "../product.types";

const Body=()=>{
    const [products,setProducts]=useState<ProductType[]>([]);
    const [page,setPage]=useState(1);


    const handleChange=(pageIndex:number)=>{
        setPage(pageIndex)
    }

    useEffect(()=>{
        fetchData();

    },[page]);



    const fetchData=async()=>{
        const responseObject=await fetch(`https://dummyjson.com/products?limit=10&skip=${(page-1)*10}`);
        if(!responseObject.ok){
            throw new Error('Not able to fetch the data');

        }
        const responseData=await responseObject.json();
        setProducts(responseData.products)

    }

    return(
        <div>

            <div>
                {
                    products.length>0 && <Products products={products}/>
                }
            </div>

            <div className="mt-4 mb-4">
                {
                    products.length>0 && <Pagination page={page} handleChange={handleChange}/>
                }
            </div>

    
        </div>
    )
}
export default Body;