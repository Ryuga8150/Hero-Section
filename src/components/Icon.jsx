import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const colorIcon = {
  flipkart: css`rgba(225, 184, 19, 0.988)`,
  amazon: css`rgb(31, 41, 55)`,
};

const StyledIcon = styled.div`
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    ${(props) =>
      css`
        color: ${colorIcon[props.name]};
      `}
  }
`;

Icon.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string,
};

function Icon({ icon, name }) {
  return <StyledIcon name={name}>{icon}</StyledIcon>;
}

export default Icon;
