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
  Input,
  Textarea,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";

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
const PanelIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="4" y="8" width="32" height="24" rx="2" />
    <circle cx="12" cy="16" r="2" fill="currentColor" stroke="none" />
    <circle cx="20" cy="16" r="2" fill="currentColor" stroke="none" />
    <circle cx="28" cy="16" r="2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="24" r="2" fill="currentColor" stroke="none" />
    <circle cx="20" cy="24" r="2" fill="currentColor" stroke="none" />
    <circle cx="28" cy="24" r="2" fill="currentColor" stroke="none" />
  </svg>
);

const EngravingIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M8 32 L20 8 L32 32" />
    <path d="M12 24 L28 24" />
    <circle cx="20" cy="8" r="2" fill="currentColor" stroke="none" />
  </svg>
);

const SignageIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="6" y="14" width="28" height="18" rx="2" />
    <path d="M14 14 V10 H26 V14" />
    <path d="M12 22 H28" />
    <path d="M12 27 H22" />
  </svg>
);

const PrintingIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M20 6 L34 14 V26 L20 34 L6 26 V14 Z" />
    <path d="M20 6 V34" />
    <path d="M6 14 L20 22 L34 14" />
  </svg>
);

const M1ProIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="6" y="10" width="28" height="22" rx="2" />
    <path d="M6 18 H34" />
    <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="18" cy="14" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

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
                <Text
                  as="a"
                  //href="#services"
                  fontFamily="mono"
                  fontSize="0.68rem"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  color="rgba(250,251,252,0.5)"
                  _hover={{ color: "blue.300" }}
                  transition="color 0.32s cubic-bezier(0.4,0,0.2,1)"
                >
                  Services
                </Text>
                <Text
                  as="a"
                  //href="#about"
                  fontFamily="mono"
                  fontSize="0.68rem"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  color="rgba(250,251,252,0.5)"
                  _hover={{ color: "blue.300" }}
                  transition="color 0.32s cubic-bezier(0.4,0,0.2,1)"
                >
                  About
                </Text>
                <Text
                  as="a"
                  //href="#capabilities"
                  fontFamily="mono"
                  fontSize="0.68rem"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  color="rgba(250,251,252,0.5)"
                  _hover={{ color: "blue.300" }}
                  transition="color 0.32s cubic-bezier(0.4,0,0.2,1)"
                >
                  Capabilities
                </Text>
                <Button
                  as="a"
                  //href="#contact"
                  bg="blue.500"
                  color="white"
                  fontFamily="mono"
                  fontSize="0.68rem"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  px="1.2rem"
                  py="0.5rem"
                  borderRadius="3px"
                  _hover={{ bg: "blue.600" }}
                  transition="background 0.32s cubic-bezier(0.4,0,0.2,1)"
                >
                  Get a Quote
                </Button>
              </HStack>
            )}
            {/* Mobile Nav Bar */}
            {isMobile && (
              <IconButton
                aria-label="Menu"
                variant="ghost"
                color="white"
                size="sm"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </IconButton>
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
            From mimic panels and precision engraving to 3D printing and bespoke
            signage — we bring industrial accuracy and 40 years of South African
            expertise to every project.
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
            "3D Printing",
            "M1 Pro Printing",
            "Control Panels",
            "Name Plates",
            "Safety Signs",
            "Mimic Panels",
            "Rotary Engraving",
            "Laser Engraving",
            "Custom Signage",
            "3D Printing",
            "M1 Pro Printing",
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

      {/* Services Section */}
      <Box as="section" id="services" py="7rem" bg="gray.50">
        <Container maxW="1200px">
          <Flex
            justify="space-between"
            align="flex-end"
            mb="4rem"
            direction={{ base: "column", md: "row" }}
            gap={{ base: "1rem", md: "0" }}
          >
            <Box>
              {/* <Text
                fontFamily="mono"
                fontSize="0.65rem"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color="blue.500"
              >
                What We Do
              </Text> */}
              <Heading
                fontFamily="heading"
                fontSize={{ base: "2.4rem", lg: "3.4rem" }}
                letterSpacing="0.05em"
                color="grey.900"
                lineHeight="1.05"
                mt="0.5rem"
              >
                OUR{" "}
                <Text as="span" color="grey.600">
                  SERVICES
                </Text>
              </Heading>
            </Box>
            {/* <Text
              as="a"
              href="#contact"
              fontFamily="mono"
              fontSize="0.68rem"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="blue.500"
              _hover={{ pl: "1rem" }}
              transition="padding-left 0.32s cubic-bezier(0.4,0,0.2,1)"
              pb="2px"
            >
              All Services →
            </Text> */}
          </Flex>

          <Box>
            {/* First 3 services - full width row */}
            <Grid
              templateColumns={{
                base: "1fr",
                md: "1fr 1fr",
                lg: "repeat(3, 1fr)",
              }}
              gap="2rem"
              mb="2rem"
            >
            {/* Service - Mimic Panels */}
            <Flex
              bg="white"
              p="2.5rem 2.25rem"
              position="relative"
              borderRadius="12px"
              border="1px solid"
              borderColor="gray.200"
              boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              _hover={{
                bg: "blue.50",
                borderColor: "blue.300",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                transform: "translateY(-4px)",
              }}
              transition="all 0.32s cubic-bezier(0.4,0,0.2,1)"
              gap="3"
              direction="column"
            >
              <Flex align="center" gap="1rem" mb="0.7rem">
                <Box
                  w="38px"
                  h="38px"
                  color="grey.600"
                >
                  <PanelIcon />
                </Box>
                <Heading
                  fontFamily="heading"
                  fontSize="1.45rem"
                  letterSpacing="0.07em"
                  color="blue.600"
                >
                  MIMIC PANELS
                </Heading>
              </Flex>
              <Text
                fontSize="0.855rem"
                color="grey.600"
                lineHeight="1.75"
                fontWeight="300"
                fontStyle="italic"
              >
                Mosaic-system panels built on polycarbonate glass-filled fibre
                tiles. UV stable, shock resistant modules in 18×18mm, 24×24mm
                and 48×48mm sizes — light grey or black standard.
              </Text>
              <HStack gap="0.35rem" mt="1.2rem" flexWrap="wrap">
                {[
                  "Mosaic Tiles",
                  "Grid Systems",
                  "Push Buttons",
                  "LED Mounting",
                ].map((pill) => (
                  <Text
                    key={pill}
                    fontFamily="mono"
                    fontSize="0.58rem"
                    letterSpacing="0.1em"
                    textTransform="uppercase"
                    bg="grey.100"
                    color="grey.600"
                    px="0.6rem"
                    py="0.22rem"
                    borderRadius="2px"
                  >
                    {pill}
                  </Text>
                ))}
              </HStack>
            </Flex>

            {/* Service - Engraving */}
            <Flex
              bg="white"
              p="2.5rem 2.25rem"
              position="relative"
              borderRadius="12px"
              border="1px solid"
              borderColor="gray.200"
              boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              _hover={{
                bg: "blue.50",
                borderColor: "blue.300",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                transform: "translateY(-4px)",
              }}
              transition="all 0.32s cubic-bezier(0.4,0,0.2,1)"
              gap="3"
              direction="column"
            >
              <Flex align="center" gap="1rem" mb="0.7rem">
                <Box
                  w="38px"
                  h="38px"
                  color="grey.600"
                >
                  <EngravingIcon />
                </Box>
                <Heading
                  fontFamily="heading"
                  fontSize="1.45rem"
                  letterSpacing="0.07em"
                  color="blue.600"
                >
                  ENGRAVING
                </Heading>
              </Flex>
              <Text
                fontSize="0.855rem"
                color="grey.600"
                lineHeight="1.75"
                fontWeight="300"
                fontStyle="italic"
              >
                Industrial engraving via computerised rotary, laser surface and
                manual machines. Control panels, commemorative plaques, valve
                tags, machine diagrams — anything requiring precision marking.
              </Text>
              <HStack gap="0.35rem" mt="1.2rem" flexWrap="wrap">
                {["Rotary", "Laser Surface", "Plaques", "Badges"].map(
                  (pill) => (
                    <Text
                      key={pill}
                      fontFamily="mono"
                      fontSize="0.58rem"
                      letterSpacing="0.1em"
                      textTransform="uppercase"
                      bg="grey.100"
                      color="grey.600"
                      px="0.6rem"
                      py="0.22rem"
                      borderRadius="2px"
                    >
                      {pill}
                    </Text>
                  ),
                )}
              </HStack>
            </Flex>

            {/* Service - Signage */}
            <Flex
              bg="white"
              p="2.5rem 2.25rem"
              position="relative"
              borderRadius="12px"
              border="1px solid"
              borderColor="gray.200"
              boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              _hover={{
                bg: "blue.50",
                borderColor: "blue.300",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                transform: "translateY(-4px)",
              }}
              transition="all 0.32s cubic-bezier(0.4,0,0.2,1)"
              gap="3"
              direction="column"
            >
              <Flex align="center" gap="1rem" mb="0.7rem">
                <Box
                  w="38px"
                  h="38px"
                  color="grey.600"
                >
                  <SignageIcon />
                </Box>
                <Heading
                  fontFamily="heading"
                  fontSize="1.45rem"
                  letterSpacing="0.07em"
                  color="blue.600"
                >
                  SIGNAGE
                </Heading>
              </Flex>
              <Text
                fontSize="0.855rem"
                color="grey.600"
                lineHeight="1.75"
                fontWeight="300"
                fontStyle="italic"
              >
                Custom corporate and industrial signage — cut-out letters,
                sandblasted glass, light boxes, illuminated letters and
                directional systems tailored to your brand and environment.
              </Text>
              <HStack gap="0.35rem" mt="1.2rem" flexWrap="wrap">
                {["Cut-Out", "Sandblast", "Light Boxes", "Directional"].map(
                  (pill) => (
                    <Text
                      key={pill}
                      fontFamily="mono"
                      fontSize="0.58rem"
                      letterSpacing="0.1em"
                      textTransform="uppercase"
                      bg="grey.100"
                      color="grey.600"
                      px="0.6rem"
                      py="0.22rem"
                      borderRadius="2px"
                    >
                      {pill}
                    </Text>
                  ),
                )}
              </HStack>
            </Flex>
            </Grid>

            {/* Last 2 services - centered on desktop */}
            <Grid
              templateColumns={{
                base: "1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr",
              }}
              gap="2rem"
              justifyItems="center"
              maxW={{ lg: "800px" }}
              mx="auto"
            >

            {/* Service - 3D Printing */}
            <Flex
              bg="white"
              p="2.5rem 2.25rem"
              position="relative"
              borderRadius="12px"
              border="1px solid"
              borderColor="gray.200"
              boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              _hover={{
                bg: "blue.50",
                borderColor: "blue.300",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                transform: "translateY(-4px)",
              }}
              transition="all 0.32s cubic-bezier(0.4,0,0.2,1)"
              gap="3"
              direction="column"
            >
              <Flex align="center" gap="1rem" mb="0.7rem">
                <Box
                  w="38px"
                  h="38px"
                  color="grey.600"
                >
                  <PrintingIcon />
                </Box>
                <Heading
                  fontFamily="heading"
                  fontSize="1.45rem"
                  letterSpacing="0.07em"
                  color="blue.600"
                >
                  3D PRINTING
                </Heading>
              </Flex>
              <Text
                fontSize="0.855rem"
                color="grey.600"
                lineHeight="1.75"
                fontWeight="300"
                fontStyle="italic"
              >
                Professional 3D printing for prototypes, industrial components
                and custom parts. High-resolution output in a range of materials
                suited to commercial and engineering requirements.
              </Text>
              <HStack gap="0.35rem" mt="1.2rem" flexWrap="wrap">
                {["Prototypes", "Components", "Custom Parts"].map((pill) => (
                  <Text
                    key={pill}
                    fontFamily="mono"
                    fontSize="0.58rem"
                    letterSpacing="0.1em"
                    textTransform="uppercase"
                    bg="grey.100"
                    color="grey.600"
                    px="0.6rem"
                    py="0.22rem"
                    borderRadius="2px"
                  >
                    {pill}
                  </Text>
                ))}
              </HStack>
            </Flex>

            {/* Service - M1 Pro Printing */}
            <Flex
              bg="white"
              p="2.5rem 2.25rem"
              position="relative"
              borderRadius="12px"
              border="1px solid"
              borderColor="gray.200"
              boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              _hover={{
                bg: "blue.50",
                borderColor: "blue.300",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                transform: "translateY(-4px)",
              }}
              transition="all 0.32s cubic-bezier(0.4,0,0.2,1)"
              gap="3"
              direction="column"
            >
              <Flex align="center" gap="1rem" mb="0.7rem">
                <Box
                  w="38px"
                  h="38px"
                  color="grey.600"
                >
                  <M1ProIcon />
                </Box>
                <Heading
                  fontFamily="heading"
                  fontSize="1.45rem"
                  letterSpacing="0.07em"
                  color="blue.600"
                >
                  M1 PRO PRINTING
                </Heading>
              </Flex>
              <Text
                fontSize="0.855rem"
                color="grey.600"
                lineHeight="1.75"
                fontWeight="300"
                fontStyle="italic"
              >
                High-quality M1 Pro output with a full range of consumables.
                Ideal for instrument panel labels, overlays and
                precision-printed materials across industrial and commercial
                sectors.
              </Text>
              <HStack gap="0.35rem" mt="1.2rem" flexWrap="wrap">
                {["Labels", "Overlays", "Consumables", "Panels"].map((pill) => (
                  <Text
                    key={pill}
                    fontFamily="mono"
                    fontSize="0.58rem"
                    letterSpacing="0.1em"
                    textTransform="uppercase"
                    bg="grey.100"
                    color="grey.600"
                    px="0.6rem"
                    py="0.22rem"
                    borderRadius="2px"
                  >
                    {pill}
                  </Text>
                ))}
              </HStack>
            </Flex>
            </Grid>
          </Box>

            {/* CTA Card */}
            {/* <Box
              bg="blue.900"
              p="2.5rem 2.25rem"
              display="flex"
              flexDirection="column"
              justify="center"
              align="flex-start"
            >
              <Text
                fontFamily="mono"
                fontSize="0.62rem"
                letterSpacing="0.18em"
                textTransform="uppercase"
                color="blue.400"
                mb="1rem"
              >
                Get Started
              </Text>
              <Heading
                fontFamily="heading"
                fontSize="1.55rem"
                letterSpacing="0.06em"
                color="white"
                lineHeight="1.15"
                mb="1.25rem"
              >
                NOT SURE WHICH SERVICE YOU NEED?
              </Heading>
              <Text
                fontSize="0.82rem"
                color="rgba(250,251,252,0.45)"
                fontWeight="300"
                lineHeight="1.7"
                mb="2rem"
              >
                Speak directly with our team — we'll advise on the right
                approach for your project.
              </Text>
              <Button
                as="a"
                href="#contact"
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
                Contact Us →
              </Button>
            </Box> */}
        </Container>
      </Box>

      {/* About Section */}
      <Box
        as="section"
        id="about"
        bg="grey.800"
        py="7rem"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1200px">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap="6rem"
            alignItems="center"
            position="relative"
            zIndex="1"
          >
            <Box>
              {/* <HStack gap="1rem" mb="2rem">
                <Image
                  src="https://www.mimicengraving.co.za/assets/images/content/logo.png"
                  alt="Mimic Engraving"
                  h="44px"
                  filter="brightness(0) invert(1)"
                  opacity="0.85"
                />
                <Box w="1px" h="36px" bg="rgba(74,127,165,0.3)" />
                <Text
                  fontFamily="mono"
                  fontSize="0.6rem"
                  letterSpacing="0.16em"
                  textTransform="uppercase"
                  color="blue.400"
                  lineHeight="1.5"
                >
                  Est. Johannesburg
                  <br />
                  South Africa
                </Text>
              </HStack> */}

              <Heading
                fontFamily="heading"
                fontSize={{ base: "2.4rem", lg: "3.2rem" }}
                letterSpacing="0.04em"
                lineHeight="1.05"
                color="white"
                mb="1.5rem"
              >
                40+ YEARS OF
                <br />
                <Text as="span" color="blue.400">
                  INDUSTRIAL CRAFT
                </Text>
              </Heading>

              <Text
                fontSize="0.92rem"
                fontWeight="300"
                color="rgba(250,251,252,0.55)"
                lineHeight="1.85"
                mb="1.25rem"
              >
                Mimic & Engraving Services CC has been a trusted partner to
                South African industry for over four decades. Based in
                Greenside, Johannesburg, we combine time-tested craftsmanship
                with modern computerised machinery.
              </Text>

              <Text
                fontSize="0.92rem"
                fontWeight="300"
                color="rgba(250,251,252,0.55)"
                lineHeight="1.85"
                mb="1.25rem"
              >
                Whether you need a single bespoke plaque or a complete mimic
                panel installation, every job is handled with the same precision
                and attention to detail that has defined us since day one.
              </Text>

              {/* <Box
                fontFamily="mono"
                fontSize="0.68rem"
                letterSpacing="0.12em"
                color="rgba(250,251,252,0.3)"
                borderTop="1px solid rgba(74,127,165,0.2)"
                pt="1.5rem"
                mt="1.5rem"
                lineHeight="2"
              >
                Barry Hertzog Avenue · Greenside · Johannesburg
                <br />
                (011) 646 7539 · design@mimicengraving.co.za
              </Box> */}
            </Box>

            <Grid
              templateColumns="1fr 1fr"
              gap="1px"
              bg="rgba(74,127,165,0.15)"
            >
              <Box
                bg="grey.800"
                p="2rem 1.75rem"
                _hover={{ bg: "#2a2d30" }}
                transition="background 0.32s cubic-bezier(0.4,0,0.2,1)"
              >
                <Text
                  fontFamily="heading"
                  fontSize="2.8rem"
                  color="blue.400"
                  lineHeight="1"
                  mb="0.4rem"
                >
                  40+
                </Text>
                <Text
                  fontSize="0.8rem"
                  fontWeight="300"
                  color="rgba(250,251,252,0.45)"
                  lineHeight="1.5"
                >
                  Years serving South African industry
                </Text>
              </Box>

              <Box
                bg="grey.800"
                p="2rem 1.75rem"
                _hover={{ bg: "#2a2d30" }}
                transition="background 0.32s cubic-bezier(0.4,0,0.2,1)"
              >
                <Text
                  fontFamily="heading"
                  fontSize="2.8rem"
                  color="blue.400"
                  lineHeight="1"
                  mb="0.4rem"
                >
                  5
                </Text>
                <Text
                  fontSize="0.8rem"
                  fontWeight="300"
                  color="rgba(250,251,252,0.45)"
                  lineHeight="1.5"
                >
                  Specialised service offerings
                </Text>
              </Box>

              <Box
                bg="grey.800"
                p="2rem 1.75rem"
                _hover={{ bg: "#2a2d30" }}
                transition="background 0.32s cubic-bezier(0.4,0,0.2,1)"
              >
                <Text
                  fontFamily="heading"
                  fontSize="2.8rem"
                  color="blue.400"
                  lineHeight="1"
                  mb="0.4rem"
                >
                  3
                </Text>
                <Text
                  fontSize="0.8rem"
                  fontWeight="300"
                  color="rgba(250,251,252,0.45)"
                  lineHeight="1.5"
                >
                  Engraving machine types on-site
                </Text>
              </Box>

              <Box
                bg="grey.800"
                p="2rem 1.75rem"
                _hover={{ bg: "#2a2d30" }}
                transition="background 0.32s cubic-bezier(0.4,0,0.2,1)"
              >
                <Text
                  fontFamily="heading"
                  fontSize="2.8rem"
                  color="blue.400"
                  lineHeight="1"
                  mb="0.4rem"
                >
                  JHB
                </Text>
                <Text
                  fontSize="0.8rem"
                  fontWeight="300"
                  color="rgba(250,251,252,0.45)"
                  lineHeight="1.5"
                >
                  Greenside, Johannesburg based
                </Text>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Capabilities Section */}
      <Box as="section" id="capabilities" py="7rem" bg="#F5F6F7">
        <Container maxW="1200px">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap="5rem"
            alignItems="flex-start"
          >
            <Box>
              <Text
                fontFamily="mono"
                fontSize="0.65rem"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color="blue.500"
              >
                Capabilities
              </Text>
              <Heading
                fontFamily="heading"
                fontSize={{ base: "2.2rem", lg: "3rem" }}
                letterSpacing="0.05em"
                lineHeight="1.05"
                color="grey.900"
                my="0.75rem"
              >
                PRECISION AT
                <br />
                <Text as="span" color="grey.600">
                  EVERY SCALE
                </Text>
              </Heading>
              <Text
                fontSize="0.88rem"
                color="grey.500"
                fontWeight="300"
                lineHeight="1.85"
                mb="2.5rem"
              >
                From consecutively numbered labels to full fire-zone machine
                diagrams — if it requires precision engraving, marking or
                forming, we have the machinery and expertise to deliver.
              </Text>

              <VStack gap="0" align="stretch">
                {[
                  {
                    title: "Rotary & Laser Engraving",
                    desc: "computerised machines for high-accuracy surface engraving on metal, plastic and more.",
                  },
                  {
                    title: "Rear & Reverse Engraving",
                    desc: "subsurface techniques for premium panels and overlays.",
                  },
                  {
                    title: "Enclosure Machining",
                    desc: "milling component recesses and mounting points to exact specification.",
                  },
                  {
                    title: "High-Volume Labelling",
                    desc: "consecutively numbered series, valve discs and hydraulic labels.",
                  },
                  {
                    title: "Wide Material Range",
                    desc: "anodised aluminium, acrylic, brass, stainless, engravers' plastics and more.",
                  },
                ].map((item, index) => (
                  <Flex
                    key={index}
                    align="flex-start"
                    gap="1rem"
                    py="1rem"
                    borderBottom="1px solid rgba(92,92,92,0.12)"
                    _hover={{ pl: "0.6rem" }}
                    transition="padding-left 0.32s cubic-bezier(0.4,0,0.2,1)"
                    cursor="default"
                  >
                    <Box
                      w="6px"
                      h="6px"
                      borderRadius="50%"
                      bg="blue.500"
                      flexShrink="0"
                      mt="0.58rem"
                    />
                    <Text
                      fontSize="0.875rem"
                      color="grey.900"
                      lineHeight="1.65"
                    >
                      <Text as="span" fontWeight="500">
                        {item.title}
                      </Text>{" "}
                      — {item.desc}
                    </Text>
                  </Flex>
                ))}
              </VStack>
            </Box>

            <VStack gap="1px" bg="rgba(92,92,92,0.12)">
              {[
                {
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="10" cy="10" r="7" />
                      <path d="M10 6 V10 L13 13" />
                    </svg>
                  ),
                  title: "Fast Turnaround",
                  desc: "In-house machinery means tight deadlines are met without compromising quality.",
                },
                {
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M4 10 L8 14 L16 6" />
                    </svg>
                  ),
                  title: "High-Grade Materials",
                  desc: "We stock a wide range of substrates suited to any industrial environment.",
                },
                {
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="3" width="14" height="14" rx="1" />
                      <path d="M7 10 H13" />
                      <path d="M10 7 V13" />
                    </svg>
                  ),
                  title: "Fully Custom",
                  desc: "Every job is built from scratch to your specification. No templates, no compromises.",
                },
                {
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M10 3 L13 8 L18 8 L14 12 L16 17 L10 14 L4 17 L6 12 L2 8 L7 8 Z" />
                    </svg>
                  ),
                  title: "Expert Advice",
                  desc: "We guide you through material selection, sizing and finish to get the best result.",
                },
              ].map((item, index) => (
                <Flex
                  key={index}
                  bg="white"
                  p="1.75rem 2rem"
                  gap="1.35rem"
                  align="flex-start"
                  _hover={{ bg: "blue.50" }}
                  transition="background 0.32s cubic-bezier(0.4,0,0.2,1)"
                >
                  <Flex
                    w="42px"
                    h="42px"
                    flexShrink="0"
                    bg="grey.100"
                    borderRadius="3px"
                    align="center"
                    justify="center"
                    color="grey.600"
                    transition="background 0.32s cubic-bezier(0.4,0,0.2,1), color 0.32s cubic-bezier(0.4,0,0.2,1)"
                    // sx={{
                    //   ".chakra-ui-light &:hover": {
                    //     bg: "blue.500",
                    //     color: "white",
                    //   },
                    // }}
                  >
                    {item.icon}
                  </Flex>
                  <Box>
                    <Heading
                      fontFamily="heading"
                      fontSize="1.15rem"
                      letterSpacing="0.07em"
                      color="grey.900"
                      mb="0.3rem"
                    >
                      {item.title.toUpperCase()}
                    </Heading>
                    <Text
                      fontSize="0.8rem"
                      color="grey.500"
                      fontWeight="300"
                      lineHeight="1.65"
                    >
                      {item.desc}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        as="section"
        id="contact"
        bg="grey.900"
        py="7rem"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: "absolute",
          inset: "0",
          backgroundImage:
            "linear-gradient(rgba(74,127,165,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,127,165,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        _after={{
          content: '""',
          position: "absolute",
          bottom: "-200px",
          left: "-200px",
          w: "500px",
          h: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(74,127,165,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      >
        <Container maxW="1200px">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap="6rem"
            position="relative"
            zIndex="1"
          >
            <Box>
              <Text
                fontFamily="mono"
                fontSize="0.65rem"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color="blue.300"
              >
                Get In Touch
              </Text>
              <Heading
                fontFamily="heading"
                fontSize={{ base: "2.4rem", lg: "3.2rem" }}
                letterSpacing="0.04em"
                lineHeight="1.05"
                color="white"
                my="0.75rem"
              >
                LET'S BUILD
                <br />
                <Text as="span" color="blue.400">
                  SOMETHING PRECISE
                </Text>
              </Heading>
              <Text
                fontSize="0.88rem"
                color="rgba(250,251,252,0.5)"
                fontWeight="300"
                lineHeight="1.85"
                mb="2.5rem"
              >
                Ready to start a project or need a quote? Reach out directly to
                our team in Greenside, Johannesburg.
              </Text>

              <VStack gap="1.25rem" align="stretch">
                {[
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      >
                        <path d="M2 4 L8 9 L14 4" />
                        <rect x="2" y="3" width="12" height="10" rx="1" />
                      </svg>
                    ),
                    label: "Email",
                    value: "design@mimicengraving.co.za",
                  },
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      >
                        <path d="M3 2 L6 2 L7.5 5.5 L5.5 6.5 C6.3 8.3 7.7 9.7 9.5 10.5 L10.5 8.5 L14 10 L14 13 C14 13.6 13.6 14 13 14 C7 14 2 9 2 3 C2 2.4 2.4 2 3 2Z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: "(011) 646 7539 · 072 342 1357",
                  },
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      >
                        <path d="M8 1.5 C5.5 1.5 3 3.7 3 6.5 C3 10 8 14.5 8 14.5 C8 14.5 13 10 13 6.5 C13 3.7 10.5 1.5 8 1.5Z" />
                        <circle cx="8" cy="6.5" r="1.8" />
                      </svg>
                    ),
                    label: "Address",
                    value: "Barry Hertzog Avenue, Greenside, Johannesburg",
                  },
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      >
                        <circle cx="8" cy="6" r="2.5" />
                        <path d="M3 14 C3 11 5.2 9 8 9 C10.8 9 13 11 13 14" />
                      </svg>
                    ),
                    label: "Contact",
                    value: "Trever Moyo — Design & Sales",
                  },
                ].map((item, index) => (
                  <Flex key={index} gap="0.9rem" align="flex-start">
                    <Flex
                      w="36px"
                      h="36px"
                      flexShrink="0"
                      border="1px solid rgba(74,127,165,0.3)"
                      borderRadius="3px"
                      align="center"
                      justify="center"
                      color="blue.400"
                    >
                      {item.icon}
                    </Flex>
                    <Box>
                      <Text
                        fontFamily="mono"
                        fontSize="0.57rem"
                        letterSpacing="0.18em"
                        textTransform="uppercase"
                        color="rgba(250,251,252,0.3)"
                        mb="2px"
                      >
                        {item.label}
                      </Text>
                      <Text
                        fontSize="0.875rem"
                        color="rgba(250,251,252,0.7)"
                        fontWeight="300"
                      >
                        {item.value}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </VStack>
            </Box>

            <VStack gap="0.9rem" align="stretch">
              <Grid templateColumns="1fr 1fr" gap="0.9rem">
                <Box>
                  <Text
                    fontFamily="mono"
                    fontSize="0.58rem"
                    letterSpacing="0.18em"
                    textTransform="uppercase"
                    color="rgba(250,251,252,0.35)"
                    mb="0.4rem"
                  >
                    First Name
                  </Text>
                  <Input
                    bg="rgba(255,255,255,0.04)"
                    border="1px solid rgba(74,127,165,0.2)"
                    borderRadius="3px"
                    color="white"
                    fontFamily="body"
                    fontSize="0.875rem"
                    fontWeight="300"
                    placeholder="Your name"
                    _placeholder={{ color: "rgba(250,251,252,0.22)" }}
                    _focus={{
                      borderColor: "blue.500",
                      bg: "rgba(74,127,165,0.06)",
                    }}
                    transition="border-color 0.32s cubic-bezier(0.4,0,0.2,1), background 0.32s cubic-bezier(0.4,0,0.2,1)"
                  />
                </Box>
                <Box>
                  <Text
                    fontFamily="mono"
                    fontSize="0.58rem"
                    letterSpacing="0.18em"
                    textTransform="uppercase"
                    color="rgba(250,251,252,0.35)"
                    mb="0.4rem"
                  >
                    Last Name
                  </Text>
                  <Input
                    bg="rgba(255,255,255,0.04)"
                    border="1px solid rgba(74,127,165,0.2)"
                    borderRadius="3px"
                    color="white"
                    fontFamily="body"
                    fontSize="0.875rem"
                    fontWeight="300"
                    placeholder="Your surname"
                    _placeholder={{ color: "rgba(250,251,252,0.22)" }}
                    _focus={{
                      borderColor: "blue.500",
                      bg: "rgba(74,127,165,0.06)",
                    }}
                    transition="border-color 0.32s cubic-bezier(0.4,0,0.2,1), background 0.32s cubic-bezier(0.4,0,0.2,1)"
                  />
                </Box>
              </Grid>

              <Box>
                <Text
                  fontFamily="mono"
                  fontSize="0.58rem"
                  letterSpacing="0.18em"
                  textTransform="uppercase"
                  color="rgba(250,251,252,0.35)"
                  mb="0.4rem"
                >
                  Email Address
                </Text>
                <Input
                  type="email"
                  bg="rgba(255,255,255,0.04)"
                  border="1px solid rgba(74,127,165,0.2)"
                  borderRadius="3px"
                  color="white"
                  fontFamily="body"
                  fontSize="0.875rem"
                  fontWeight="300"
                  placeholder="you@company.co.za"
                  _placeholder={{ color: "rgba(250,251,252,0.22)" }}
                  _focus={{
                    borderColor: "blue.500",
                    bg: "rgba(74,127,165,0.06)",
                  }}
                  transition="border-color 0.32s cubic-bezier(0.4,0,0.2,1), background 0.32s cubic-bezier(0.4,0,0.2,1)"
                />
              </Box>

              <Box>
                <Text
                  fontFamily="mono"
                  fontSize="0.58rem"
                  letterSpacing="0.18em"
                  textTransform="uppercase"
                  color="rgba(250,251,252,0.35)"
                  mb="0.4rem"
                >
                  Service Required
                </Text>
                {/* <Select
                  bg="rgba(255,255,255,0.04)"
                  border="1px solid rgba(74,127,165,0.2)"
                  borderRadius="3px"
                  color="white"
                  fontFamily="body"
                  fontSize="0.875rem"
                  fontWeight="300"
                  placeholder="Select a service…"
                  _focus={{
                    borderColor: "blue.500",
                    bg: "rgba(74,127,165,0.06)"
                  }}
                  transition="border-color 0.32s cubic-bezier(0.4,0,0.2,1), background 0.32s cubic-bezier(0.4,0,0.2,1)"
                >
                  <option value="mimic-panels" style={{ background: '#1A1C1E' }}>Mimic Panels</option>
                  <option value="engraving" style={{ background: '#1A1C1E' }}>Engraving</option>
                  <option value="signage" style={{ background: '#1A1C1E' }}>Signage</option>
                  <option value="3d-printing" style={{ background: '#1A1C1E' }}>3D Printing</option>
                  <option value="m1-pro-printing" style={{ background: '#1A1C1E' }}>M1 Pro Printing</option>
                  <option value="multiple" style={{ background: '#1A1C1E' }}>Multiple / Not Sure</option>
                </Select> */}
              </Box>

              <Box>
                <Text
                  fontFamily="mono"
                  fontSize="0.58rem"
                  letterSpacing="0.18em"
                  textTransform="uppercase"
                  color="rgba(250,251,252,0.35)"
                  mb="0.4rem"
                >
                  Project Details
                </Text>
                <Textarea
                  bg="rgba(255,255,255,0.04)"
                  border="1px solid rgba(74,127,165,0.2)"
                  borderRadius="3px"
                  color="white"
                  fontFamily="body"
                  fontSize="0.875rem"
                  fontWeight="300"
                  minH="115px"
                  resize="vertical"
                  placeholder="Describe your project, quantities, materials or any specific requirements…"
                  _placeholder={{ color: "rgba(250,251,252,0.22)" }}
                  _focus={{
                    borderColor: "blue.500",
                    bg: "rgba(74,127,165,0.06)",
                  }}
                  transition="border-color 0.32s cubic-bezier(0.4,0,0.2,1), background 0.32s cubic-bezier(0.4,0,0.2,1)"
                />
              </Box>

              <Button
                bg="blue.500"
                color="white"
                fontFamily="mono"
                fontSize="0.7rem"
                letterSpacing="0.14em"
                textTransform="uppercase"
                px="2rem"
                py="0.95rem"
                borderRadius="3px"
                _hover={{ bg: "blue.600", transform: "translateY(-2px)" }}
                transition="background 0.32s cubic-bezier(0.4,0,0.2,1), transform 0.32s cubic-bezier(0.4,0,0.2,1)"
              >
                Send Enquiry →
              </Button>
            </VStack>
          </Grid>
        </Container>
      </Box>

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
            fontSize="0.58rem"
            letterSpacing="0.1em"
            color="rgba(250,251,252,0.2)"
            textAlign="center"
          >
            Mimic & Engraving Services CC. · Johannesburg, South Africa
          </Text>
          {/* <Flex
            align="center"
            justify="space-between"
            flexWrap="wrap"
            gap="1rem"
            direction={{ base: "column", md: "row" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Flex align="center" gap="0.75rem">
              <Image
                src={logoImage}
                alt="Mimic Engraving"
                h="45px"
              />
            </Flex>

            <HStack
              gap="2rem"
              justify={{ base: "center", md: "flex-start" }}
              flexWrap="wrap"
            >
              {["Services", "About", "Capabilities", "Contact"].map((link) => (
                <Text
                  key={link}
                  as="a"
                  href={`#${link.toLowerCase()}`}
                  fontFamily="mono"
                  fontSize="0.6rem"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  color="rgba(250,251,252,0.25)"
                  _hover={{ color: "blue.400" }}
                  transition="color 0.32s cubic-bezier(0.4,0,0.2,1)"
                >
                  {link}
                </Text>
              ))}
            </HStack>

            <Text
              fontFamily="mono"
              fontSize="0.58rem"
              letterSpacing="0.1em"
              color="rgba(250,251,252,0.2)"
            >
              2025 Mimic & Engraving Services CC. · Johannesburg, South Africa
            </Text>
          </Flex> */}
        </Container>
      </Box>
    </Box>
  );
};
