import { motion } from "framer-motion";

const MotionWrapper = (props) => {
  return (
    <motion.div
      className={props.className}
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
};

export default MotionWrapper;
