import { useState } from "react";
import Heading from "../components/Heading";
import stock1 from "../assets/stock/stock1.png";
import stock2 from "../assets/stock/stock2.png";
import stock5 from "../assets/stock/stock5.png";
import stock11 from "../assets/stock/stock11.png";
import stock8 from "../assets/stock/stock8.png";
import stockGraph from "../assets/stock/stock-graph.png";
import time9 from "../assets/time/time9.png";
import time5 from "../assets/time/time5.png";
import time6 from "../assets/time/time6.png";
import time7 from "../assets/time/time7.png";
import time8 from "../assets/time/time8.png";
import time10 from "../assets/time/time10.png";
import hotel from "../assets/webpages/hotel.png";
import scaffold from "../assets/webpages/scaffold.png";
import moon from "../assets/webpages/moon.png";
import quartz from "../assets/webpages/quartz.png";
import charitee from "../assets/webpages/charitee.png";
import company from "../assets/webpages/company.png";
import ErpImage from "../components/project/ErpImage";
import ProjectImage from "../components/project/ProjectImage";
import MotionWrapper from "../components/MotionWrapper";
import { motion } from "framer-motion";
import cinema1 from "../assets/cinema/cinema1.png";
import cinema2 from "../assets/cinema/cinema2.png";
import cinema3 from "../assets/cinema/cinema3.png";
import booking1 from "../assets/booking/booking1.png";
import booking2 from "../assets/booking/booking2.png";
import booking3 from "../assets/booking/booking3.png";
import booking4 from "../assets/booking/booking4.png";
const portfolioProjects = [
  {
    name: "erp",
    title: "ERP Billing Software",
    images: [stockGraph, stock8, stock1],
    filter: "Webapps",
    swiperImages: [stock1, stock2, stock5, stock8, stock11, stockGraph],
    project_info:
      "It is a software application which helps different type of businesses like retailers, distributors, wholesales, service providers, manufacturers, small business owners to large businesses etc. to opt for digitation of their records, reduce manual paperwork and run the businesses efficiently.",
    client: "Sunil Gurung",
    tech: "ReactJS, ExpressJS, NodeJS, MongoDB",
    industry: "Hotel & Cafe",
    date: "August 10, 2023",
    url: "https://my-erp.netlify.app/",
  },
  {
    name: "timesaver",
    title: "Ecommerce software",
    images: time9,
    filter: "Webapps",
    swiperImages: [time5, time6, time7, time8, time9, time10],
    project_info:
      "This is the software for shopping products online. It is a combination of e-commerce and other components. I have done only the front-end portion",
    client: "Bibek Basnet",
    tech: "ReactJS, Django, PostGreSQL",
    industry: "Technical Shop",
    date: "September 12, 2023",
    url: "Only Front-End Complete",
  },
  {
    name: "cinema", 
    title: "Ticketing System",
    images: [cinema1,cinema2, cinema3],
    filter: "Webapps",
    swiperImages: [cinema1, cinema2],
    project_info:
      "This is the software for booking cinema ticket online",
    client: "INI Cinema",
    tech: "ReactJS, Django, MySQL",
    industry: "Cinema Hall",  
    date: "July 12, 2023",
    url: "https://inicinemas.com/",
  },
  {
    name: "cinema", 
    title: "Booking System",
    images: [booking2, booking1, booking3, booking4],
    filter: "Webapps",
    swiperImages: [booking4, booking2, booking3, booking2],
    project_info:
      "This is the software for place a booking for playing video games in gaming Lounge. It also includes private end-to-end chatting feature between user and admin",
    client: "Prasun Dahal",
    tech: "ReactJS, ExpressJS, NodeJS, MongoDB, Socket.IO",
    industry: "Gaming Lounge",  
    date: "January 21, 2024",
    url: "https://github.com/BronteBlaze/BookingPlatform",
  },
  {
    name: "charitee",
    title: "Website for Old Age Home",
    images: charitee,
    filter: "Websites",
    swiperImages: [charitee],
    project_info:
      "This is the website I made for old age home to expect some donations for it through online advertisement",
    client: "Sudip Parajuli",
    tech: "HTML, CSS, JavaScript",
    industry: "Old Age Home",
    date: "September 2, 2023",
    url: "https://charitee.netlify.app/",
    optional_url: "https://cmsa.org.np/",
  },
  {
    name: "scaffold",
    title: "Modern Web template",
    images: scaffold,
    filter: "Websites",
    swiperImages: [scaffold],
    project_info:
      "This is a template design for creating a website for IT Company.",
    client: "Roshan Khanal",
    tech: "HTML, CSS, JavaScript",
    industry: "IT Company",
    date: "October 03, 2023",
    url: "https://scaffoldui.netlify.app/",
  },
  {
    name: "quartz",
    title: "IT Company Website",
    images: quartz,
    filter: "Websites",
    swiperImages: [quartz],
    project_info:
      "This is the official website for Quartz Technology Pvt. Ltd. situated at Narayanghat, Chitwan",
    client: "Aayush Kandel",
    tech: "ReactJS",
    industry: "Software Company",
    date: "September 28, 2023",
    url: "https://quartz-technology.com.np/",
  },
  {
    name: "moonstar",
    title: "Hotel Website",
    images: moon,
    filter: "Websites",
    swiperImages: [moon],
    project_info:
      "This is the website for a hotel called Hotel Moonstar situated at Gaindakot, Nawalpur for simply seeking for a location and contact",
    client: "Abin Dhital",
    tech: "HTMl, CSS, JavaScript",
    industry: "Hotel & Cafe",
    date: "August 22, 2023",
    url: "http://www.hotelmoonstar.com/",
  },
  {
    name: "company",
    title: "Modern Web Template",
    images: company,
    filter: "Websites",
    swiperImages: [company],
    project_info: "This is the template design for IT Company.",
    client: "[Just a template]",
    tech: "ReactJS",
    industry: "IT Company",
    date: "September 17, 2023",
    url: "https://www.templatemonster.com/website-templates/techvio-it-solutions-amp-business-services-website-template-187467.html",
  },
  {
    name: "hotel",
    images: hotel,
    title: "Hotel Web Template",
    filter: "Websites",
    swiperImages: [hotel],
    project_info: "A template design made for a hotel",
    client: "[Just a template]",
    tech: "HTMl, CSS, JavaScript",
    industry: "Hotel",
    date: "July 29, 2023",
    url: "https://demo-hotel-web.netlify.app/",
  },
];

const MyPortfolio = () => {
  const allOptions = ["All", "Websites", "WebApps"];
  const [showOption, setShowOption] = useState({
    All: true,
    Websites: false,
    WebApps: false,
  });

  const showOptionHandler = (event) => {
    const opt = event.target.textContent;
    if (opt === "All") {
      setShowOption({ All: true, Websites: false, WebApps: false });
    } else if (opt === "Websites") {
      setShowOption({ All: false, Websites: true, WebApps: false });
    } else if (opt === "WebApps") {
      setShowOption({ All: false, Websites: false, WebApps: true });
    }
  };

  return (
    <div
      className="xl:px-28 md:px-20 lg:px-16 md:pt-24 md:pb-28 px-4 pt-4 pb-16 bg-gray-50"
      id="myportfolio"
    >
      <MotionWrapper>
        <Heading head="Portfolio" subhead="Some of my most recent projects" />
      </MotionWrapper>
      <div>
        <MotionWrapper className="flex justify-center mt-12">
          <ul className="flex">
            {allOptions.map((option, index) => {
              return (
                <li
                  className={`px-4 cursor-pointer font-medium text-lg ${
                    showOption[option] === true
                      ? "border-b-4 border-yellow-300 text-black"
                      : "text-gray-500"
                  }`}
                  key={index}
                  onClick={showOptionHandler}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </MotionWrapper>
        {showOption.All && (
          <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
            {portfolioProjects.map((project, index) => {
              return project.name === "erp" || project.name==="cinema" ? (
                <MotionWrapper key={index}>
                  <motion.div
                    initial={{ scale: 0.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ scale: { duration: 0.3 } }}
                  >
                    <ErpImage project={project} />
                  </motion.div>
                </MotionWrapper>
              ) : (
                <MotionWrapper key={index}>
                  <motion.div
                    initial={{ scale: 0.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ scale: { duration: 0.3 } }}
                  >
                    <ProjectImage project={project} />
                  </motion.div>
                </MotionWrapper>
              );
            })}
          </div>
        )}

        {showOption.Websites && (
          <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
            {portfolioProjects.map((project, index) => {
              return (
                project.filter === "Websites" && (
                  <MotionWrapper key={index}>
                    <motion.div
                      initial={{ scale: 0.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ scale: { duration: 0.3 } }}
                    >
                      <ProjectImage project={project} />
                    </motion.div>
                  </MotionWrapper>
                )
              );
            })}
          </div>
        )}
        {showOption.WebApps && (
          <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
            {portfolioProjects.map((project, index) => {
              return (
                project.filter === "Webapps" &&
                (project.name === "erp" || project.name==="cinema" ? (
                  <MotionWrapper key={index}>
                    <motion.div
                      initial={{ scale: 0.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ scale: { duration: 0.3 } }}
                    >
                      <ErpImage project={project} />
                    </motion.div>
                  </MotionWrapper>
                ) : (
                  <MotionWrapper key={index}>
                    <motion.div
                      initial={{ scale: 0.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ scale: { duration: 0.3 } }}
                    >
                      <ProjectImage project={project} />
                    </motion.div>
                  </MotionWrapper>
                ))
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPortfolio;
