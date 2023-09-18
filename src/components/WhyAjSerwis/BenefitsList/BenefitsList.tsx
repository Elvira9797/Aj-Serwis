import {
  StyledBenefitIcoContainer,
  StyledBenefitItem,
  StyledBenefitText,
  StyledBenefitsList,
} from './BenefitsList.styled';

import React from 'react';
import { ReactComponent as BusSvg } from '../../../assets/svg/bus.svg';
import { ReactComponent as DocsSvg } from '../../../assets/svg/docs.svg';
import { ReactComponent as HomeSvg } from '../../../assets/svg/home.svg';
import { ReactComponent as JobSvg } from '../../../assets/svg/job.svg';
import { ReactComponent as InfoSvg } from '../../../assets/svg/info.svg';
import { useTranslation } from 'react-i18next';

export interface SvgItem {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  perk: string;
}

function BenefitsList() {
  const { t } = useTranslation();

  const benefitsArr: SvgItem[] = [
    {
      icon: JobSvg,
      perk: t('main.whyAj.benefits.job'),
    },
    {
      icon: DocsSvg,
      perk: t('main.whyAj.benefits.doc'),
    },
    {
      icon: HomeSvg,
      perk: t('main.whyAj.benefits.live'),
    },
    {
      icon: InfoSvg,
      perk: t('main.whyAj.benefits.bilingual'),
    },
    {
      icon: BusSvg,
      perk: t('main.whyAj.benefits.transfer'),
    },
  ];

  return (
    <StyledBenefitsList>
      {benefitsArr.map(item => (
        <StyledBenefitItem key={item.perk}>
          <StyledBenefitIcoContainer>
            <item.icon />
          </StyledBenefitIcoContainer>
          <StyledBenefitText>{item.perk}</StyledBenefitText>
        </StyledBenefitItem>
      ))}
    </StyledBenefitsList>
  );
}

export default BenefitsList;
