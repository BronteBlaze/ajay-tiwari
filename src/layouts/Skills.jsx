import MotionWrapper from "../components/MotionWrapper";
import SkillProgress from "../components/SkillProgress";
import myResume from "../assets/my-resume.pdf";

const mySkills = [
  {
    title: "HTML/CSS",
    percent: "95%",
    width: "w-[95%]",
  },
  {
    title: "Bootstrap",
    percent: "80%",
    width: "w-[80%]",
  },
  {
    title: "Tailwind CSS",
    percent: "90%",
    width: "w-[90%]",
  },
  {
    title: "Javascript",
    percent: "80%",
    width: "w-[80%]",
  },
  {
    title: "React JS",
    percent: "85%",
    width: "w-[85%]",
  },
  {
    title: "Node JS/Express JS/ MongoDB",
    percent: "60%",
    width: "w-[60%]",
  },
];

const Skills = () => {
  return (
    <div className="xl:px-28 md:px-20 lg:px-16 md:pb-28 md:pt-0 px-4 pt-10 pb-16 -mt-12">
      <MotionWrapper className="text-3xl font-bold">
        <h3>My Skills</h3>
      </MotionWrapper>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mt-8">
        {mySkills.map((skill, index) => {
          return (
            <MotionWrapper key={index}>
              <SkillProgress
                title={skill.title}
                percent={skill.percent}
                width={skill.width}
              />
            </MotionWrapper>
          );
        })}
      </div>
      <MotionWrapper className="text-center mt-16">
        <a
          href={myResume}
          download="Ajay Tiwari CV"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="border-2 border-black px-10 py-3 hover:bg-gray-800 hover:text-white transition duration-300 ease-in"
          >
            Download CV
          </button>
        </a>
      </MotionWrapper>
    </div>
  );
};

export default Skills;
