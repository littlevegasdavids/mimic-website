import { Box, Container, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
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
  );
};
