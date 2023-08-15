import React from 'react';
import { ReactComponent as BusSvg } from '../assets/svg/bus.svg';
import { ReactComponent as DocsSvg } from '../assets/svg/docs.svg';
import { ReactComponent as HomeSvg } from '../assets/svg/home.svg';
import { ReactComponent as JobSvg } from '../assets/svg/job.svg';
import { ReactComponent as InfoSvg } from '../assets/svg/info.svg';

export interface SvgItem {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  perk: string;
}

export const benefitsArr: SvgItem[] = [
  {
    icon: JobSvg,
    perk: 'Help in finding a job',
  },
  {
    icon: DocsSvg,
    perk: 'Assistance in filing documents',
  },
  {
    icon: HomeSvg,
    perk: 'Free place of life near work',
  },
  {
    icon: InfoSvg,
    perk: 'Assistance of a bilingual coordinator',
  },
  {
    icon: BusSvg,
    perk: 'Free transfer to the place of work',
  },
];
