import { theme } from '../../common/theme';
import { Container, StyledFooter } from './Footer.styled';
import FooterBottomBar from './FooterBottomBar/FooterBottomBar';
import FooterContacts from './FooterContacts/FooterContacts';
import FooterInfoBlock from './FooterInfoBlock/FooterInfoBlock';
import FooterNav from './FooterNav/FooterNav';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterInfoBlock />
        <FooterNav />
        <FooterContacts theme={theme} />
      </Container>
      <FooterBottomBar />
    </StyledFooter>
  );
};

export default Footer;
