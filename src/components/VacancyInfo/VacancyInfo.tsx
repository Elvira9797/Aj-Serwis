import { FC } from 'react';
import { IVacancieData } from '../../common/vacanciesArr';
import {
  VacancyContainer,
  VacancyImg,
  VacancyItem,
  VacancyList,
  VacancyTitle,
} from './VacancyInfo-styled';

interface VacansyInfoProps {
  vacancy: IVacancieData | undefined;
}

const VacancyInfo: FC<VacansyInfoProps> = ({ vacancy }) => {
  return (
    <>
      <VacancyContainer>
        <VacancyImg src={vacancy?.image} alt={vacancy?.position} />
        <VacancyList>
          <VacancyItem>
            <VacancyTitle>
              {' '}
              <span
                style={{
                  fontWeight: 700,
                  marginRight: '12px',
                  letterSpacing: '0.05em',
                }}
              >
                Position:
              </span>{' '}
              {vacancy?.position}
            </VacancyTitle>
          </VacancyItem>
          <VacancyItem>
            <p style={{ textTransform: 'uppercase' }}>
              <span
                style={{
                  fontWeight: 700,
                  marginRight: '12px',
                  letterSpacing: '0.05em',
                }}
              >
                City:
              </span>{' '}
              {vacancy?.city}
            </p>
          </VacancyItem>
          <VacancyItem>
            <p style={{ textTransform: 'uppercase' }}>
              <span
                style={{
                  fontWeight: 700,
                  marginRight: '12px',
                  letterSpacing: '0.05em',
                }}
              >
                Salary:
              </span>{' '}
              {vacancy?.salary}
            </p>
          </VacancyItem>
          <VacancyItem>
            <p>
              <span
                style={{
                  fontWeight: 700,
                  marginRight: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Detailed info:
              </span>{' '}
              {vacancy?.fullInfo}
            </p>
          </VacancyItem>
        </VacancyList>
      </VacancyContainer>
    </>
  );
};

export default VacancyInfo;
