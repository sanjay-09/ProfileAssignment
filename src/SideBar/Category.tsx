import React from "react";
import Input from "../Components/Input";
type PriceType={
    handleChange:(selectedType:string,selectedValue:string)=>void
}
const  Category:React.FC<PriceType>=({ handleChange })=> {
  return (
    <div className="border-b-[0.5px] border-gray-400 py-2">
      <h2 className="text-center text-xl font-bold">Category</h2>

      <div>
        <label className="flex  gap-1 mb-1 font-bold">
          <input onClick={()=>{
            handleChange('category','all');
          }} type="radio" value="" name="category" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="category"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="category"
        />
       
      </div>
    </div>
  );
}

export default Category;
