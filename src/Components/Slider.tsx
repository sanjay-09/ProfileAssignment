import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Price from "../SideBar/Price";
import data from "../db/db";
import Color from "../SideBar/Color";
import Category from "../SideBar/Category";
import { useDispatch } from "react-redux";
import { addData } from "../Redux/appSlice";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();

  const handleChange = (selectedType: string, selectedValue: string) => {
    if (selectedValue === 'all') {
      //@ts-ignore
      dispatch(addData(data));
      return;
    }
    if (selectedType === 'price') {
      let secValue = parseInt(selectedValue);
      const lowerLimit = secValue - 50;
      const filterData = data.filter((item) => {
        return parseInt(item.newPrice) <= secValue && parseInt(item.newPrice) >= lowerLimit;
      });
      //@ts-ignore
      dispatch(addData(filterData));
    } else if (selectedType === 'color') {
      const filterData = data.filter((item) => {
        return item.color.includes(selectedValue);
      });
      //@ts-ignore
      dispatch(addData(filterData));
    } else if (selectedType === 'category') {
      const filterData = data.filter((item) => {
        return item.category.includes(selectedValue);
      });
      //@ts-ignore
      dispatch(addData(filterData));
    }
  }

  return (
    <div className="slider-container bg-blue-400 text-white p-2 rounded-lg">
      <Slider {...settings}>
        <div className="mr-2 font-thin">
          <Price handleChange={handleChange} />
        </div>
        <div>
          <Color handleChange={handleChange} />
        </div>
        <div>
          <Category handleChange={handleChange} />
        </div>
      </Slider>
    </div>
  )
}

export default Sliders;