import { CSSProperties, FC, ReactNode, useEffect, useState } from 'react';
import { StyledGoBackBtn } from './GoBackBtn-styled';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

interface GoBackBtnProps {
  style?: CSSProperties;
  children: ReactNode;
  onClick?: () => void;
  state?: string;
}

const GoBackBtn: FC<GoBackBtnProps> = ({ style, children, state = '' }) => {
  const [paths, setPaths] = useState<string[]>([state]);
  const [lang, setLang] = useState('');

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setPaths(prev => {
      if (prev[prev.length - 1] !== pathname) {
        return [...prev, pathname];
      }
      return prev;
    });
  }, [pathname]);

  useEffect(() => {
    const lang = new URLSearchParams(search).get('lang');

    setLang(`?lang=${lang}`);
  }, [search]);

  const handleGoBack = () => {
    const lastPath = paths[paths.length - 1];
    const prevPath = paths[paths.length - 2];
    if (!paths.length || !prevPath) {
      navigate('/');
      return;
    }
    navigate(prevPath + lang);
    setPaths(paths.filter(el => el !== lastPath && el !== prevPath));
  };

  return (
    <StyledGoBackBtn style={style} onClick={handleGoBack}>
      <span>
        <BsArrowLeftShort size={'1rem'} />
      </span>
      {children}
    </StyledGoBackBtn>
  );
};

export default GoBackBtn;
