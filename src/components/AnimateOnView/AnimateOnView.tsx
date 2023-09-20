import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const titleAnimation = {
  hidden: {
    x: -50,
    // y: 20,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    // y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      ease: 'easeOut',
      duration: 0.7,
    },
  }),
};
interface IAnimateOnView {
  children: ReactNode;
}

const AnimateOnView: FC<IAnimateOnView> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      variants={titleAnimation}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnView;
