import Logo from '../../Logo/Logo';

import { Spacer, StyledFooterInfoBlock } from './FooterInfoBlock.styled';

import { dataFooterInfoBlock } from '../../../common/dataFooterInfoBlock';

const FooterInfoBlock: React.FC = () => {
  return (
    <StyledFooterInfoBlock>
      <Logo loc="footer" size="lg" />
      <Spacer />
      <ul>
        {dataFooterInfoBlock.map(({ title }, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </StyledFooterInfoBlock>
  );
};

export default FooterInfoBlock;
