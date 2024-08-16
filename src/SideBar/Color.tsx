
import Input from "../Components/Input";
type ColorType={
    handleChange:(selectedType:string,selectedValue:string)=>void
}

const Colors:React.FC<ColorType> = ({ handleChange }) => {
  return (
    <>
      <div className="border-b-[0.5px] border-gray-400 py-2">
        <h2 className="text-center text-xl font-bold">Colors</h2>
        <label className="flex  gap-1 mb-1 font-bold">
          <input  type="radio" value="" name="color" onClick={()=>{
            handleChange("color","all");
          }} />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="color"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="color"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="color"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="color"
          color="green"
        />

        
      </div>
    </>
  );
};

export default Colors;
