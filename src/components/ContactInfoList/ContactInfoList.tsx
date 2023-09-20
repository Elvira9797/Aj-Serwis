import React from 'react';
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
  Title,
  ContactLink,
} from './ContactInfoList.styled';
import SectionContainer from '../SectionContainer/SectionContainer';
import contactsImg from '../../img/contacts-img.jpg';
import { Link } from 'react-scroll';

const ContactInfoList: React.FC = () => {
  const { t } = useTranslation();
  return (
    <SectionStyled>
      <SectionContainer>
        <Title>{t('contacts.contactDetails.title')}</Title>
      </SectionContainer>
      <BackgroundStyled>
        <SectionContainer>
          <ImgContainer>
            <Img src={contactsImg} alt="" />
          </ImgContainer>

          <ContactInfoListStyled>
            <ContactInfoItem>
              <Link to="contactUs" smooth={true} duration={1000}>
                <MdLocationOn size={60} color="#c3a069" />

                <h3>{t('contacts.contactDetails.address')}</h3>
                <p>
                  ul. Kościelnicka 29,
                  <br /> 99-210 Uniejów
                </p>
              </Link>
            </ContactInfoItem>

            <ContactInfoItem>
              <ContactLink href="tel:+487979931830">
                <BsTelephoneFill size={60} color="#c3a069" />
                <h3>{t('contacts.contactDetails.phone')}</h3>
                <p>+48 539 649 808</p>
              </ContactLink>
            </ContactInfoItem>

            <ContactInfoItem>
              <ContactLink href="mailto:aj.serwis.sp@gmail.com">
                <MdEmail size={60} color="#c3a069" />
                <h3>{t('contacts.contactDetails.email')}</h3>
                <p>aj.serwis.sp@gmail.com</p>
              </ContactLink>
            </ContactInfoItem>

            <ContactInfoItem>
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
          <ContactInfoListStyled>
            <ContactInfoItem>
              <Link to="contactUs" smooth={true} duration={1000}>
                <Wrapper>
                  <MdLocationOn size={60} color="#c3a069" />
                </Wrapper>
                <h3>Address</h3>
                <p>
                  ul. Kościelnicka 29,
                  <br /> 99-210 Uniejów
                </p>
              </Link>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactLink href="tel:+487979931830">
                <Wrapper>
                  <BsTelephoneFill size={60} color="#c3a069" />
                </Wrapper>
                <h3>Call today</h3>
                <p>+48 777 777 777</p>
              </ContactLink>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactLink href="mailto:biuro@ajserwis.com">
                <Wrapper>
                  <MdEmail size={60} color="#c3a069" />
                </Wrapper>
                <h3>Email</h3>
                <p>biuro@ajserwis.com</p>
              </ContactLink>
            </ContactInfoItem>
            <ContactInfoItem>
              <Wrapper>
                <BsFillClockFill size={60} color="#c3a069" />
              </Wrapper>
              <h3>Working hours</h3>
              <p>
                Mon - Fri:
                <br /> 8:00 AM - 7:00 PM
              </p>
            </ContactInfoItem>
          </ContactInfoListStyled>
        </SectionContainer>
      </ForTablet>
    </SectionStyled>
  );
};

export default ContactInfoList;
