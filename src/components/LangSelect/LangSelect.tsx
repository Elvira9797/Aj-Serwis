import { StyledSelectLang } from './LangSelect.styled';

function LangSelect() {
  return (
    <StyledSelectLang>
      <option value="uk">UA</option>
      <option value="pl">PL</option>
      <option value="en">EN</option>
    </StyledSelectLang>
  );
}

export default LangSelect;
