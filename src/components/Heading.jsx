const Heading = ({ head, subhead, textAlign, headColor }) => {
  return (
    <div className="mt-12 lg:mt-0">
      <div className={textAlign ? textAlign : `text-center`}>
        <div className="bg-[#f5df4e] inline-block px-3">
          <h5>{head}</h5>
        </div>
        <div
          className={`text-4xl font-bold text-gray-800 mt-3 ${
            headColor ? headColor : ""
          }`}
        >
          <h2>{subhead}</h2>
        </div>
      </div>
    </div>
  );
};

export default Heading;
