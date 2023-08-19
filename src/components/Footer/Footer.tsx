import ContactsDisplay from '../ContactsDisplay/ContactsDisplay';
import Navigation from '../Navigation/Navigation';
import FooterBottomBar from './FooterBottomBar/FooterBottomBar';
import FooterInfoBlock from './FooterInfoBlock/FooterInfoBlock';

import { Container, StyledFooter } from './Footer.styled';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterInfoBlock />
        <Navigation flexDirection="column" />
        <ContactsDisplay displayName="visible" />
      </Container>
      <FooterBottomBar />
    </StyledFooter>
  );
};

export default Footer;
