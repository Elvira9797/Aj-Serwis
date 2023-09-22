import { Container, ImageEl, List, Text, Title } from './AboutUs.styled';
import aboutUs from '../../images/aboutUs.jpg';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';
import { useTranslation } from 'react-i18next';
import AnimateOnView from '../AnimateOnView/AnimateOnView';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <SectionContainer>
      <Container>
        <SectionTitle>{t('main.aboutUs.title')}</SectionTitle>
        <AnimateOnScroll>
          <ImageEl src={aboutUs} alt="about us" />
        </AnimateOnScroll>
        <List>
          <AnimateOnView>
            <li>
              <Title>{t('main.aboutUs.list_titles.who_are_we')}</Title>
              <Text>{t('main.aboutUs.list_text.who_are_we_text')}</Text>
            </li>
          </AnimateOnView>
          <AnimateOnView>
            <li>
              <Title>{t('main.aboutUs.list_titles.our_goals')}</Title>
              <Text>{t('main.aboutUs.list_text.our_goals_text')}</Text>
            </li>
          </AnimateOnView>
          <AnimateOnView>
            <li>
              <Title>{t('main.aboutUs.list_titles.why_trust')}</Title>
              <Text>{t('main.aboutUs.list_text.why_trust_text')}</Text>
            </li>
          </AnimateOnView>
        </List>
      </Container>
    </SectionContainer>
  );
};

export default AboutUs;
