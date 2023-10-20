import { LiaBarsSolid } from "react-icons/lia";
import { FaPhone } from "react-icons/fa";
import { BsArrowDownCircle, BsGithub, BsInstagram } from "react-icons/bs";
import { BiLogoUpwork } from "react-icons/bi";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import webDev from "../assets/web-developer.jpg";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-scroll";
import { Fragment } from "react";
import { useContext } from "react";
import DetailPage from "../context/DetailPageProvider";

const linkOptions = [
  { option: "Home", link: "home" },
  { option: "About Me", link: "about-me" },
  { option: "What I Do", link: "what-i-do" },
  { option: "Resume", link: "resume" },
  { option: "Portfolio", link: "myportfolio" },
  { option: "FAQ", link: "faq" },
  { option: "Client Speak", link: "client-speak" },
  { option: "Contact Me", link: "contact-me" },
];

export const ToogleBar = () => {
  const { cancelBarHandler } = useContext(DetailPage);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 bottom-0 right-0 text-center bg-black/95 z-50"
    >
      <div className="text-3xl font-bold text-[#f5df4e] absolute xl:right-28 md:right-20 lg:right-16 right-4 top-4">
        <button onClick={cancelBarHandler}>
          <RxCross1 />
        </button>
      </div>
      <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <motion.div
          className="text-2xl font-bold text-white"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ y: { duration: 0.2 } }}
        >
          <div>
            {linkOptions.map((link, index) => {
              return (
                <Link
                  to={link.link}
                  key={index}
                  smooth={true}
                  onClick={cancelBarHandler}
                  className="cursor-pointer"
                  activeClass="text-yellow-800"
                >
                  <div className="py-2">{link.option}</div>
                </Link>
              );
            })}
          </div>
          <div className="flex gap-5 text-3xl items-center mt-12">
            <a
              href="https://www.facebook.com/ajay.tewary.35/"
              target="_blank"
              rel="noreferrer"
            >
              <RiFacebookCircleFill />
            </a>
            <a
              href="https://www.instagram.com/_ajay358/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              href="https://github.com/BronteBlaze"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~010655ed7e61b07c25"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoUpwork />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const LandHome = ({ offSet }) => {
  const smallMobileDevice = useMediaQuery({ minWidth: 200, maxWidth: 400 });
  const mediumMobileDevice = useMediaQuery({ minWidth: 401 });
  const { showBar, showBarHandler } = useContext(DetailPage);

  const variants = {
    initial: { y: -100 },
    animate: { y: 0 },
  };

  return (
    <Fragment>
      {showBar && <ToogleBar />}
      <div className="bg-[#f5df4e] lg:h-screen" id="home">
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className={`${
            !smallMobileDevice ? "flex" : ""
          } items-center justify-between text-gray-800 xl:px-28 md:px-20 lg:px-16 py-4 px-4 fixed w-full ${
            !showBar && "z-50"
          } ${offSet > 0 ? "bg-white border-b" : ""}`}
        >
          <div className="uppercase text-4xl tracking-widest font-semibold">
            <h2>Ajay</h2>
          </div>
          <div
            className={`${
              smallMobileDevice ? "mt-3" : ""
            } flex items-center justify-between`}
          >
            <div className="flex items-center">
              <span className="text-lg">
                <FaPhone />
              </span>
              <span className="font-bold tracking-wider px-2">
                +977-9804439389
              </span>
            </div>
            <span className="text-4xl pl-6">
              <button onClick={showBarHandler}>
                <LiaBarsSolid />
              </button>
            </span>
          </div>
        </motion.div>

        <div
          className={`lg:hidden ${
            mediumMobileDevice ? "pt-24" : "pt-32"
          } flex justify-center px-6`}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              scale: { duration: 0.5 },
            }}
            src={webDev}
            alt="ajay"
            className="rounded-full outline outline-8 outline-white border-8 border-white"
            width={480}
          />
        </div>
        <div className="lg:flex justify-between items-center lg:py-32 pb-24 xl:px-28 md:px-20 lg:px-16 text-center lg:text-left">
          <motion.div
            className="mt-8 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ opacity: { duration: 1 } }}
          >
            <div className="xl:text-5xl text-4xl font-thin text-gray-700">
              <h2>HI, I'M A REACT DEVELOPER</h2>
            </div>
            <div className="xl:text-8xl md:text-7xl text-5xl font-semibold mt-6 text-gray-800">
              <Typewriter
                options={{
                  strings: ["AJAY", "DEVELOPER"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="mt-4 text-xl">
              <p>based in Nawalparasi, Nepal.</p>
            </div>
            <div className="mt-10 md:flex items-center justify-center lg:justify-start">
              <Link to="myportfolio" smooth={true}>
                <span>
                  <button className="bg-gray-800 hover:bg-gray-700 px-12 py-3.5 text-white transition duration-300 ease-in-out">
                    View My Works
                  </button>
                </span>
              </Link>
              <Link to="contact-me" smooth={true}>
                <span className="flex items-center justify-center underline px-10 tracking-wide mt-8 md:mt-0 cursor-pointer ">
                  <span>Contact Me</span>
                  <span className="px-2 text-lg">
                    <BsArrowDownCircle />
                  </span>
                </span>
              </Link>
            </div>
          </motion.div>
          <div className="lg:block hidden xl:hidden">
            <div className="">
              <motion.img
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  scale: { duration: 0.5 },
                }}
                src={webDev}
                alt="ajay"
                className="rounded-full outline outline-8 outline-white border-8 border-white"
                width={400}
              />
            </div>
          </div>
          {
            <div className="xl:block hidden lg:hidden">
              <div className="">
                <motion.img
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    scale: { duration: 0.5 },
                  }}
                  src={webDev}
                  alt="ajay"
                  className="rounded-full outline outline-8 outline-white border-8 border-white"
                  width={450}
                />
              </div>
            </div>
          }
        </div>
        <Link to="about-me" smooth={true} className="cursor-pointer">
          <motion.div
            className="flex justify-center text-3xl"
            initial={{ y: -40 }}
            animate={{ y: -20 }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <AiOutlineArrowDown />
          </motion.div>
        </Link>
      </div>
    </Fragment>
  );
};

export default LandHome;
