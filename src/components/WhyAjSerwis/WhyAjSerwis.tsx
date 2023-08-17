import SectionContainer from '../SectionContainer/SectionContainer';
import BenefitsList from './BenefitsList/BenefitsList';
import { StyledWhyAjSection } from './WhyAjSerwis.styled';

const WhyAjSerwis: React.FC = () => {
  return (
    <StyledWhyAjSection>
      <SectionContainer>
        <BenefitsList />
      </SectionContainer>
    </StyledWhyAjSection>
  );
};

export default WhyAjSerwis;
