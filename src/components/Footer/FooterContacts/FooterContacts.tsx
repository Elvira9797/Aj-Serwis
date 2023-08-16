import { FaPhone } from 'react-icons/fa';
import { ContactWraper, ContactsContainer } from './FooterContacts.styled';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';

interface FooterContactsProps {
  theme: {
    colors: {
      accentColor: string;
      lightGrey: string;
    };
  };
}

const FooterContacts: React.FC<FooterContactsProps> = props => {
  return (
    <ContactsContainer>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <BsPhoneVibrateFill
          size={36}
          style={{ color: props.theme.colors.accentColor }}
        />
        <span
          style={{
            color: props.theme.colors.lightGrey,
            fontSize: '0.6rem',
          }}
        >
          Mon-Fri from 8:00 AM to 7:00 PM.
        </span>
      </div>
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <BiMailSend
          size={36}
          style={{ color: props.theme.colors.accentColor }}
        />
        <a
          href="mailto:aj.serwis.spzoo@gmail.com"
          style={{
            color: props.theme.colors.accentColor,
            fontSize: '1rem',
          }}
        >
          aj.serwis.spzoo@gmail.com
        </a>
      </div>
    </ContactsContainer>
  );
};

export default FooterContacts;
