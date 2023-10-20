const ResumeItem = ({ heading, companyAndTime, desc, index }) => {
  return (
    <div className="border-b pb-7">
      <div className={`text-xl font-medium ${index === 0 ? "" : "mt-7"}`}>
        <h4>{heading}</h4>
      </div>
      <div className="mt-2 text-lg">
        <p>{companyAndTime}</p>
      </div>
      <div className="mt-2 text-gray-500 leading-7">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
