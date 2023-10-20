import {
    IoIosArrowDroprightCircle,
  } from "react-icons/io";
  import { useSwiper } from "swiper/react";
  
  const SlideNextButton = ({className}) => {
    const swiper = useSwiper();
    return (
      <button onClick={() => swiper.slideNext()} className={className}>
        <div className="text-gray-500 text-4xl">
          <IoIosArrowDroprightCircle />
        </div>
      </button>
    );
  };
  
  export default SlideNextButton;
  