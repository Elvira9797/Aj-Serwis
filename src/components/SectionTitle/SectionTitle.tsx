import { Title } from './SectionTitle.styled';

interface SectionTitleProps {
  children: string;
  style?: {};
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, style }) => {
  return <Title style={style}>{children}</Title>;
};

export default SectionTitle;
