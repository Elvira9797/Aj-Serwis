import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import BenefitsList from './BenefitsList/BenefitsList';
import { StyledWhyAjSection } from './WhyAjSerwis.styled';

const WhyAjSerwis: React.FC = () => {
  return (
    <StyledWhyAjSection>
      <SectionContainer>
        <SectionTitle> Why AJ Serwis</SectionTitle>
        <BenefitsList />
      </SectionContainer>
    </StyledWhyAjSection>
  );
};

export default WhyAjSerwis;
