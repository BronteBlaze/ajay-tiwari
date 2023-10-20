import {
    IoIosArrowDropleftCircle,
  } from "react-icons/io";
  import { useSwiper } from "swiper/react";
  
  const SlidePrevButton = () => {
    const swiper = useSwiper();
    return (
      <button onClick={() => swiper.slidePrev()}>
        <div className="text-gray-500 text-4xl">
          <IoIosArrowDropleftCircle />
        </div>
      </button>
    );
  };
  
  export default SlidePrevButton;
  