import {
  StyledBenefitIcoContainer,
  StyledBenefitItem,
  StyledBenefitText,
  StyledBenefitsList,
} from './BenefitsList.styled';

import React, { useEffect, useState } from 'react';
import { ReactComponent as BusSvg } from '../../../assets/svg/bus.svg';
import { ReactComponent as DocsSvg } from '../../../assets/svg/docs.svg';
import { ReactComponent as HomeSvg } from '../../../assets/svg/home.svg';
import { ReactComponent as JobSvg } from '../../../assets/svg/job.svg';
import { ReactComponent as InfoSvg } from '../../../assets/svg/info.svg';
import { useTranslation } from 'react-i18next';
import { SvgItem, benefitsArr } from '../../../common/benefitsArr';

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

function BenefitsList() {
  const { t, i18n } = useTranslation();

  const [benefits, setBenefits] = useState(benefitsArr);
  const [languageKey, setLanguageKey] = useState(i18n.resolvedLanguage);

  useEffect(() => {
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
    setBenefits(benefitsArr);
    setLanguageKey(i18n.resolvedLanguage);
  }, [i18n.resolvedLanguage, t]);

  return (
    <StyledBenefitsList
      key={languageKey}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      {benefits.length > 0 &&
        benefits.map((item, index) => (
          <StyledBenefitItem key={item.perk}>
            <StyledBenefitIcoContainer
              variants={listAnimation}
              custom={index + 1}
            >
              <item.icon />
            </StyledBenefitIcoContainer>
            <StyledBenefitText variants={listAnimation} custom={index + 2}>
              {item.perk}
            </StyledBenefitText>
          </StyledBenefitItem>
        ))}
    </StyledBenefitsList>
  );
}

export default BenefitsList;
