import Heading from "../components/Heading";
import Intro from "../components/Intro";
import MotionWrapper from "../components/MotionWrapper";

const AboutMe = () => {
  return (
    <div
      className="xl:px-28 md:px-20 lg:px-16 px-4 md:pt-24 pt-4 pb-16 md:pb-28 text-center lg:text-left"
      id="about-me"
    >
      <MotionWrapper>
        <Heading head="About Me" subhead="Know Me More" />
      </MotionWrapper>
      <div className="lg:flex items-center gap-40">
        <MotionWrapper className="mt-10">
          <div className="text-4xl">
            <h3>
              Hi, I'm{" "}
              <span className="font-bold underline underline-offset-[12px] decoration-[#f5df4e]">
                Ajay Tiwari
              </span>
            </h3>
          </div>
          <div className="mt-6 text-xl leading-loose">
            <p>
              I'm a react developer with a passion for software development on
              web platform. I enjoy developing simple, clean and slick webapps
              and websites that provide real value to the end user. The number
              of clients have procured exceptional results while working with
              me. Delivering work within time and budget which meets client's
              requirements is my moto.
            </p>
          </div>
        </MotionWrapper>
        <MotionWrapper className="lg:pr-12 mt-8 lg:mt-0">
          <div className="flex lg:block justify-center">
            <div className="bg-[#f5df4e] lg:px-12 lg:py-16 md:px-24 md:py-20 px-12 py-10 rounded-full relative">
              <span className="invisible">G</span>
              <div className="md:text-9xl text-6xl flex justify-center font-bold">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <span className="text-gray-600">3+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-3">
            <span className="text-3xl">
              Years of <span className="font-bold">Experience</span>
            </span>
          </div>
        </MotionWrapper>
      </div>
      <MotionWrapper className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10">
        <Intro introHead="Name:" introValue="Ajay Tiwari" />
        <Intro
          introHead="Email:"
          introValue="ajax42399@gmail.com"
          emailClass="underline"
        />
        <Intro introHead="Date of birth:" introValue="05 December, 1999" />
        <Intro introHead="From:" introValue="Sunwal-13, Nawalparasi" />
      </MotionWrapper>
    </div>
  );
};

export default AboutMe;
