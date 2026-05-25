import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export const CapabilitiesSection = () => (
  <Box
    as="section"
    id="capabilities"
    py="7rem"
    bg="bg.lightAlt"
    position="relative"
    overflow="hidden"
  >
    <Box position="absolute" inset="0" pointerEvents="none">
      <Box
        position="absolute"
        w="350px"
        h="350px"
        borderRadius="50%"
        background="radial-gradient(circle, var(--chakra-colors-accent-dimBg) 0%, transparent 70%)"
        top="-80px"
        right="-80px"
      />
      <Box
        position="absolute"
        w="250px"
        h="250px"
        borderRadius="50%"
        background="radial-gradient(circle, var(--chakra-colors-accent-ghostBg) 0%, transparent 70%)"
        bottom="-60px"
        left="-60px"
      />
    </Box>

    <Container maxW="1200px">
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap="5rem"
        alignItems="flex-start"
        position="relative"
        zIndex="1"
      >
        <Box
          bg="white"
          border="1px solid"
          borderColor="border.accentFaint"
          borderRadius="16px"
          p="3rem 2.5rem"
          boxShadow="0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)"
          _hover={{
            transform: "translateY(-4px)",
            boxShadow:
              "0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
          }}
          transition="all 0.4s cubic-bezier(0.4,0,0.2,1)"
        >
          <Flex align="center" gap="0.75rem" mb="1.5rem">
            <Box w="32px" h="2px" bg="blue.500" borderRadius="1px" />
            <Text
              fontFamily="mono"
              fontSize="0.65rem"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="blue.500"
              fontWeight="600"
            >
              Capabilities
            </Text>
          </Flex>

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
            <Text
              as="span"
              css={{
                background: `linear-gradient(135deg, var(--chakra-colors-blue-500) 0%, var(--chakra-colors-blue-300) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EVERY SCALE
            </Text>
          </Heading>

          <Text
            fontSize="0.92rem"
            color="grey.600"
            fontWeight="300"
            lineHeight="1.85"
            mb="2.5rem"
          >
            From consecutively numbered labels to full fire-zone machine
            diagrams — if it requires precision engraving, marking or forming,
            we have the machinery and expertise to deliver.
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
                py="1.25rem"
                px="1rem"
                borderRadius="8px"
                borderBottom="1px solid"
                borderColor="border.subtle"
                transition="all 0.32s cubic-bezier(0.4,0,0.2,1)"
                cursor="default"
              >
                <Box
                  w="8px"
                  h="8px"
                  borderRadius="50%"
                  bg="blue.500"
                  flexShrink="0"
                  mt="0.58rem"
                  boxShadow={`0 0 0 2px var(--chakra-colors-accent-lightBg)`}
                />
                <Text fontSize="0.9rem" color="grey.900" lineHeight="1.65">
                  <Text as="span" fontWeight="600" color="grey.800">
                    {item.title}
                  </Text>{" "}
                  — {item.desc}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>

        <VStack
          gap="3px"
          bg="accent.subtleBg"
          borderRadius="16px"
          overflow="hidden"
          boxShadow="0 8px 32px rgba(0,0,0,0.08)"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
          }}
          transition="all 0.4s cubic-bezier(0.4,0,0.2,1)"
        >
          {[
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="10" cy="10" r="7" />
                  <path d="M10 6 V10 L13 13" />
                </svg>
              ),
              title: "Fast Turnaround",
              desc: "In-house machinery means tight deadlines are met without compromising quality.",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 10 L8 14 L16 6" />
                </svg>
              ),
              title: "High-Grade Materials",
              desc: "We stock a wide range of substrates suited to any industrial environment.",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
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
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
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
              p="2rem 2.25rem"
              gap="1.5rem"
              align="flex-start"
              position="relative"
              _hover={{ bg: "accent.ghostBg", transform: "scale(1.02)" }}
              transition="all 0.32s cubic-bezier(0.4,0,0.2,1)"
              _before={{
                content: '""',
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                height: "2px",
                bg:
                  index === 0
                    ? `linear-gradient(90deg, transparent, var(--chakra-colors-blue-500)/40, transparent)`
                    : "transparent",
              }}
            >
              <Flex
                w="48px"
                h="48px"
                flexShrink="0"
                bg="accent.faintBg"
                borderRadius="8px"
                align="center"
                justify="center"
                color="blue.600"
                boxShadow={`0 2px 8px var(--chakra-colors-border-accentWeak)`}
                _groupHover={{ bg: "blue.500", color: "white", transform: "scale(1.1)" }}
                transition="all 0.32s cubic-bezier(0.4,0,0.2,1)"
              >
                {item.icon}
              </Flex>
              <Box>
                <Heading
                  fontFamily="heading"
                  fontSize="1.2rem"
                  letterSpacing="0.05em"
                  color="grey.900"
                  mb="0.5rem"
                  lineHeight="1.2"
                >
                  {item.title.toUpperCase()}
                </Heading>
                <Text fontSize="0.85rem" color="grey.600" fontWeight="300" lineHeight="1.65">
                  {item.desc}
                </Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Grid>
    </Container>
  </Box>
);
