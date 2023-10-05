import styled, { css } from "styled-components";

const Heading = styled.div`
  ${(props) =>
    props.as === "h1" &&
    css`
      text-transform: uppercase;
      font-size: 6.4rem;
      line-height: 1.2;
      margin-bottom: 1.6rem;
    `}
`;

export default Heading;
