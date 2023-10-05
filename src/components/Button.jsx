import styled, { css } from "styled-components";

const sizes = {
  medium: css`
    font-size: 1.8rem;
    padding: 0.8rem 1.8rem;
  `,
  small: css`
    font-size: 1.4rem;
    padding: 0.4rem 1.2rem;
  `,
};

const color = {
  danger: css`
    background-color: var(--color-red-700);
    border: solid 1px var(--color-red-700);
    color: var(--color-grey-50);
  `,
  default: css`
    background-color: var(--color-transparent);
    border: solid 1px var(--color-slate-700);
    color: var(--color-slate-700);
  `,
};

const Button = styled.button`
  border: none;

  ${(props) => sizes[props.size]}
  ${(props) => color[props.color]}
`;

Button.defaultProps = {
  size: "medium",
  color: "default",
};

export default Button;
