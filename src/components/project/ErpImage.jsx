import { useContext } from "react";
import { useState } from "react";
import DetailPage from "../../context/DetailPageProvider";

const ErpImage = ({ project }) => {
  const pageContext = useContext(DetailPage);
  const { showDetailPageHandler } = pageContext;
  const [effect, seteffect] = useState(false);
  return (
    <div
      className="relative cursor-pointer project-img overflow-hidden border border-gray-300 image-motion"
      onMouseEnter={() => seteffect(true)}
      onMouseLeave={() => seteffect(false)}
      onClick={() => {
        showDetailPageHandler(project);
      }}
    >
      <div>
        {project.images.map((image, index) => {
          return <img key={index} src={image} alt="project-img" />;
        })}
      </div>
      {effect && (
        <div className="absolute bg-[rgba(0,0,0,0)] top-0 left-0 right-0 bottom-0 z-50">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <span className="text-white md:text-xl z-50">{project.title}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErpImage;
