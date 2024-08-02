import { Box, Flex, Input, Button, Heading } from '@chakra-ui/react';

export default function SignUpSection() {
  return (
    <Box p="4" bg="#f7f7f7" textAlign="center">
      <Heading as="h2" size="lg" mb="4">SIGN UP FOR OUR DAILY INSIDER</Heading>
      <Flex align="center" justify="center">
        <Input
          type="email"
          placeholder="Enter your email"
          size="md"
          borderRadius="md"
          border="2px solid white"
          _hover={{ border: "2px solid #3182ce" }}
          _focus={{ border: "2px solid #3182ce" }}
          w="300px"
        />
        <Button colorScheme="blue" ml={2}>Subscribe</Button>
      </Flex>
    </Box>
  );
}
