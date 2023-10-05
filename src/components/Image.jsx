import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: green; */
  /* margin: auto 0; */
`;

const StyledImage = styled.img`
  width: 100%;
  height: 75%;
  background-color: transparent;
  display: block;

  // not working don't know why
  margin: auto 0;

  margin-top: 6.4rem;

  //box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
`;

function Image() {
  return (
    <Box>
      <StyledImage src="shoe.png" />
    </Box>
  );
}

export default Image;
