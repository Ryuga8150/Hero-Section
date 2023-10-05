import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { SiAmazon, SiFlipkart } from "react-icons/si";
import Icon from "./Icon";

const InlineGroup = styled.div`
  display: flex;
  gap: 2.4rem;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;
const StyledDescription = styled.div`
  padding: 2.4rem;
`;
function Description() {
  return (
    <StyledDescription>
      <Heading as="h1">Your Feet deserve the best</Heading>

      <Paragraph size="md">
        Your feet deserve the best and we{"'"}re here to help you with our
        shoe.Your feet deserve the best and we{"'"}re here to help you with our
        shoes
      </Paragraph>

      <InlineGroup>
        <Button color="danger">Shop Now</Button>
        <Button>Category</Button>
      </InlineGroup>

      <Paragraph size="sm">Also Available On</Paragraph>

      <InlineGroup>
        <Icon icon={<SiFlipkart />} name="flipkart" />
        <Icon icon={<SiAmazon />} name="amazon" />
      </InlineGroup>
    </StyledDescription>
  );
}

export default Description;
