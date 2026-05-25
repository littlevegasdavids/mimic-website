import {
  Box,
  Flex,
  HStack,
  Heading,
  Button,
  Grid,
  VStack,
  Text,
} from "@chakra-ui/react";

const marqueeAnimation = "marquee 26s linear infinite";
const pulseAnimation = "pulse 2s ease-in-out infinite";

export const HeroSection = () => {
  return (
    <>
      <Box
        minH="100vh"
        bg="bg.dark"
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
            backgroundImage="linear-gradient(var(--chakra-colors-accent-ghostBg) 1px, transparent 1px), linear-gradient(90deg, var(--chakra-colors-accent-ghostBg) 1px, transparent 1px)"
            backgroundSize="52px 52px"
          />
          <Box
            position="absolute"
            w="600px"
            h="600px"
            borderRadius="50%"
            background="radial-gradient(circle, var(--chakra-colors-accent-glowBg) 0%, transparent 70%)"
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
                WebkitTextStroke: `1.5px var(--chakra-colors-blue-500)`,
                opacity: 0.55,
              }}
            >
              SPECIFICATION
            </Text>
          </Heading>

          <Text
            fontSize="0.975rem"
            fontWeight="300"
            color="grey.50/55"
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
              borderColor="blue.500/40"
              color="grey.50/65"
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
              background={`linear-gradient(145deg, var(--chakra-colors-grey-800), var(--chakra-colors-grey-700))`}
              border="1px solid"
              borderColor="blue.500/25"
              borderRadius="5px"
              position="relative"
              boxShadow={`0 0 0 1px var(--chakra-colors-accent-subtleBg), 0 32px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)`}
              _before={{
                content: '""',
                position: "absolute",
                top: "14px",
                left: "14px",
                right: "14px",
                bottom: "14px",
                border: `1px solid var(--chakra-colors-accent-glowBg)`,
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
                        "blue.500/55",
                        "blue.500/25",
                        "blue.500/70",
                        "grey.700/50",
                        "grey.700/35",
                        "blue.800/60",
                        "blue.400/40",
                        "grey.750/40",
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
              bg="bg.surface"
              border="1px solid"
              borderColor="border.accentStrong"
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
                color="fg.faint"
                mt="2px"
              >
                Years Active
              </Text>
            </Box>

            <Box
              position="absolute"
              bottom="40px"
              left="-65px"
              bg="bg.surface"
              border="1px solid"
              borderColor="border.accentStrong"
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
                color="fg.faint"
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
              color="fg.faint"
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
              color="fg.faint"
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
              color="fg.faint"
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
              color="white/85"
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
    </>
  );
};
