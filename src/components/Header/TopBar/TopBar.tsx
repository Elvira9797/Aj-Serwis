import { useEffect, useState } from 'react';

import { StyledNavWrader, StyledTopBar } from './TopBar.styled';

import { BiMailSend } from 'react-icons/bi';

import { workEmail, workingTime } from '../../../common/dataContacts';

const TopBar: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const [visible, setVisible] = useState(true);

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
        <a href={`mailto:${workEmail}`}>{workEmail}</a>
      </StyledNavWrader>
      <p>{workingTime}</p>
    </StyledTopBar>
  );
};

export default TopBar;
