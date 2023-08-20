import React, { CSSProperties, ReactNode } from 'react'; // Import ReactNode type
import { Container } from './SectionContainer.styled';

interface SectionContainerProps {
  children: ReactNode;
  style?: CSSProperties;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  style,
}) => {
  return <Container style={style}>{children}</Container>;
};

export default SectionContainer;
