import styled from "styled-components";
import Navigation from "./Navigation";
import Logo from "./Logo";
import Button from "./Button";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
      <Button size="small" color="danger">
        Login
      </Button>
    </StyledHeader>
  );
}

export default Header;
