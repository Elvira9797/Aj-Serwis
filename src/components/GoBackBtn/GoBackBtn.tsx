import { CSSProperties, FC, ReactNode } from 'react';
import { StyledGoBackBtn } from './GoBackBtn-styled';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Location, useNavigate } from 'react-router-dom';

interface GoBackBtnProps {
  style?: CSSProperties;
  children: ReactNode;
  prevPath?: Location;
  onClick?: () => void;
}

const GoBackBtn: FC<GoBackBtnProps> = ({
  style,
  children,
  prevPath,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (prevPath) {
      navigate(prevPath);
    } else {
      navigate('/');
    }
  };

  return (
    <StyledGoBackBtn style={style} onClick={onClick}>
      <span>
        <BsArrowLeftShort size={'1rem'} />
      </span>
      {children}
    </StyledGoBackBtn>
  );
};

export default GoBackBtn;
