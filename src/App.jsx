import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Image from "./components/Image";
import Description from "./components/Description";

const HeroSection = styled.section`
  max-width: 120rem;
  margin: 0 auto;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.4rem;
  padding: 2.4rem 0;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <HeroSection>
        <Header />
        <Container>
          <Description />
          <Image />
        </Container>
      </HeroSection>
    </>
  );
}

export default App;
