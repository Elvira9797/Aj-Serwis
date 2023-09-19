import { Title } from './SectionTitle.styled';
import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
  children: string;
  style?: {};
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, style }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['1 5', '3 1'],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      <Title style={style}>{children}</Title>
    </motion.div>
  );
};

export default SectionTitle;
