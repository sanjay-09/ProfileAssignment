import { PaginationType } from "../product.types";
const Pagination:React.FC<PaginationType>=({page,handleChange})=>{

    const handleClick=(pageIndex:number)=>{
        if(page!==pageIndex){
            handleChange(pageIndex);

        }

    }
    return(
        <div className="flex justify-center gap-1 mb-4">
            {
                page>1 && <span className="cursor-pointer  font-bold">{"<"}</span>
            }
            {
                [...Array(10)].map((_,i)=>{
                    return <span className=" cursor-pointer border border-black px-2 rounded-full" onClick={()=>{
                        handleClick(i+1);
                    }}>{i+1}</span>

                })
            }
           {
            page<10 &&  <span className="cursor-pointer font-bold">{">"}</span>
           }

        </div>
    )
}
export default Pagination;