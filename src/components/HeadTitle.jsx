const HeadTitle = ({ title, value, className, icon, pointer }) => {
  return (
    <div
      className={`flex items-center border-b border-gray-200 pb-3 mt-3 gap-2 ${pointer}`}
    >
      <span className="text-lg font-medium">{title}</span>
      <div className={`flex items-center ${className}`}>
        {title !== "URL:" && title !== "Production URL:" && (
          <span>{value}</span>
        )}
        {(title === "URL:" || title === "Production URL:") && (
          <a href={value} target="__blank" className="w-max">
            <button className="">
              <span>{value}</span>
            </button>
          </a>
        )}
        <span className="px-2">{icon}</span>
      </div>
    </div>
  );
};

export default HeadTitle;
