import styled from "styled-components";

const Link = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  & li {
    font-size: 1.8rem;
  }
`;
function Navigation() {
  return (
    <Link>
      <li>Menu</li>
      <li>Location</li>
      <li>About</li>
      <li>Contact</li>
    </Link>
  );
}

export default Navigation;
