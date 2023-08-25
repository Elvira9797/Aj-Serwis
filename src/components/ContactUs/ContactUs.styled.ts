import styled from '@emotion/styled';
import contactUsBg from '../../img/contact-us-bg.jpg';

export const Section = styled.section`
  width: 100%;
  padding: 90px 0;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  background-image: linear-gradient(
      to top,
      rgba(6, 7, 7, 0.8),
      rgba(34, 32, 32, 0.4)
    ),
    url(${contactUsBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(6, 7, 7, 0.6),
    rgba(34, 32, 32, 0.4)
  );
  padding: 0 1rem;
`;

export const Title = styled.h2`
  text-align: start;
  font-size: 2rem;

  color: #fff;
  &::after {
    content: '';
    display: block;
    width: 28%;
    margin-top: 10px;
    margin-bottom: 20px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;

export const SubTitle = styled.h3`
  color: #fff;
  text-align: start;
  font-weight: 400;
  margin-bottom: 2em;
`;
