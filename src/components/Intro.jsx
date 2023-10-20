const Intro = ({ introHead, introValue, emailClass }) => {
  return (
    <div className="mt-2 md:mt-4 lg:mt-0">
      <div className="text-gray-600 font-medium">
        <h5>{introHead}</h5>
      </div>
      <div className={`font-bold text-xl md:text-lg mt-1 ${emailClass}`}>
        <h3>{introValue}</h3>
      </div>
    </div>
  );
};

export default Intro;
