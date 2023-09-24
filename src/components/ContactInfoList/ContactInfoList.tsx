import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsTelephoneFill, BsFillClockFill } from 'react-icons/bs';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import {
  SectionStyled,
  ContactInfoListStyled,
  ContactInfoItem,
  BackgroundStyled,
  ImgContainer,
  Img,
  ForTablet,
  Wrapper,
  ContactLink,
} from './ContactInfoList.styled';
import SectionContainer from '../SectionContainer/SectionContainer';
import contactsImg from '../../img/contacts-img.jpg';
import { Link } from 'react-scroll';
import SectionTitle from '../SectionTitle/SectionTitle';

const ContactInfoList: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [languageKey, setLanguageKey] = useState(i18n.resolvedLanguage);

  useEffect(() => {
    setLanguageKey(i18n.resolvedLanguage);
  }, [i18n.resolvedLanguage, t]);

  const listAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        ease: 'easeOut',
        duration: 0.4,
      },
    }),
  };

  return (
    <SectionStyled>
      <SectionContainer>
        <SectionTitle style={{ alignItems: 'flex-end' }}>
          {t('contacts.contactDetails.title')}
        </SectionTitle>
      </SectionContainer>
      <BackgroundStyled>
        <SectionContainer>
          <ImgContainer>
            <Img src={contactsImg} alt="" />
          </ImgContainer>

          <ContactInfoListStyled
            key={languageKey}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <ContactInfoItem variants={listAnimation} custom={1}>
              <Link to="contactUs" smooth={true} duration={1000}>
                <MdLocationOn size={60} color="#c3a069" />

                <h3>{t('contacts.contactDetails.address')}</h3>
                <p>
                  ul. Targowa 15,
                  <br /> 99-200 Poddębice
                </p>
              </Link>
            </ContactInfoItem>

            <ContactInfoItem variants={listAnimation} custom={2}>
              <ContactLink
                href="https://wa.me/+48539649808"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTelephoneFill size={60} color="#c3a069" />
                <h3>{t('contacts.contactDetails.phone')}</h3>
                <p>+48 539 649 808</p>
              </ContactLink>
            </ContactInfoItem>

            <ContactInfoItem variants={listAnimation} custom={3}>
              <ContactLink href="mailto:aj.serwis.sp@gmail.com">
                <MdEmail size={60} color="#c3a069" />
                <h3>{t('contacts.contactDetails.email')}</h3>
                <p>aj.serwis.sp@gmail.com</p>
              </ContactLink>
            </ContactInfoItem>

            <ContactInfoItem variants={listAnimation} custom={4}>
              <BsFillClockFill size={60} color="#c3a069" />
              <h3>{t('contacts.contactDetails.hours')}</h3>
              <p>
                {t('contacts.contactDetails.days')}
                <br /> {t('contacts.contactDetails.time')}
              </p>
            </ContactInfoItem>
          </ContactInfoListStyled>
        </SectionContainer>
      </BackgroundStyled>

      <ForTablet>
        <SectionContainer>
          <ContactInfoListStyled
            key={languageKey}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <ContactInfoItem variants={listAnimation} custom={1}>
              <Link to="contactUs" smooth={true} duration={1000}>
                <Wrapper>
                  <MdLocationOn size={60} color="#c3a069" />
                </Wrapper>
                <h3>{t('contacts.contactDetails.address')}</h3>
                <p>
                  ul. Targowa 15,
                  <br /> 99-200 Poddębice
                </p>
              </Link>
            </ContactInfoItem>
            <ContactInfoItem variants={listAnimation} custom={2}>
              <ContactLink
                href="https://wa.me/+48539649808"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Wrapper>
                  <BsTelephoneFill size={60} color="#c3a069" />
                </Wrapper>
                <h3>{t('contacts.contactDetails.phone')}</h3>
                <p>+48 539 649 808</p>
              </ContactLink>
            </ContactInfoItem>
            <ContactInfoItem variants={listAnimation} custom={3}>
              <ContactLink href="mailto:biuro@ajserwis.com">
                <Wrapper>
                  <MdEmail size={60} color="#c3a069" />
                </Wrapper>
                <h3>{t('contacts.contactDetails.email')}</h3>
                <p>aj.serwis.sp@gmail.com</p>
              </ContactLink>
            </ContactInfoItem>
            <ContactInfoItem variants={listAnimation} custom={4}>
              <Wrapper>
                <BsFillClockFill size={60} color="#c3a069" />
              </Wrapper>
              <h3>{t('contacts.contactDetails.hours')}</h3>
              <p>
                {t('contacts.contactDetails.days')}
                <br /> {t('contacts.contactDetails.time')}
              </p>
            </ContactInfoItem>
          </ContactInfoListStyled>
        </SectionContainer>
      </ForTablet>
    </SectionStyled>
  );
};

export default ContactInfoList;
