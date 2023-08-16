import React, { ReactNode } from 'react'; // Import ReactNode type
import { Container } from './SectionContainer.styled';

interface SectionContainerProps {
  children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SectionContainer;
