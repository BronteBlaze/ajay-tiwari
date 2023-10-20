import ProgressBar from "@ramonak/react-progress-bar";

const SkillProgress = ({ title, percent, width }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="font-medium">
          <h3>{title}</h3>
        </div>
        <div>
          <span>{percent}</span>
        </div>
      </div>
      <div className="mt-3">
        <ProgressBar
          completed={percent}
          barContainerClassName="h-2 bg-gray-300 rounded-lg"
          completedClassName={`h-2 bg-[#f5df4e] rounded-lg ${width}`}
          labelClassName="hidden"
        />
      </div>
    </div>
  );
};

export default SkillProgress;
