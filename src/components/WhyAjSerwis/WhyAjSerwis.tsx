import { useTranslation } from 'react-i18next';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import BenefitsList from './BenefitsList/BenefitsList';
import { StyledWhyAjSection } from './WhyAjSerwis.styled';

const WhyAjSerwis: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledWhyAjSection>
      <SectionContainer>
        <SectionTitle>{t('main.whyAj.title')}</SectionTitle>
        <p style={{ marginBottom: '1rem' }}>{t('main.aboutUs.sub_text')}</p>
        <BenefitsList />
      </SectionContainer>
    </StyledWhyAjSection>
  );
};

export default WhyAjSerwis;
