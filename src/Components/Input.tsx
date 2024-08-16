type InputTypes={
    handleChange:(selectedType:string,selectedValue:string)=>void
    value:string,
    title:string,
    name:string,
    color?:string
   
    
}

const Input:React.FC<InputTypes> = ({handleChange,value, title, name }) => {
    return (
      <label className="flex  gap-1 font-bold ">
        <input  type="radio" value={value} name={name} className="cursor-pointer" onClick={()=>{
            handleChange(name,value);
        }} />
        <span className="checkmark" ></span>
        {title}
      </label>
    );
  };
  
  export default Input;
  