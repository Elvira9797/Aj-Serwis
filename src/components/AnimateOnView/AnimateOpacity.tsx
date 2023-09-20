import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    y: 20,
    opacity: 0,
    // scale: 0.9,
  },
  visible: {
    y: 0,
    opacity: 1,
    // scale: 1,

    transition: {
      delay: 0.15,
      ease: 'easeOut',
      duration: 0.6,
    },
  },
};
interface IAnimateOpacity {
  children: ReactNode;
}

const AnimateOpacity: FC<IAnimateOpacity> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      variants={textAnimation}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOpacity;
