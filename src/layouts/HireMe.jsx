import { Link } from "react-scroll";
import MotionWrapper from "../components/MotionWrapper";

const HireMe = () => {
  return (
    <div className="background-mac relative text-center py-52 xl:px-28 md:px-20 lg:px-16 px-4">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/70">
        <MotionWrapper className="text-4xl text-white font-bold md:mt-36 mt-28">
          <h2>Interested in working with me?</h2>
        </MotionWrapper>
        <MotionWrapper className="mt-8">
          <Link to="contact-me" smooth={true}>
            <button
              type="button"
              className="bg-[#f5df4e] hover:bg-yellow-300 transition duration-300 ease-in px-12 py-4 font-medium"
            >
              Hire Me!
            </button>
          </Link>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default HireMe;
