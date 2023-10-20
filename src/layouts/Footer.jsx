import { RiFacebookCircleFill } from "react-icons/ri";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { BiLogoUpwork } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import MotionWrapper from "../components/MotionWrapper";
import { useForm } from "@formspree/react";
import { useState } from "react";
const Footer = () => {
  const [state, handleSubmit] = useForm("xdorykyy");
  const [showThankyou, setShowThankyou] = useState(false);
  if (state.succeeded) {
    if (showThankyou === false) {
      setShowThankyou(true);
    }
  }
  return (
    <div
      className="bg-[#f5df4e] xl:px-28 md:px-20 lg:px-16 md:py-24 px-4 py-16 relative"
      id="contact-me"
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-20 gap-16 text-gray-800">
        <MotionWrapper className="text-center lg:text-left">
          <div className="text-4xl font-bold">
            <h3>Let's get in touch</h3>
          </div>
          <div className="text-xl mt-12 leading-loose">
            <p>
              I enjoy discussing new projects and design challenges. Please
              share as much info, as possible so we can get the most out of our
              first catch-up.
            </p>
          </div>
          <div className="mt-12">
            <h4 className="font-bold text-xl">Living In:</h4>
            <div className="text-lg mt-2">Sunwal-13, Nawalparasi, Nepal</div>
          </div>
          <div className="mt-6">
            <h4 className="font-bold text-xl">Call:</h4>
            <div className="text-lg mt-2">+977-9804439389</div>
          </div>
          <div className="flex gap-5 items-center justify-center lg:justify-start text-3xl mt-12 text-gray-600">
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
        </MotionWrapper>
        <form onSubmit={handleSubmit}>
          <MotionWrapper>
            <div className="text-4xl font-bold text-center lg:text-left">
              <h3>Estimate your Project?</h3>
            </div>
            <div className="mt-12">
              <div>
                <div>
                  <label htmlFor="name">What is Your Name:</label>
                </div>
                <div className="mt-3">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="border-b-2 border-[rgba(0,0,0,0.2)] bg-transparent w-full h-9"
                    required
                  ></input>
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label htmlFor="email">Your Email Address:</label>
                </div>
                <div className="mt-3">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="border-b-2 border-[rgba(0,0,0,0.2)] bg-transparent w-full h-9"
                    required
                  ></input>
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label htmlFor="help">How can I Help you?:</label>
                </div>
                <div className="mt-3">
                  <textarea
                    id="help"
                    name="message"
                    className="bg-transparent border-b-2 border-[rgba(0,0,0,0.2)] w-full h-36"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center lg:justify-start">
              <button
                type="submit"
                className="flex gap-2 items-center bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in px-12 py-3.5 text-white"
              >
                <span>Send</span>
                <span className="text-lg">
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
            {showThankyou && (
              <div className="mt-3 text-gray-700 font-medium">
                <p>Thankyou for contacting me!</p>
              </div>
            )}
          </MotionWrapper>
        </form>
      </div>
    </div>
  );
};

export default Footer;
