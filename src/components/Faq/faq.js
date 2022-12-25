import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  VStack,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function faq() {
  return (
    <Container maxWidth="container.xl" p={8} mt="10">
      <Flex py={8} direction={{ base: "column", md: "row" }}>
        <VStack maxWidth="2xl" h="full" alignItems="flex-start" mb="6">
          <Heading m="0" pr={{ xl: 14 }}>
            We’ll be there when you need us
          </Heading>
          <Text pr={{ xl: 14 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, cum.
            Id et dicta ullam repellendus iure quo cupiditate alias distinctio!
          </Text>
        </VStack>
        <VStack p={0} w="full" h="full" align="stretch">
          <Accordion allowToggle>
            <AccordionItem
              border="1px solid #F0BD65"
              borderRadius="6px"
              p="2"
              alignItems="stretch"
              alignContent="stretch"
              mb="5"
            >
              <h2>
                <AccordionButton _hover="color:red">
                  <Box as="span" flex="1" textAlign="left">
                    <Text
                      fontSize={{ base: "16px", md: "18px" }}
                      fontWeight="medium"
                      color="hc"
                    >
                      How does Repair work ?
                    </Text>
                  </Box>
                  <AccordionIcon ml="30" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="bc" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              border="1px solid #F0BD65"
              borderRadius="6px"
              p="2"
              alignItems="stretch"
              alignContent="stretch"
              mb="5"
            >
              <h2>
                <AccordionButton _hover="color:red">
                  <Box as="span" flex="1" textAlign="left">
                    <Text
                      fontSize={{ base: "16px", md: "18px" }}
                      fontWeight="medium"
                    >
                      Do you provide for all Apple Devices ?
                    </Text>
                  </Box>
                  <AccordionIcon ml="30" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="bc" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              border="1px solid #F0BD65"
              borderRadius="6px"
              p="2"
              alignItems="stretch"
              alignContent="stretch"
              mb="5"
            >
              <h2>
                <AccordionButton _hover="color:red">
                  <Box as="span" flex="1" textAlign="left">
                    <Text
                      fontSize={{ base: "16px", md: "18px" }}
                      fontWeight="medium"
                    >
                      How does Repair work ?
                    </Text>
                  </Box>
                  <AccordionIcon ml="30" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="bc" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              border="1px solid #F0BD65"
              borderRadius="6px"
              p="2"
              alignItems="stretch"
              alignContent="stretch"
              mb="5"
            >
              <h2>
                <AccordionButton _hover="color:red">
                  <Box as="span" flex="1" textAlign="left">
                    <Text
                      fontSize={{ base: "16px", md: "18px" }}
                      fontWeight="medium"
                    >
                      How does Repair work ?
                    </Text>
                  </Box>
                  <AccordionIcon ml="30" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="bc" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              border="1px solid #F0BD65"
              borderRadius="6px"
              p="2"
              alignItems="stretch"
              alignContent="stretch"
              mb="5"
            >
              <h2>
                <AccordionButton _hover="color:red">
                  <Box as="span" flex="1" textAlign="left">
                    <Text
                      fontSize={{ base: "16px", md: "18px" }}
                      fontWeight="medium"
                    >
                      How does Repair work ?
                    </Text>
                  </Box>
                  <AccordionIcon ml="30" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="bc" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              border="1px solid #F0BD65"
              borderRadius="6px"
              p="2"
              alignItems="stretch"
              alignContent="stretch"
              mb="5"
            >
              <h2>
                <AccordionButton _hover="color:red">
                  <Box as="span" flex="1" textAlign="left">
                    <Text
                      fontSize={{ base: "16px", md: "18px" }}
                      fontWeight="medium"
                    >
                      How does Repair work ?
                    </Text>
                  </Box>
                  <AccordionIcon ml="30" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="bc" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Flex>
    </Container>
  );
}