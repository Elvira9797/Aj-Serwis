import { theme } from '../../common/theme';
import { Container, StyledFooter } from './Footer.styled';
import FooterContacts from './FooterContacts/FooterContacts';
import FooterInfoBlock from './FooterInfoBlock/FooterInfoBlock';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterInfoBlock />
        <FooterContacts theme={theme} />
      </Container>
    </StyledFooter>
  );
};

export default Footer;
