import { useEffect, useState } from 'react';

import { StyledNavWrader, StyledTopBar } from './TopBar.styled';

import { BiMailSend } from 'react-icons/bi';

import { useTranslation } from 'react-i18next';

const TopBar: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const [visible, setVisible] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY === 0 ? setIsTop(true) : setIsTop(false);

    window.scrollY > 100 ? setVisible(false) : setVisible(true);

    const cleanScroll = () => {
      window.removeEventListener('scroll', handleScroll);
    };
    window.addEventListener('scroll', handleScroll);

    return cleanScroll;
  }, [visible]);

  return (
    <StyledTopBar isVisible={isTop}>
      <StyledNavWrader>
        <BiMailSend />
        <a href={`mailto:${t('info.email')}`}>{t('info.email')}</a>
      </StyledNavWrader>
      <p>
        {t('info.workHoursTitle')}
        {t('info.workingTime')}
      </p>
    </StyledTopBar>
  );
};

export default TopBar;
