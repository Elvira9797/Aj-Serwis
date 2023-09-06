import { FC } from 'react';
import {
  VacancyContainer,
  VacancyImg,
  VacancyItem,
  VacancyList,
  VacancySection,
  VacancySpan,
  VacancyText,
  VacancyTitle,
} from './VacancyInfo-styled';
import SectionContainer from '../SectionContainer/SectionContainer';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { Link } from 'react-scroll';

interface VacansyInfoProps {
  vacancy:
    | {
        id: string;
        job_title: string;
        looking_for: string;
        salary: string;
        image: string;
        work_schedule: string;
        location: string;
        responsibilities: string[];
        what_we_offer: string[];
        requirements?: string[];
      }
    | undefined;
}

const VacancyInfo: FC<VacansyInfoProps> = ({ vacancy }) => {
  const navigate = useNavigate();

  return (
    <VacancySection>
      <SectionContainer>
        <GoBackBtn
          style={{ marginBottom: '2rem' }}
          onClick={() => navigate(-1)}
        >
          Go back
        </GoBackBtn>
        <VacancyContainer>
          <VacancyImg src={vacancy?.image} />
          <div>
            <VacancyTitle>{vacancy?.job_title}</VacancyTitle>
            <VacancyList>
              <VacancyItem></VacancyItem>
              <VacancyItem>
                <VacancyText>{vacancy?.looking_for}</VacancyText>
              </VacancyItem>
              {vacancy?.requirements && (
                <VacancyItem>
                  <VacancyText>
                    <VacancySpan>Requirements:</VacancySpan>
                    {vacancy?.requirements.join(', ')}
                  </VacancyText>
                </VacancyItem>
              )}
              {vacancy?.responsibilities && (
                <VacancyItem>
                  <VacancyText>
                    {' '}
                    <VacancySpan>Responsibilities:</VacancySpan>
                    {vacancy.responsibilities.join(', ')}
                  </VacancyText>
                </VacancyItem>
              )}

              <VacancyItem>
                <VacancyText>
                  <VacancySpan>Location:</VacancySpan>
                  {vacancy?.location}
                </VacancyText>
              </VacancyItem>
              <VacancyItem>
                <VacancyText>
                  <VacancySpan>Salary:</VacancySpan>
                  {vacancy?.salary}
                </VacancyText>
              </VacancyItem>
              <VacancyItem>
                <VacancyText>
                  <VacancySpan>Work hours:</VacancySpan>
                  {vacancy?.work_schedule}
                </VacancyText>
              </VacancyItem>
            </VacancyList>
            <Link to="form" smooth={true} duration={1000}>
              <Button
                variant={'form'}
                style={{ fontWeight: '700' }}
                lightTheme={true}
              >
                Aplly for a Job
              </Button>
            </Link>
          </div>
        </VacancyContainer>
      </SectionContainer>
    </VacancySection>
  );
};

export default VacancyInfo;
