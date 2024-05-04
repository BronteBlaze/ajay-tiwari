import Heading from "../components/Heading";
import faq from "../assets/faq.png";
import FaqAccordion from "../components/FaqAccordion";
import MotionWrapper from "../components/MotionWrapper";

const faqs = [
  {
    quest: "Who am I?",
    ans: "I'm a passionate and enthusiastic software developer experienced in MERN Stack.",
  },
  {
    quest: "How can I help you?",
    ans: "I can assist you and your team to build and develop software designs with my dedication and skills.",
  },
  {
    quest: "What is my goal?",
    ans: "My main goal is to build a best software that provides a full satisfaction to the user.",
  },
  {
    quest: "What type of project have I done in a recent time?",
    ans: "I have built a gaming lounge reservation system with a private chatting feature between user and admin.",
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
