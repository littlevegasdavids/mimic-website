import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Placeholder Name",
    company: "Placeholder Company",
    review:
      "Placeholder review — replace with a real client testimonial. Exceptional quality and precision that has kept us coming back for years.",
  },
  {
    name: "Placeholder Name",
    company: "Placeholder Company",
    review:
      "Placeholder review — replace with a real client testimonial. Reliable, professional, and always delivered on time. Highly recommended.",
  },
  {
    name: "Placeholder Name",
    company: "Placeholder Company",
    review:
      "Placeholder review — replace with a real client testimonial. Their mimic panel craftsmanship is second to none in Johannesburg.",
  },
];

export const AboutSection = () => (
  <Box
    as="section"
    id="about"
    bg="grey.800"
    py="7rem"
    position="relative"
    overflow="hidden"
  >
    <Box position="absolute" inset="0" pointerEvents="none">
      <Box
        position="absolute"
        w="400px"
        h="400px"
        borderRadius="50%"
        background="radial-gradient(circle, rgba(74,127,165,0.08) 0%, transparent 70%)"
        top="-100px"
        left="-100px"
      />
      <Box
        position="absolute"
        w="300px"
        h="300px"
        borderRadius="50%"
        background="radial-gradient(circle, rgba(74,127,165,0.06) 0%, transparent 70%)"
        bottom="-80px"
        right="-80px"
      />
    </Box>

    <Container maxW="1200px">
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap="6rem"
        alignItems="center"
        position="relative"
        zIndex="1"
      >
        <Box
          bg="rgba(42, 45, 48, 0.6)"
          border="1px solid rgba(74,127,165,0.15)"
          borderRadius="12px"
          p="3rem 2.5rem"
          backdropFilter="blur(8px)"
          boxShadow="0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)"
          _hover={{
            transform: "translateY(-4px)",
            boxShadow:
              "0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
          transition="all 0.4s cubic-bezier(0.4,0,0.2,1)"
        >
          <Box w="40px" h="2px" bg="blue.500" mb="1.5rem" borderRadius="1px" />

          <Heading
            fontFamily="heading"
            fontSize={{ base: "2.4rem", lg: "3.2rem" }}
            letterSpacing="0.04em"
            lineHeight="1.05"
            color="white"
            mb="1.5rem"
            textShadow="0 2px 4px rgba(0,0,0,0.3)"
          >
            40+ YEARS OF
            <br />
            <Text
              as="span"
              color="blue.400"
              css={{
                background: "linear-gradient(135deg, #4A7FA5 0%, #6BB6FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              INDUSTRIAL CRAFT
            </Text>
          </Heading>

          <Text
            fontSize="0.95rem"
            fontWeight="300"
            color="rgba(250,251,252,0.7)"
            lineHeight="1.85"
            mb="1.25rem"
          >
            Mimic & Engraving Services CC has been a trusted partner to South
            African industry for over four decades. Based in Greenside,
            Johannesburg, we combine time-tested craftsmanship with modern
            computerised machinery.
          </Text>

          <Text
            fontSize="0.95rem"
            fontWeight="300"
            color="rgba(250,251,252,0.7)"
            lineHeight="1.85"
            mb="1.25rem"
          >
            Whether you need a single bespoke plaque or a complete mimic panel
            installation, every job is handled with the same precision and
            attention to detail that has defined us since day one.
          </Text>
        </Box>

        <Grid
          templateColumns="1fr 1fr"
          gap="2px"
          bg="rgba(74,127,165,0.2)"
          borderRadius="12px"
          overflow="hidden"
          boxShadow="0 8px 32px rgba(0,0,0,0.3)"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
          }}
          transition="all 0.4s cubic-bezier(0.4,0,0.2,1)"
        >
          {[
            { value: "40+", label: "Years serving South African industry" },
            { value: "5", label: "Specialised service offerings" },
            { value: "3", label: "Engraving machine types on-site" },
            { value: "JHB", label: "Greenside, Johannesburg based" },
          ].map(({ value, label }) => (
            <Box
              key={label}
              bg="rgba(42, 45, 48, 0.8)"
              p="2.5rem 2rem"
              position="relative"
              _hover={{ bg: "rgba(74,127,165,0.1)", transform: "scale(1.02)" }}
              transition="all 0.3s cubic-bezier(0.4,0,0.2,1)"
              _before={{
                content: '""',
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                height: "2px",
                bg: "linear-gradient(90deg, transparent, rgba(74,127,165,0.6), transparent)",
              }}
            >
              <Text
                fontFamily="heading"
                fontSize="3.2rem"
                color="blue.400"
                lineHeight="1"
                mb="0.5rem"
                textShadow="0 2px 8px rgba(74,127,165,0.3)"
                css={{
                  background: "linear-gradient(135deg, #4A7FA5 0%, #6BB6FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {value}
              </Text>
              <Text
                fontSize="0.82rem"
                fontWeight="400"
                color="rgba(250,251,252,0.6)"
                lineHeight="1.4"
                letterSpacing="0.02em"
              >
                {label}
              </Text>
            </Box>
          ))}
        </Grid>
      </Grid>

      {/* Reviews */}
      <Box mt="5rem" position="relative" zIndex="1">
        <Flex direction="column" align="center" mb="3rem">
          <Box w="40px" h="2px" bg="blue.500" mb="1.25rem" borderRadius="1px" />
          <Heading
            fontFamily="heading"
            fontSize={{ base: "1.8rem", lg: "2.4rem" }}
            letterSpacing="0.06em"
            color="white"
            textAlign="center"
          >
            WHAT OUR CLIENTS SAY
          </Heading>
        </Flex>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap="1.5rem"
        >
          {reviews.map(({ name, company, review }) => (
            <Flex
              key={name + company + review}
              direction="column"
              bg="rgba(42, 45, 48, 0.6)"
              border="1px solid rgba(74,127,165,0.15)"
              borderRadius="12px"
              p="2rem"
              backdropFilter="blur(8px)"
              boxShadow="0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)"
              _hover={{
                transform: "translateY(-4px)",
                borderColor: "rgba(74,127,165,0.3)",
                boxShadow:
                  "0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
              transition="all 0.32s cubic-bezier(0.4,0,0.2,1)"
            >
              <Flex gap="0.3rem" mb="1.25rem">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} color="#4A7FA5" size={15} />
                ))}
              </Flex>

              <Text
                fontSize="0.9rem"
                fontWeight="300"
                color="rgba(250,251,252,0.75)"
                lineHeight="1.85"
                flex="1"
                mb="1.5rem"
                fontStyle="italic"
              >
                "{review}"
              </Text>

              <Box h="1px" bg="rgba(74,127,165,0.2)" mb="1.25rem" />

              <Box>
                <Text
                  fontSize="0.9rem"
                  fontWeight="600"
                  color="white"
                  letterSpacing="0.02em"
                >
                  {name}
                </Text>
                <Text
                  fontSize="0.8rem"
                  color="blue.400"
                  letterSpacing="0.03em"
                >
                  {company}
                </Text>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Box>
    </Container>
  </Box>
);
