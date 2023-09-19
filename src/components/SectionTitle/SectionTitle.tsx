import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';
import { Title } from './SectionTitle.styled';

interface SectionTitleProps {
  children: string;
  style?: {};
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, style }) => {
  return (
    <AnimateOnScroll>
      <Title style={style}>{children}</Title>;
    </AnimateOnScroll>
  );
};

export default SectionTitle;
