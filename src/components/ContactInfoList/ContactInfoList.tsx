import React from 'react';
import { BsTelephoneFill, BsFillClockFill } from 'react-icons/bs';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import {
  SectionStyled,
  TitleContactInfoList,
  ContactInfoListStyled,
  ContactInfoItem,
} from './ContactInfoList.styled';

const ContactInfoList = () => {
  return (
    <SectionStyled>
      <TitleContactInfoList>Connect with us</TitleContactInfoList>
      <ContactInfoListStyled>
        <ContactInfoItem>
          <BsTelephoneFill size={40} color="#c3a069" />
          <h3>Call today</h3>
          <p>+48 777 777 777</p>
        </ContactInfoItem>
        <ContactInfoItem>
          <MdLocationOn size={50} color="#c3a069" />
          <h3>Address</h3>
          <p>
            ul. Kościelnicka 29,
            <br /> 99-210 Uniejów
          </p>
        </ContactInfoItem>
        <ContactInfoItem>
          <MdEmail size={50} color="#c3a069" />
          <h3>Email</h3>
          <p>biuro@ajserwis.com</p>
        </ContactInfoItem>
        <ContactInfoItem>
          <BsFillClockFill size={45} color="#c3a069" />
          <h3>Working hours</h3>
          <p>mon - fri</p>
          <p>10:00 - 18:00</p>
        </ContactInfoItem>
      </ContactInfoListStyled>
    </SectionStyled>
  );
};

export default ContactInfoList;
