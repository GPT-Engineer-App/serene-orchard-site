// Complete the Index page component for the apple farm website
import { Box, Container, Flex, Heading, Image, Link, Text, VStack, SimpleGrid, Input, Textarea, Button } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" p={4} justifyContent="space-between" alignItems="center" bg="green.500" color="white">
        <Heading as="h1" size="lg">
          Norwegian Apple Farm
        </Heading>
        <Flex gap="4">
          <Link href="#home">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#apples">Our Apples</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact Us</Link>
        </Flex>
      </Flex>

      {/* Home Section */}
      <Box id="home" p={4} bgImage="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGZhcm0lMjBOb3J3YXl8ZW58MHx8fHwxNzE0NjgwODQyfDA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center" height="70vh">
        <VStack spacing={4} justifyContent="center" height="100%" bgGradient="linear(to-r, green.800Alpha.60, transparent)">
          <Heading as="h2" size="2xl" color="white">
            Welcome to Our Apple Farm
          </Heading>
          <Text fontSize="xl" color="white">
            Experience the taste of Norway's finest apples.
          </Text>
        </VStack>
      </Box>

      {/* About Us Section */}
      <Container id="about" py={10}>
        <Heading as="h3" size="xl" mb={6}>
          About Us
        </Heading>
        <Text>Nestled in the heart of Norway, our apple farm has been a family-owned establishment for over 50 years. With a commitment to sustainable farming practices, we produce some of the finest apples in the region, known for their crisp texture and rich flavors.</Text>
      </Container>

      {/* Our Apples Section */}
      <Box id="apples" bg="green.100" p={10}>
        <Heading as="h3" size="xl" mb={6}>
          Our Apples
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading as="h4" size="md">
              Red Delicious
            </Heading>
            <Text>Sweet and crunchy, perfect for fresh eating.</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md">
              Granny Smith
            </Heading>
            <Text>Tart and tangy, ideal for baking.</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md">
              Honeycrisp
            </Heading>
            <Text>Juicy and sweet, with a balanced flavor.</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md">
              Fuji
            </Heading>
            <Text>Super sweet and crisp, great for snacks.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Gallery Section */}
      <Container id="gallery" py={10}>
        <Heading as="h3" size="xl" mb={6}>
          Gallery
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Image src="https://images.unsplash.com/photo-1607358049845-4360f06be5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMG9yY2hhcmR8ZW58MHx8fHwxNzE0NjgwODQyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Image src="https://images.unsplash.com/photo-1617235178117-a1f5fecb72bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGhhcnZlc3R8ZW58MHx8fHwxNzE0NjgwODQzfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Image src="https://images.unsplash.com/photo-1634429001369-9bba712fffe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGZhcm0lMjBzY2VuaWN8ZW58MHx8fHwxNzE0NjgwODQzfDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </SimpleGrid>
      </Container>

      {/* Contact Us Section */}
      <Box id="contact" bg="gray.200" p={10}>
        <Heading as="h3" size="xl" mb={6}>
          Contact Us
        </Heading>
        <VStack spacing={3} align="start">
          <Flex alignItems="center" gap="2">
            <FaPhone />
            <Text>+47 123 456 789</Text>
          </Flex>
          <Flex alignItems="center" gap="2">
            <FaEnvelope />
            <Text>info@norwegianapplefarm.no</Text>
          </Flex>
          <Flex alignItems="center" gap="2">
            <FaMapMarkerAlt />
            <Text>123 Apple Lane, Oslo, Norway</Text>
          </Flex>
          <Flex gap="2">
            <Link href="https://facebook.com" isExternal>
              <FaFacebookF />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <FaInstagram />
            </Link>
          </Flex>
          <Box as="form" w="full" mt={4}>
            <Input placeholder="Your Name" mb={3} />
            <Input placeholder="Your Email" mb={3} />
            <Textarea placeholder="Your Message" mb={3} />
            <Button colorScheme="green">Send Message</Button>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;
