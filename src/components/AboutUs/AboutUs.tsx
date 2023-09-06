import { Container, ImageEl, LeftBox, RightBox, Text } from './AboutUs.styled';
import aboutUs from '../../images/aboutUs.jpg';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';

const AboutUs = () => {
  return (
    <SectionContainer>
      <Container>
        <LeftBox>
          <SectionTitle>About us</SectionTitle>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </LeftBox>
        <RightBox>
          <ImageEl src={aboutUs} alt="about us" />
        </RightBox>
      </Container>
    </SectionContainer>
  );
};

export default AboutUs;
