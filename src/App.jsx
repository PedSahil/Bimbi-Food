import React from "react";
import BimbiFood from "./components/BimbiFood";
import { InfoIcon } from "@chakra-ui/icons";
import {
  VStack,
  Text,
  HStack,
  Button,
  Stack,
  Checkbox,
  Box,
  SimpleGrid,
  GridItem,
  Card,
  CardBody,
  Image,
  Grid,
  Container,
  Input,
  CardHeader,
  Flex,
  Divider,
  IconButton,

} from "@chakra-ui/react";

const App = () => {
  return (
    <Box>
      <VStack width="full">
        <BimbiFood />
        <Text fontSize="3xl" fontWeight={700}>
          Coming Soon !
        </Text>
        <Text fontSize="xl" fontWeight={700}>
          At Karwar
        </Text>
        <HStack spacing={3}>
          <Button colorScheme="red" size="sm">
            Register
          </Button>
          <Button colorScheme="red" size="sm" variant="outline">
            Plans
          </Button>
        </HStack>
        <Box display="flex" alignItems="start">
          <VStack>
            <HStack
              spacing={[1, 5]}
              direction={["column", "row"]}
              display="flex"
              align="flex-start"
            >
              <Checkbox size="md" colorScheme="green" defaultChecked>
                Veg
              </Checkbox>
              <Checkbox size="md" colorScheme="red" defaultChecked>
                Non-Veg
              </Checkbox>
            </HStack>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem colSpan={1}>
                <Card p="10px" width="400px">
                  <HStack>
                    <Image
                      boxSize="100px"
                      borderRadius="8px"
                      src="https://bit.ly/dan-abramov"
                    ></Image>
                    <VStack>
                      <CardBody>
                        <Text>
                          View a summary of all your customers over the last
                          month.
                        </Text>
                      </CardBody>
                    </VStack>
                  </HStack>
                </Card>
              </GridItem>
              <GridItem colSpan={1}>
                <Card p="10px" width="400px">
                  <HStack>
                    <Image
                      boxSize="100px"
                      borderRadius="8px"
                      src="https://bit.ly/dan-abramov"
                    ></Image>
                    <VStack>
                      <CardBody>
                        <Text>
                          View a summary of all your customers over the last
                          month.
                        </Text>
                      </CardBody>
                    </VStack>
                  </HStack>
                </Card>
              </GridItem>
              <GridItem colSpan={1}>
                <Card p="10px" width="400px">
                  <HStack>
                    <Image
                      boxSize="100px"
                      borderRadius="8px"
                      src="https://bit.ly/dan-abramov"
                    ></Image>
                    <VStack>
                      <CardBody>
                        <Text>
                          View a summary of all your customers over the last
                          month.
                        </Text>
                      </CardBody>
                    </VStack>
                  </HStack>
                </Card>
              </GridItem>
              <GridItem colSpan={1}>
                <Card p="10px" width="400px">
                  <HStack>
                    <Image
                      boxSize="100px"
                      borderRadius="8px"
                      src="https://bit.ly/dan-abramov"
                    ></Image>
                    <VStack>
                      <CardBody>
                        <Text>
                          View a summary of all your customers over the last
                          month.
                        </Text>
                      </CardBody>
                    </VStack>
                  </HStack>
                </Card>
              </GridItem>
              <GridItem colSpan={1}>
                <Card p="10px" width="400px">
                  <HStack>
                    <Image
                      boxSize="100px"
                      borderRadius="8px"
                      src="https://bit.ly/dan-abramov"
                    ></Image>
                    <VStack>
                      <CardBody>
                        <Text>
                          View a summary of all your customers over the last
                          month.
                        </Text>
                      </CardBody>
                    </VStack>
                  </HStack>
                </Card>
              </GridItem>
              <GridItem colSpan={1}>
                <Card p="10px" width="400px">
                  <HStack>
                    <Image
                      boxSize="100px"
                      borderRadius="8px"
                      src="https://bit.ly/dan-abramov"
                    ></Image>
                    <VStack>
                      <CardBody>
                        <Text>
                          View a summary of all your customers over the last
                          month.
                        </Text>
                      </CardBody>
                    </VStack>
                  </HStack>
                </Card>
              </GridItem>
            </Grid>
            <VStack
              height="25rem"
              bg="#E42021"
              width="100vw"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <HStack>
                <Container width="20rem">
                  <Text color="white" fontSize="32px">
                    Fill your details to reach you soon!!
                  </Text>
                </Container>
                <Card padding="2rem" bg="white" width="30rem" height="100%">
                  <VStack alignItems="flex-start" gap="1rem">
                    <Text>Full Name</Text>
                    <Input placeholder="Full Name" />
                    <Text>Mobile</Text>
                    <Input type="number" placeholder="0000000000" />
                    <Button colorScheme="red" size="sm">
                      Register
                    </Button>
                  </VStack>
                </Card>
              </HStack>
            </VStack>
            <Text fontSize="2xl" fontWeight={700}>
              Flexible Plans
            </Text>
            <Text fontSize="sm" fontWeight={400}>
              Choose a plan that works best for you
            </Text>

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem colSpan={1}>
                <Card width="20rem">
                  <CardHeader>Day Plan</CardHeader>
                  <CardBody>
                    <Flex justifyContent='space-between'>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                    <Flex justifyContent='space-between'>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                    <Flex justifyContent='space-between'>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                    <Flex justifyContent='space-between'>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem colSpan={1}>
                <Card width="20rem">
                  <CardHeader>Day Plan</CardHeader>
                  <CardBody>
                    <Flex justifyContent='space-between'>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                    <Flex justifyContent='space-between'>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                    <Flex justifyContent='space-between'>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                    <Flex justifyContent='space-between'>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem colSpan={1}>
                <Card width="20rem">
                  <CardHeader>Day Plan</CardHeader>
                  <CardBody>
                    <Flex>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                    <Flex>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                    <Flex>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                    <Flex>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem colSpan={1}>
                <Card width="20rem">
                  <CardHeader>Day Plan</CardHeader>
                  <CardBody>
                    <Flex>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                    <Flex>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                    <Flex>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                    <Flex>
                      <Text>Name</Text>
                      <Text>$12</Text>
                    </Flex>
                    <Divider />
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
            <Box
              width="100vw"
              bg="#E42021"
              height="15rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <HStack spacing={3}>
                <IconButton
                  variant="ghost"
                  colorScheme="white"
                  aria-label="Send email"
                  icon={<InfoIcon boxSize={7}/>}
           
                />
                <IconButton
                  variant="ghost"
                  colorScheme="white"
                  aria-label="Send email"
                  icon={<InfoIcon boxSize={7}/>}
            
                />
                <IconButton
                  variant="ghost"
                  colorScheme="white"
                  aria-label="Send email"
                  icon={<InfoIcon boxSize={7}/>}
            
                />
              </HStack>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default App;
