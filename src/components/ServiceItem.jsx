const ServiceItem = ({ icon, service, serviceText }) => {
  return (
    <div className="">
      <div className="text-center">
        <div className="text-[#f5df4e] md:text-6xl text-4xl flex justify-center">
          {icon}
        </div>
        <div className="font-bold text-2xl mt-4">
          <h3>{service}</h3>
        </div>
        <div className="mt-3 text-gray-500 md:px-6 leading-7">
          <p>{serviceText}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
