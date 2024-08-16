import Input from "../Components/Input";
type PriceType={
    handleChange:(selectedType:string,selectedValue:string)=>void
}


const Price:React.FC<PriceType> = ({handleChange}) => {
  return (
    <>
      <div className="border-b-[0.5px] border-gray-400 py-2">
        <h2 className="text-center text-xl font-bold">Price</h2>

        <label className="flex  gap-1 mb-1 font-bold">
          <input  type="radio" value="" name="price" onClick={()=>{
            handleChange('price',"all");
          }} />
          <span className="checkmark"></span>All
        </label>

       <div className="flex flex-col gap-2">
       <Input
          handleChange={handleChange}
          value="50"
          title="$0 - 50"
          name="price"
        />
         <Input
          handleChange={handleChange}
          value="100"
          title="$50 - 100"
          name="price"
        />
         <Input
          handleChange={handleChange}
          value="150"
          title="$100 - 150"
          name="price"
        />
         <Input
          handleChange={handleChange}
          value="200"
          title="$150 - 200"
          name="price"
        />

       </div>

      </div>
    </>
  );
};

export default Price;
