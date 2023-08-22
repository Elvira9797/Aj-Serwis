import {
  ContactBox,
  ContactWraper,
  ContactsContainer,
} from './ContactsDisplay.styled';

import { FaPhone } from 'react-icons/fa';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';

import { theme } from '../../common/theme';

import {
  dataContacts,
  workEmail,
  workingTime,
} from '../../common/dataContacts';

interface ContactsDisplayProps {
  displayName: 'visible' | 'none';
}

const ContactsDisplay: React.FC<ContactsDisplayProps> = ({ displayName }) => {
  return (
    <ContactsContainer>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <BsPhoneVibrateFill
          size={36}
          style={{ color: theme.colors.accentColor }}
        />
        <span
          style={{
            color: theme.colors.lightGrey,
            fontSize: '0.6rem',
          }}
        >
          {workingTime.time}
        </span>
      </div>
      <ContactBox>
        {dataContacts.map(({ name, tel }) => (
          <ContactWraper displayName={displayName} key={tel}>
            <span>{name}</span>
            <a href={`tel:${tel}`}>
              <FaPhone />
              {tel}
            </a>
          </ContactWraper>
        ))}
      </ContactBox>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <BiMailSend size={36} style={{ color: theme.colors.accentColor }} />
        <a
          href={`mailto:${workEmail}`}
          style={{
            color: theme.colors.accentColor,
            fontSize: '0.8rem',
          }}
        >
          {workEmail}
        </a>
      </div>
    </ContactsContainer>
  );
};

export default ContactsDisplay;
