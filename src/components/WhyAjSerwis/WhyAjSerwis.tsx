import { theme } from '../../common/theme';
import { Title } from '../ContactUs/ContactUs.styled';
import SectionContainer from '../SectionContainer/SectionContainer';
import BenefitsList from './BenefitsList/BenefitsList';
import { StyledWhyAjSection } from './WhyAjSerwis.styled';

const WhyAjSerwis: React.FC = () => {
  return (
    <StyledWhyAjSection>
      <SectionContainer>
        <Title style={{ color: `${theme.colors.primaryColor}` }}>
          Why Aj Serwis
        </Title>
        <BenefitsList />
      </SectionContainer>
    </StyledWhyAjSection>
  );
};

export default WhyAjSerwis;
