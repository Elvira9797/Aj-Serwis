import AnimateOnView from '../AnimateOnView/AnimateOnView';
import { Title } from './SectionTitle.styled';

interface SectionTitleProps {
  children: string;
  style?: {};
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, style }) => {
  return (
    <AnimateOnView>
      <Title style={style}>{children}</Title>
    </AnimateOnView>
  );
};

export default SectionTitle;
