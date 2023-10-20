import { RxCross2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeadTitle from "../components/HeadTitle";
import { GrShare } from "react-icons/gr";
import { useContext } from "react";
import DetailPage from "../context/DetailPageProvider";
import { motion } from "framer-motion";

const DetailProject = ({ projectDetail, setCancelDetailClicked }) => {
  const { setShowDetailPage } = useContext(DetailPage);

  const cancelDetailProjectHandler = () => {
    setShowDetailPage({ projectDetail: [], show: false });
    setCancelDetailClicked(true);
  };

  return (
    <motion.div
      className="xl:mx-44 lg:mx-16 lg:mt-8 lg:border"
      initial={{ scale: 0.4 }}
      animate={{ scale: 1 }}
      transition={{ scale: { duration: 0.3 } }}
    >
      <div className="pt-8 pb-3">
        <div className="flex items-center justify-between lg:px-6 px-4">
          <div>
            <span className="hidden">Ajay</span>
          </div>
          <div className="text-2xl font-bold">
            <h3>{projectDetail.title}</h3>
          </div>
          <div
            className="text-3xl -mt-8 cursor-pointer"
            onClick={cancelDetailProjectHandler}
          >
            <RxCross2 />
          </div>
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 lg:p-7 mt-4 lg:mt-0">
          <div className="lg:col-span-3 px-4 md:px-20 lg:px-0">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".my-custom",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              style={{
                "--swiper-pagination-color": "#f5df4e",
                "--swiper-pagination-bullet-inactive-color": "rgba(0,0,0,0.3)",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "12px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              }}
            >
              {projectDetail.swiperImages.map((pic, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      className={`overflow-hidden border border-gray-300 ${
                        projectDetail.name === "erp" ? "" : "detail-img2"
                      }`}
                    >
                      <img src={pic} alt="project-img" />
                    </div>
                  </SwiperSlide>
                );
              })}

              <div className="mt-6 text-center">
                <span className="my-custom"></span>
              </div>
            </Swiper>
          </div>
          <div className="lg:col-span-2 px-4 md:px-20 lg:px-0 overflow-hidden">
            <div className="text-lg font-bold">
              <h4>Project Info:</h4>
            </div>
            <div className="mt-3">
              <p>{projectDetail.project_info}</p>
            </div>
            <div className="text-lg font-bold mt-6">
              <h4>Project Details:</h4>
            </div>
            <HeadTitle title="Client:" value={projectDetail.client} />
            <HeadTitle title="Technologies:" value={projectDetail.tech} />
            <HeadTitle title="Industry:" value={projectDetail.industry} />
            <HeadTitle title="Date:" value={projectDetail.date} />
            <HeadTitle
              title="URL:"
              value={projectDetail.url}
              className="bg-[#f5df4e] px-6 py-1 font-medium"
              icon={<GrShare />}
              pointer="cursor-pointer"
            ></HeadTitle>
            {projectDetail.name === "charitee" && (
              <HeadTitle
                title="Production URL:"
                value={projectDetail.optional_url}
                className="bg-[#f5df4e] px-6 py-1 font-medium"
                icon={<GrShare />}
                pointer="cursor-pointer"
              ></HeadTitle>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailProject;
