import { StyledFooterInfoBlock } from './FooterInfoBlock.styled';

const FooterInfoBlock: React.FC = () => {
  return (
    <StyledFooterInfoBlock>
      <p>KRS: 0000675439</p>
      <p>NIP: 527-280-64-29</p>
      <p>REGON: 367138582</p>
      <p>Nr biuro: 575-872-762</p>
      <a href="mailto:aj.serwis.spzoo@gmail.com">aj.serwis.spzoo@gmail.com</a>
    </StyledFooterInfoBlock>
  );
};

export default FooterInfoBlock;
