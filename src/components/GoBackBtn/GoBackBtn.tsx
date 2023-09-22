import { CSSProperties, FC, ReactNode } from 'react';
import { StyledGoBackBtn } from './GoBackBtn-styled';
import { BsArrowLeftShort } from 'react-icons/bs';

interface GoBackBtnProps {
  style?: CSSProperties;
  children: ReactNode;
  onClick?: () => void;
}

const GoBackBtn: FC<GoBackBtnProps> = ({ style, children, onClick }) => {
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
