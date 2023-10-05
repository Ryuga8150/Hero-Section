import { SiNike } from "react-icons/si";
import styled from "styled-components";

const StyledLogo = styled.div`
  & svg {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <SiNike />
    </StyledLogo>
  );
}

export default Logo;
