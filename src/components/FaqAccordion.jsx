import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Collapse } from "react-collapse";

const FaqAccordion = ({ quest, ans, index }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="border-b cursor-pointer" onClick={() => setActive(!active)}>
      <div className="flex items-start gap-1 py-4">
        <div
          className={`text-2xl transition duration-300 ${
            !active
              ? "text-neutral-400 font-medium rotate-0"
              : "rotate-180 text-gray-800 font-bold"
          }`}
        >
          <MdOutlineKeyboardArrowDown />
        </div>
        <div>
          <div
            className={`text-lg transition duration-500 ${
              !active
                ? "text-neutral-400 font-medium"
                : "text-gray-800 font-bold"
            }`}
          >
            <h3>{quest}</h3>
          </div>
          <div>
            <Collapse isOpened={active}>
              {" "}
              <div className="pt-3">
                <p>{ans}</p>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
