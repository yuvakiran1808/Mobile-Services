import { Flex, Container } from "@chakra-ui/react";
import Cart from "./details";
import Details from "./issueForm";

const IndexPage = () => {
  //   const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");

  return (
    <Container minWidth="100%" height="80vh" p={0}>
      <Flex p={[0, 10]} direction={{ base: "column", md: "row" }}>
        <Cart />
        <Details />
      </Flex>
    </Container>
  );
};

export default IndexPage;
