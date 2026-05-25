import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Button,
  Grid,
  Image,
  VStack,
  HStack,
  IconButton,
  useBreakpointValue,
  Link,
  Menu,
  Portal,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ServicesSection } from "@/sections/services";
import { AboutSection } from "@/sections/about";
import { CapabilitiesSection } from "@/sections/capabilities";
import { ContactSection } from "@/sections/contact";

// CSS animations
const marqueeAnimation = "marquee 26s linear infinite";
const pulseAnimation = "pulse 2s ease-in-out infinite";

// Add CSS keyframes to document head
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
  `;
  document.head.appendChild(style);
}

// Custom SVG Icons as components

export const HomePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {/* Nar Bar */}
      <Box
        as="nav"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="100"
        bg="grey.900"
        borderBottom="1px solid"
        borderColor="rgba(74,127,165,0.18)"
        backdropFilter="blur(8px)"
      >
        <Container maxW="1200px">
          <Flex align="center" justify="space-between" h="68px">
            <Flex align="center" gap="0.85rem">
              <Image
                src="/mimic-website/logo.png"
                alt="Mimic Engraving logo"
                h="45px"
                objectFit="contain"
              />
              <Box w="1px" h="28px" bg="rgba(74,127,165,0.35)" />
              <VStack gap="1px" align="flex-start">
                <Text
                  fontFamily="heading"
                  fontSize="1.05rem"
                  letterSpacing="0.14em"
                  color="white"
                  lineHeight="1"
                >
                  MIMIC ENGRAVING
                </Text>
                <Text
                  fontFamily="mono"
                  fontSize="0.52rem"
                  letterSpacing="0.22em"
                  color="blue.400"
                  textTransform="uppercase"
                >
                  Services CC · Greenside, JHB
                </Text>
              </VStack>
            </Flex>

            {!isMobile && (
              <HStack gap="2rem">
                <Link
                  href="#services"
                  fontFamily="mono"
                  fontSize="xs"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  color="rgba(250,251,252,0.5)"
                  _hover={{ color: "blue.300" }}
                  transition="color 0.32s cubic-bezier(0.4,0,0.2,1)"
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  fontFamily="mono"
                  fontSize="xs"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  color="rgba(250,251,252,0.5)"
                  _hover={{ color: "blue.300" }}
                  transition="color 0.32s cubic-bezier(0.4,0,0.2,1)"
                >
                  About
                </Link>
                <Link
                  href="#capabilities"
                  fontFamily="mono"
                  fontSize="xs"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  color="rgba(250,251,252,0.5)"
                  _hover={{ color: "blue.300" }}
                  transition="color 0.32s cubic-bezier(0.4,0,0.2,1)"
                >
                  Capabilities
                </Link>
                <Link
                  href="#contact"
                  bg="blue.500"
                  color="white"
                  fontFamily="mono"
                  fontSize="xs"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  px="1.2rem"
                  py="0.5rem"
                  borderRadius="3px"
                  _hover={{ bg: "blue.600" }}
                  transition="background 0.32s cubic-bezier(0.4,0,0.2,1)"
                  display="inline-flex"
                  alignItems="center"
                  textDecoration="none"
                >
                  Get a Quote
                </Link>
              </HStack>
            )}
            {isMobile && (
              <Menu.Root size="md">
                <Menu.Trigger>
                  <IconButton bg="transparent" color="white" size="lg">
                    <GiHamburgerMenu />
                  </IconButton>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content
                      gap="4"
                      minW="200px"
                      p="4"
                      bg="grey.900"
                      border="1px solid rgba(74,127,165,0.3)"
                      borderRadius="8px"
                      boxShadow="0 10px 25px rgba(0,0,0,0.4)"
                    >
                      <Menu.Item
                        value="services"
                        p="3"
                        borderRadius="4px"
                        _hover={{ bg: "rgba(74,127,165,0.2)" }}
                        fontSize="0.9rem"
                        fontFamily="mono"
                        letterSpacing="0.1em"
                        textTransform="uppercase"
                      >
                        <Link
                          href="#services"
                          color="rgba(250,251,252,0.8)"
                          _hover={{ color: "blue.300", textDecoration: "none" }}
                          w="100%"
                          display="block"
                        >
                          Services
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        value="about"
                        p="3"
                        borderRadius="4px"
                        _hover={{ bg: "rgba(74,127,165,0.2)" }}
                        fontSize="0.9rem"
                        fontFamily="mono"
                        letterSpacing="0.1em"
                        textTransform="uppercase"
                      >
                        <Link
                          href="#about"
                          color="rgba(250,251,252,0.8)"
                          _hover={{ color: "blue.300", textDecoration: "none" }}
                          w="100%"
                          display="block"
                        >
                          About
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        value="capabilities"
                        p="3"
                        borderRadius="4px"
                        _hover={{ bg: "rgba(74,127,165,0.2)" }}
                        fontSize="0.9rem"
                        fontFamily="mono"
                        letterSpacing="0.1em"
                        textTransform="uppercase"
                      >
                        <Link
                          href="#capabilities"
                          color="rgba(250,251,252,0.8)"
                          _hover={{ color: "blue.300", textDecoration: "none" }}
                          w="100%"
                          display="block"
                        >
                          Capabilities
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        value="contact"
                        p="3"
                        borderRadius="4px"
                        _hover={{ bg: "blue.500" }}
                        fontSize="0.9rem"
                        fontFamily="mono"
                        letterSpacing="0.1em"
                        textTransform="uppercase"
                        bg="rgba(74,127,165,0.1)"
                      >
                        <Link
                          href="#contact"
                          color="blue.300"
                          _hover={{ color: "white", textDecoration: "none" }}
                          w="100%"
                          display="block"
                        >
                          Get a Quote
                        </Link>
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            )}
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        minH="100vh"
        bg="grey.900"
        position="relative"
        overflow="hidden"
        display={{ base: "block", lg: "grid" }}
        gridTemplateColumns={{ lg: "55% 45%" }}
      >
        {/* Background Effects */}
        <Box position="absolute" inset="0" pointerEvents="none">
          <Box
            position="absolute"
            inset="0"
            backgroundImage="linear-gradient(rgba(74,127,165,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,127,165,0.05) 1px, transparent 1px)"
            backgroundSize="52px 52px"
          />
          <Box
            position="absolute"
            w="600px"
            h="600px"
            borderRadius="50%"
            background="radial-gradient(circle, rgba(74,127,165,0.12) 0%, transparent 70%)"
            top="-100px"
            right="100px"
          />
        </Box>

        {/* Hero Left */}
        <Flex
          direction="column"
          justify="center"
          p={{ base: "8rem 2rem 5rem", lg: "10rem 3rem 6rem 4rem" }}
          position="relative"
          zIndex="2"
        >
          <HStack gap="0.75rem" mb="1.75rem">
            <Box w="28px" h="1px" bg="blue.500" />
            <Text
              fontFamily="mono"
              fontSize="0.65rem"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="blue.300"
            >
              Industrial Precision · Johannesburg
            </Text>
          </HStack>

          <Heading
            fontFamily="heading"
            fontSize={{ base: "3.8rem", lg: "5.8rem" }}
            lineHeight="0.93"
            letterSpacing="0.03em"
            color="white"
            mb="2rem"
          >
            CRAFTED
            <br />
            <Text as="span" color="blue.400">
              TO EXACT
            </Text>
            <br />
            <Text
              as="span"
              color="transparent"
              css={{
                WebkitTextStroke: "1.5px rgba(74,127,165,0.55)",
              }}
            >
              SPECIFICATION
            </Text>
          </Heading>

          <Text
            fontSize="0.975rem"
            fontWeight="300"
            color="rgba(250,251,252,0.55)"
            maxW="440px"
            lineHeight="1.8"
            mb="3rem"
          >
            From mimic panels and precision engraving to bespoke signage — we
            bring industrial accuracy and 40 years of South African expertise to
            every project.
          </Text>

          <HStack gap="1rem" flexWrap="wrap">
            <Button
              as="a"
              //href="#services"
              bg="blue.500"
              color="white"
              fontFamily="mono"
              fontSize="0.7rem"
              letterSpacing="0.14em"
              textTransform="uppercase"
              px="2.1rem"
              py="0.9rem"
              borderRadius="3px"
              _hover={{ bg: "blue.600", transform: "translateY(-2px)" }}
              transition="background 0.32s cubic-bezier(0.4,0,0.2,1), transform 0.32s cubic-bezier(0.4,0,0.2,1)"
            >
              Explore Services
            </Button>
            <Button
              as="a"
              //href="#contact"
              variant="outline"
              borderColor="rgba(74,127,165,0.4)"
              color="rgba(250,251,252,0.65)"
              fontFamily="mono"
              fontSize="0.7rem"
              letterSpacing="0.14em"
              textTransform="uppercase"
              px="2.1rem"
              py="0.9rem"
              borderRadius="3px"
              _hover={{
                borderColor: "blue.400",
                color: "blue.300",
                transform: "translateY(-2px)",
              }}
              transition="border-color 0.32s cubic-bezier(0.4,0,0.2,1), color 0.32s cubic-bezier(0.4,0,0.2,1), transform 0.32s cubic-bezier(0.4,0,0.2,1)"
            >
              Request a Quote
            </Button>
          </HStack>
        </Flex>

        {/* Hero Right - Panel Illustration */}
        <Flex
          align="center"
          justify="center"
          p={{ base: "4rem 2rem", lg: "6rem 3rem 6rem 2rem" }}
          position="relative"
          zIndex="1"
          display={{ base: "none", lg: "flex" }}
        >
          <Box position="relative">
            <Text
              fontFamily="mono"
              fontSize="0.58rem"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color="blue.400"
              mb="0.75rem"
              _before={{
                content: '""',
                display: "inline-block",
                w: "16px",
                h: "1px",
                bg: "blue.500",
                mr: "0.5rem",
                verticalAlign: "middle",
              }}
            >
              Mimic Panel · Mosaic System
            </Text>

            <Box
              w="300px"
              h="340px"
              background="linear-gradient(145deg, #252729, #3A3C3E)"
              border="1px solid rgba(74,127,165,0.25)"
              borderRadius="5px"
              position="relative"
              boxShadow="0 0 0 1px rgba(74,127,165,0.08), 0 32px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)"
              _before={{
                content: '""',
                position: "absolute",
                top: "14px",
                left: "14px",
                right: "14px",
                bottom: "14px",
                border: "1px solid rgba(74,127,165,0.12)",
                borderRadius: "3px",
              }}
            >
              {/* Panel Grid */}
              <Grid
                position="absolute"
                top="28px"
                left="28px"
                right="28px"
                bottom="28px"
                templateColumns="repeat(8, 1fr)"
                templateRows="repeat(9, 1fr)"
                gap="3px"
              >
                {Array.from({ length: 72 }).map((_, i) => (
                  <Box
                    key={i}
                    bg={
                      [
                        "rgba(74,127,165,0.55)",
                        "rgba(74,127,165,0.25)",
                        "rgba(74,127,165,0.7)",
                        "rgba(58,60,62,0.5)",
                        "rgba(58,60,62,0.35)",
                        "rgba(36,61,80,0.6)",
                        "rgba(100,150,184,0.4)",
                        "rgba(42,45,48,0.4)",
                      ][i % 8]
                    }
                    borderRadius="1px"
                    animation={pulseAnimation}
                  />
                ))}
              </Grid>

              {/* Panel Corners */}
              <Box
                position="absolute"
                top="6px"
                left="6px"
                w="8px"
                h="8px"
                borderTop="1px solid"
                borderLeft="1px solid"
                borderColor="blue.500"
                opacity="0.6"
              />
              <Box
                position="absolute"
                top="6px"
                right="6px"
                w="8px"
                h="8px"
                borderTop="1px solid"
                borderRight="1px solid"
                borderColor="blue.500"
                opacity="0.6"
              />
              <Box
                position="absolute"
                bottom="6px"
                left="6px"
                w="8px"
                h="8px"
                borderBottom="1px solid"
                borderLeft="1px solid"
                borderColor="blue.500"
                opacity="0.6"
              />
              <Box
                position="absolute"
                bottom="6px"
                right="6px"
                w="8px"
                h="8px"
                borderBottom="1px solid"
                borderRight="1px solid"
                borderColor="blue.500"
                opacity="0.6"
              />
            </Box>

            {/* Floating Badges */}
            <Box
              position="absolute"
              top="20px"
              right="-60px"
              bg="grey.800"
              border="1px solid rgba(74,127,165,0.3)"
              borderRadius="3px"
              p="0.6rem 0.85rem"
            >
              <Text
                fontFamily="heading"
                fontSize="1.4rem"
                color="blue.400"
                lineHeight="1"
              >
                40
                <Text as="span" fontSize="1rem" color="blue.300">
                  +
                </Text>
              </Text>
              <Text
                fontFamily="mono"
                fontSize="0.55rem"
                letterSpacing="0.14em"
                textTransform="uppercase"
                color="rgba(250,251,252,0.35)"
                mt="2px"
              >
                Years Active
              </Text>
            </Box>

            <Box
              position="absolute"
              bottom="40px"
              left="-65px"
              bg="grey.800"
              border="1px solid rgba(74,127,165,0.3)"
              borderRadius="3px"
              p="0.6rem 0.85rem"
            >
              <Text
                fontFamily="heading"
                fontSize="1.4rem"
                color="blue.400"
                lineHeight="1"
              >
                5
              </Text>
              <Text
                fontFamily="mono"
                fontSize="0.55rem"
                letterSpacing="0.14em"
                textTransform="uppercase"
                color="rgba(250,251,252,0.35)"
                mt="2px"
              >
                Services
              </Text>
            </Box>
          </Box>
        </Flex>

        {/* Hero Stats */}
        <HStack
          position="absolute"
          bottom={{ base: "2rem", lg: "3rem" }}
          left={{ base: "2rem", lg: "4rem" }}
          gap={{ base: "1.5rem", lg: "3rem" }}
          zIndex="2"
          flexWrap="wrap"
        >
          <VStack gap="3px" align="flex-start">
            <Text
              fontFamily="heading"
              fontSize="2.2rem"
              color="white"
              lineHeight="1"
            >
              40
              <Text as="span" color="blue.400">
                +
              </Text>
            </Text>
            <Text
              fontFamily="mono"
              fontSize="0.58rem"
              letterSpacing="0.16em"
              textTransform="uppercase"
              color="rgba(250,251,252,0.35)"
            >
              Years Experience
            </Text>
          </VStack>

          <VStack gap="3px" align="flex-start">
            <Text
              fontFamily="heading"
              fontSize="2.2rem"
              color="white"
              lineHeight="1"
            >
              5
            </Text>
            <Text
              fontFamily="mono"
              fontSize="0.58rem"
              letterSpacing="0.16em"
              textTransform="uppercase"
              color="rgba(250,251,252,0.35)"
            >
              Core Services
            </Text>
          </VStack>

          <VStack gap="3px" align="flex-start">
            <Text
              fontFamily="heading"
              fontSize="2.2rem"
              color="white"
              lineHeight="1"
            >
              100
              <Text as="span" color="blue.400">
                %
              </Text>
            </Text>
            <Text
              fontFamily="mono"
              fontSize="0.58rem"
              letterSpacing="0.16em"
              textTransform="uppercase"
              color="rgba(250,251,252,0.35)"
            >
              Custom Work
            </Text>
          </VStack>
        </HStack>
      </Box>

      {/* Marquee Horizontal Carasoul*/}
      <Box bg="blue.500" py="0.7rem" overflow="hidden">
        <Flex css={{ animation: marqueeAnimation }} whiteSpace="nowrap">
          {[
            "Mimic Panels",
            "Rotary Engraving",
            "Laser Engraving",
            "Custom Signage",
            "M1 Pro Printers",
            "Control Panels",
            "Name Plates",
            "Safety Signs",
            "Mimic Panels",
            "Rotary Engraving",
            "Laser Engraving",
            "Custom Signage",
            "M1 Pro Printers",
            "Control Panels",
            "Name Plates",
            "Safety Signs",
          ].map((item, index) => (
            <Text
              key={index}
              fontFamily="mono"
              fontSize="0.67rem"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color="rgba(255,255,255,0.85)"
              px="2rem"
              _before={{
                content: '"◆"',
                mr: "2rem",
                opacity: "0.45",
              }}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Box>

      <ServicesSection />
      <AboutSection />
      <CapabilitiesSection />
      <ContactSection />

      {/* Footer */}
      <Box
        as="footer"
        bg="#0F1113"
        borderTop="1px solid rgba(74,127,165,0.1)"
        py="2.25rem"
      >
        <Container maxW="1200px">
          <Text
            fontFamily="mono"
            fontSize="xs"
            letterSpacing="0.1em"
            color="rgba(250,251,252,0.2)"
            textAlign="center"
          >
            Mimic & Engraving Services CC. · Johannesburg, South Africa
          </Text>
        </Container>
      </Box>
    </Box>
  );
};
