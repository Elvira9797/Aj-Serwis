import { Container, ImageEl, LeftBox, RightBox, Text } from './AboutUs.styled';
import aboutUs from '../../images/aboutUs.jpg';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <SectionContainer>
      <Container>
        <LeftBox>
          <SectionTitle>{t('main.aboutUs.title')}</SectionTitle>
          <Text>{t('main.aboutUs.main_text')}</Text>
          <Text style={{ marginTop: '1rem' }}>
            {t('main.aboutUs.sub_text')}
          </Text>
        </LeftBox>
        <RightBox>
          <AnimateOnScroll>
            <ImageEl src={aboutUs} alt="about us" />
          </AnimateOnScroll>
        </RightBox>
      </Container>
    </SectionContainer>
  );
};

export default AboutUs;
