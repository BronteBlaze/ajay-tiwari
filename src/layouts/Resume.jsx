import Heading from "../components/Heading";
import MotionWrapper from "../components/MotionWrapper";
import ResumeItem from "../components/ResumeItem";

const myEducation = [
  {
    heading: "Bachelor of Computer Application",
    companyAndTime:
      "Oxford College of Engineering and Management / 2021 - present",
    desc: "Currently studying BCA in 5th semester. 1st semester topper of pokhara university with 4.0/4.0 GPA.",
  },
  {
    heading: "10+2 Science",
    companyAndTime: "Oxford Higher Secondary School / 2017 - 2019",
    desc: "Studied science in 10+2, Physics and Math as a major subject.",
  },
];

const myExperience = [
  {
    heading: "Sr. React Developer",
    companyAndTime: "TechMonkeys Pvt. Ltd / 2022 - 2023",
    desc: "Got the position of senior react developer, worked on a project called TimeSaver Plus.",
  },
  {
    heading: "Jr. React Developer",
    companyAndTime: "Quartz Technology Pvt. Ltd / 2020 - 2022",
    desc: "Involved in a company as junior react developer and worked in different web application.",
  },
  {
    heading: "Jr. Front-End Developer",
    companyAndTime: "Bitmap IT Solution Pvt. Ltd / 2019-2020",
    desc: "Worked as a junior front-end developer for a year and developed many websites.",
  },
];

const Resume = () => {
  return (
    <div
      className="xl:px-28 md:px-20 lg:px-16 md:pt-24 md:pb-28 px-4 pt-4 pb-16"
      id="resume"
    >
      <MotionWrapper>
        <Heading head="Resume" subhead="A summary of My Resume" />
      </MotionWrapper>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-24">
        <MotionWrapper>
          <div className="text-3xl font-bold">
            <h3>My Education</h3>
          </div>
          <div className="flex mt-8">
            <div className="border-l-2 border-yellow-300">
              <span className="hidden">Ajay</span>
            </div>
            <div className="px-4">
              {myEducation.map((educ, index) => {
                return (
                  <ResumeItem
                    key={index}
                    index={index}
                    heading={educ.heading}
                    companyAndTime={educ.companyAndTime}
                    desc={educ.desc}
                  />
                );
              })}
            </div>
          </div>
        </MotionWrapper>
        <MotionWrapper>
          <div className="text-3xl font-bold mt-6 md:mt-0">
            <h3>My Experience</h3>
          </div>
          <div className="flex mt-8">
            <div className="border-l-2 border-yellow-300">
              <span className="hidden">Ajay</span>
            </div>
            <div className="px-4">
              {myExperience.map((educ, index) => {
                return (
                  <ResumeItem
                    key={index}
                    index={index}
                    heading={educ.heading}
                    companyAndTime={educ.companyAndTime}
                    desc={educ.desc}
                  />
                );
              })}
            </div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default Resume;
