import Heading from "../components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import abin from "../assets/abin.jpg";
import sudip from "../assets/sudip.jpg";
import ayush from "../assets/ayush.png";
import MotionWrapper from "../components/MotionWrapper";

const testimonials = [
  {
    name: "Sudip Parajuli",
    title: "Founder at Bitmap IT Pvt. Ltd",
    words:
      "Ajay has done a fantastic job overall. Not only the site is to design, the code is very clean and slick. Love the way he achieved the translations portion of the site.",
    image: sudip,
  },
  {
    name: "Abin Dhital",
    title: "User from Nawalpur",
    words:
      "Ajay provided top quality, thoughtful and high impact design work with outstanding attention to detail. His communication was excellent from the outset and showed a willingness to persevere until the perfect design was achieved. Obviously passionate about the work, a true professional. Wouldn't hesitate to recommend.",
    image: abin,
  },
  {
    name: "Aayush Kandel",
    title: "Manager at Quartz Tech",
    words:
      "I have worked with Ajay on two complex projects and in both cases, the work was done on time, on budget, and with a high degree of professionalism.",
    image: ayush,
  },
];

const Testimonial = () => {
  return (
    <div
      className="xl:px-28 md:px-20 lg:px-16 md:py-24 px-4 pt-4 pb-16 text-center bg-neutral-400"
      id="client-speak"
    >
      <MotionWrapper>
        <Heading
          head="Client Speak"
          subhead="What Some of my Clients Say"
          headColor="text-white"
        />
      </MotionWrapper>
      <MotionWrapper className="">
        <Swiper
          modules={[Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".my-custom-pagination",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          style={{
            "--swiper-pagination-color": "#f5df4e",
            "--swiper-pagination-bullet-inactive-color": "rgba(0,0,0,0.3)",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          {testimonials.map((testimonial, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="mt-20 text-white">
                  <div className="text-xl lg:px-40 leading-loose">
                    <p>{testimonial.words}</p>
                  </div>
                  <div className="flex justify-center mt-4">
                    <img
                      src={testimonial.image}
                      alt="web-developer"
                      width={70}
                      className="rounded-full"
                    />
                  </div>
                  <div className="mt-2">
                    <div className="font-bold text-lg">
                      <h5>{testimonial.name}</h5>
                    </div>
                    <div className="text-gray-100">
                      <span>{testimonial.title}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="md:mt-12 mt-24">
            <span className="my-custom-pagination"></span>
          </div>
        </Swiper>
      </MotionWrapper>
    </div>
  );
};

export default Testimonial;
