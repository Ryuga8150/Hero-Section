import styled, { css } from "styled-components";

const Paragraph = styled.p`
  ${(props) =>
    props.size === "md" &&
    css`
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    `}
  ${(props) =>
    props.size === "sm" &&
    css`
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
    `}
`;

export default Paragraph;
