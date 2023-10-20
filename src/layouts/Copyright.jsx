import { motion } from "framer-motion";

const Copyright = () => {
  return (
    <div className="xl:px-28 md:px-10 py-16 px-4 bg-[#111418] text-white text-center lg:text-left">
      <div className="lg:flex justify-between">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            Copyright © 2023{" "}
            <span className="underline font-bold text-[#f5df4e]">Ajay</span>.
            All Rights Reserved.
          </p>
        </motion.div>
        <motion.div
          className="mt-4 lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            Designed by{" "}
            <span className="underline font-bold text-[#f5df4e]">
              Ajay Tiwari
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Copyright;
