import { FC } from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import { AiFillCheckCircle } from 'react-icons/ai';
import {
  StyledContainer,
  StyledItem,
  StyledList,
  StyledSection,
  StyledSubtitle,
} from './VacancyOffer-styled';
import { useTranslation } from 'react-i18next';

interface VacancyOfferProps {
  vacancyOffers: string[] | undefined;
}

const VacancyOffer: FC<VacancyOfferProps> = ({ vacancyOffers }) => {
  const { t } = useTranslation();

  return (
    <StyledSection>
      <SectionContainer>
        <SectionTitle>{t('vacancyDetails.vacancyOffer.title')}</SectionTitle>
        <StyledContainer>
          <StyledSubtitle>
            {t('vacancyDetails.vacancyOffer.subtitle')}
          </StyledSubtitle>
          <StyledList style={{ width: '100%' }}>
            {vacancyOffers?.map(offer => (
              <StyledItem key={offer}>
                <AiFillCheckCircle
                  size={'1.2rem'}
                  style={{ color: '#c3a069' }}
                />
                {offer}
              </StyledItem>
            ))}
          </StyledList>
        </StyledContainer>
      </SectionContainer>
    </StyledSection>
  );
};

export default VacancyOffer;
