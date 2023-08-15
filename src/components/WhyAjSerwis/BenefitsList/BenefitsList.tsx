import { benefitsArr } from '../../../common/benefitsArr';
import {
  StyledBenefitIcoContainer,
  StyledBenefitItem,
  StyledBenefitText,
  StyledBenefitsList,
} from './BenefitsList.styled';

function BenefitsList() {
  return (
    <StyledBenefitsList>
      {benefitsArr.map(item => (
        <StyledBenefitItem key={item.perk}>
          <StyledBenefitIcoContainer>
            <item.icon />
          </StyledBenefitIcoContainer>
          <StyledBenefitText>{item.perk}</StyledBenefitText>
        </StyledBenefitItem>
      ))}
    </StyledBenefitsList>
  );
}

export default BenefitsList;
