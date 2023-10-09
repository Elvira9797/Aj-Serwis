import { FC } from 'react';
import {
  VacancyContainer,
  VacancyImg,
  VacancyItem,
  VacancyLink,
  VacancyList,
  VacancySection,
  VacancySpan,
  VacancyText,
  VacancyTextLocation,
  VacancyTitle,
} from './VacancyInfo-styled';
import SectionContainer from '../SectionContainer/SectionContainer';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import { useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { FaLocationDot } from 'react-icons/fa6';

interface VacansyInfoProps {
  vacancy:
    | {
        id: string;
        job_title: string;
        looking_for: string;
        salary: string;
        work_schedule: string;
        location: string[];
        location_map: string;
        location_map2?: string;
        responsibilities: string[];
        what_we_offer: string[];
        requirements?: string[];
      }
    | undefined;
  image: string;
}

const VacancyInfo: FC<VacansyInfoProps> = ({ vacancy, image }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const fromPath = location.state ? location.state.from.pathname : '/';

  return (
    <VacancySection>
      <SectionContainer>
        <GoBackBtn style={{ marginBottom: '2rem' }} state={fromPath}>
          {t('vacancies.back')}
        </GoBackBtn>
        <VacancyContainer>
          <VacancyImg src={image} />
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
                    <VacancySpan>
                      {t(
                        'vacancyDetails.vacancyInfo.job_list_titles.requirements'
                      )}
                      :
                    </VacancySpan>
                    {vacancy?.requirements.join(', ')}
                  </VacancyText>
                </VacancyItem>
              )}
              {vacancy?.responsibilities && (
                <VacancyItem>
                  <VacancyText>
                    <VacancySpan>
                      {t(
                        'vacancyDetails.vacancyInfo.job_list_titles.responsibilities'
                      )}
                      :
                    </VacancySpan>
                    {vacancy.responsibilities.join(', ')}
                  </VacancyText>
                </VacancyItem>
              )}

              <VacancyItem>
                <VacancyTextLocation>
                  <VacancySpan>
                    {t('vacancyDetails.vacancyInfo.job_list_titles.location')}:
                  </VacancySpan>
                  <VacancyLink
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                    href={vacancy?.location_map}
                  >
                    <FaLocationDot size={16} color="#c3a069" />

                    {vacancy?.location[0]}
                  </VacancyLink>
                  {vacancy?.location.length === 2 && (
                    <VacancyLink
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                      href={vacancy?.location_map2}
                    >
                      <FaLocationDot size={16} color="#c3a069" />

                      {vacancy?.location[1]}
                    </VacancyLink>
                  )}
                </VacancyTextLocation>
              </VacancyItem>
              <VacancyItem>
                <VacancyText>
                  <VacancySpan>
                    {t('vacancyDetails.vacancyInfo.job_list_titles.salary')}:
                  </VacancySpan>
                  {vacancy?.salary}
                </VacancyText>
              </VacancyItem>
              <VacancyItem>
                <VacancyText>
                  <VacancySpan>
                    {t('vacancyDetails.vacancyInfo.job_list_titles.work_hours')}
                    :
                  </VacancySpan>
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
                {t('vacancyDetails.vacancyInfo.btnText')}
              </Button>
            </Link>
          </div>
        </VacancyContainer>
      </SectionContainer>
    </VacancySection>
  );
};

export default VacancyInfo;
