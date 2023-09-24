import {
  ContactBox,
  ContactPhone,
  ContactWraper,
  ContactsContainer,
} from './ContactsDisplay.styled';

import { FaPhone } from 'react-icons/fa';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';

import { theme } from '../../common/theme';

import { useTranslation } from 'react-i18next';

interface ContactsDisplayProps {
  displayName: 'visible' | 'none';
}

const ContactsDisplay: React.FC<ContactsDisplayProps> = ({ displayName }) => {
  const { t } = useTranslation();

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
          {t('info.workingTime')}
        </span>
      </div>
      <ContactBox>
        <ContactWraper displayName={displayName}>
          <span>{t('info.namePhoneContact')}</span>
          <ContactPhone
            href="https://wa.me/48539649808"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhone />
            {t('info.tel')}
          </ContactPhone>
        </ContactWraper>
      </ContactBox>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <BiMailSend size={36} style={{ color: theme.colors.accentColor }} />
        <a
          href={`mailto:${t('info.email')}`}
          style={{
            color: theme.colors.accentColor,
            fontSize: '0.8rem',
          }}
        >
          {t('info.email')}
        </a>
      </div>
    </ContactsContainer>
  );
};

export default ContactsDisplay;
