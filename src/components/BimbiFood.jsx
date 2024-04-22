import { Box, Container, VStack, Text, HStack, Image, Flex } from "@chakra-ui/react";
import React from "react";


const BimbiFood = () => {
  return (
    <Container
      maxW="full"
      height="20rem"
      bg="#E42021"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box height="100%" width="60%" >
        <VStack display="flex" align="flex-start">
          <Text fontSize="2xl" fontWeight="600">
            BimbiFood
          </Text>
          <HStack >
            <Container  width="20rem" fontSize="4xl" fontWeight="800">
              Your Favorite Food, on the way!
            </Container>
            <Image boxSize='250px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default BimbiFood;
