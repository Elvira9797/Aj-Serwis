import { FaPhone } from 'react-icons/fa';
import { ContactWraper, ContactsContainer } from './FooterContacts.styled';
import Soclink from '../../Soclink/Soclink';

const FooterContacts: React.FC = () => {
  return (
    <ContactsContainer>
      <h4 id="contacts">CONTACTS</h4>
      <div>
        <ContactWraper>
          <span>MOISEIKO VASYL</span>{' '}
          <a href="tel:+48539649808">
            <FaPhone /> +48 539 649 808
          </a>
        </ContactWraper>
        <ContactWraper>
          <span>KORNACKI JAKUB</span>{' '}
          <a href="tel:+48797993183">
            <FaPhone /> +48 797 993 183
          </a>
        </ContactWraper>
        <ContactWraper>
          <span>ALEKSANDER ARTEMJEW</span>{' '}
          <a href="tel:+48777777777">
            <FaPhone /> +48 777 777 777
          </a>
        </ContactWraper>
      </div>
      <Soclink iconSize={32} />
    </ContactsContainer>
  );
};

export default FooterContacts;
