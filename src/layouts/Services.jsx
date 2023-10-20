import Heading from "../components/Heading";
import { FaPaintbrush } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import ServiceItem from "../components/ServiceItem";
import MotionWrapper from "../components/MotionWrapper";

const allServices = [
  {
    icon: <FaPaintbrush />,
    service: "Website Development",
    serviceText:
      "I can develop the code version of competitive UI/UX of website very easily with providing best refactored code",
  },
  {
    icon: <HiMiniComputerDesktop />,
    service: "Responsive Design",
    serviceText:
      "I can create web pages that look best on all devices varying from small screen to big screen",
  },
  {
    icon: <FaPaintbrush />,
    service: "Software Development",
    serviceText:
      "Create or implement software designs demanded by a client or created by a design team",
  },
  {
    icon: <HiMiniComputerDesktop />,
    service: "Backend Programming",
    serviceText:
      "Can assist backend developer to write a code for server using NODE JS",
  },
  {
    icon: <FaPaintbrush />,
    service: "SEO Optimization",
    serviceText:
      "Optimize the web application to increase its visibility in any search engines like Google, Microsoft Bing etc",
  },
  {
    icon: <HiMiniComputerDesktop />,
    service: "Web Animation",
    serviceText:
      "Can implement smooth motion and animation using popular libraries like framer motion, react spring etc",
  },
];

const Services = () => {
  return (
    <div
      className="xl:px-28 md:px-20 lg:px-16 md:pt-24 md:pb-28 px-4 pb-16 pt-4 bg-gray-50"
      id="what-i-do"
    >
      <MotionWrapper>
        <Heading head="What I Do?" subhead="How I can help your next project" />
      </MotionWrapper>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 mt-16">
        {allServices.map((serv, index) => {
          return (
            <MotionWrapper key={index}>
              <ServiceItem
                icon={serv.icon}
                service={serv.service}
                serviceText={serv.serviceText}
              />
            </MotionWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
