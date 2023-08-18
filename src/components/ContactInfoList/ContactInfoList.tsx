import React from 'react';
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
} from './ContactInfoList.styled';
import SectionContainer from '../SectionContainer/SectionContainer';
import contactsImg from '../../img/contacts-img.jpg';

const ContactInfoList: React.FC = () => {
  return (
    <SectionStyled>
      <SectionContainer>
        <Title>Contact us</Title>
      </SectionContainer>
      <BackgroundStyled>
        <SectionContainer>
          <ImgContainer>
            <Img src={contactsImg} alt="" />
          </ImgContainer>

          <ContactInfoListStyled>
            <ContactInfoItem>
              <MdLocationOn size={60} color="#c3a069" />

              <h3>Address</h3>
              <p>
                ul. Kościelnicka 29,
                <br /> 99-210 Uniejów
              </p>
            </ContactInfoItem>

            <ContactInfoItem>
              <BsTelephoneFill size={60} color="#c3a069" />
              <h3>Call today</h3>
              <p>+48 777 777 777</p>
            </ContactInfoItem>
            <ContactInfoItem>
              <MdEmail size={60} color="#c3a069" />
              <h3>Email</h3>
              <p>biuro@ajserwis.com</p>
            </ContactInfoItem>
            <ContactInfoItem>
              <BsFillClockFill size={60} color="#c3a069" />
              <h3>Working hours</h3>
              <p>
                Mon - Fri:
                <br /> 8:00 AM - 7:00 PM
              </p>
            </ContactInfoItem>
          </ContactInfoListStyled>
        </SectionContainer>
      </BackgroundStyled>

      <ForTablet>
        <SectionContainer>
          <ContactInfoListStyled>
            <ContactInfoItem>
              <Wrapper>
                <MdLocationOn size={60} color="#c3a069" />
              </Wrapper>
              <h3>Address</h3>
              <p>
                ul. Kościelnicka 29,
                <br /> 99-210 Uniejów
              </p>
            </ContactInfoItem>
            <ContactInfoItem>
              <Wrapper>
                <BsTelephoneFill size={60} color="#c3a069" />
              </Wrapper>
              <h3>Call today</h3>
              <p>+48 777 777 777</p>
            </ContactInfoItem>
            <ContactInfoItem>
              <Wrapper>
                <MdEmail size={60} color="#c3a069" />
              </Wrapper>
              <h3>Email</h3>
              <p>biuro@ajserwis.com</p>
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
