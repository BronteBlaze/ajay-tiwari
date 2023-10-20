import Heading from "../components/Heading";
import faq from "../assets/faq.png";
import FaqAccordion from "../components/FaqAccordion";
import MotionWrapper from "../components/MotionWrapper";

const faqs = [
  {
    quest: "Who am I?",
    ans: "I'm a passionate and enthusiastic web developer experienced in a react framework.",
  },
  {
    quest: "How can I help you?",
    ans: "I can assist you and your team to build and develop software designs with my dedication and skills.",
  },
  {
    quest: "What is my goal?",
    ans: "My goal is to work as a MERN Stack Developer in the upcoming days.",
  },
  {
    quest: "Can I work in Back-End?",
    ans: "Yes, I have a basic knowledge in NodeJS, ExpressJS and MongoDB, which I can use to assist the senior level backend developer in a project.",
  },
];

const FAQ = () => {
  return (
    <div className="xl:px-28 md:px-20 lg:px-16 md:py-24 px-4 py-16" id="faq">
      <div className="lg:hidden flex justify-center">
        <img src={faq} alt="ajay-faq" width={450} />
      </div>
      <MotionWrapper>
        <Heading
          head="FAQ"
          subhead="Have any questions?"
          textAlign="lg:text-left text-center"
        />
      </MotionWrapper>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10">
        <div className="mt-6">
          {faqs.map((faq, index) => {
            return (
              <MotionWrapper key={index}>
                <FaqAccordion index={index} quest={faq.quest} ans={faq.ans} />
              </MotionWrapper>
            );
          })}
        </div>
        <MotionWrapper className="justify-self-end place-self-center md:-mt-20 lg:-mt-28 hidden lg:block">
          <img src={faq} alt="ajay-faq" width={450} />
        </MotionWrapper>
      </div>
    </div>
  );
};

export default FAQ;
