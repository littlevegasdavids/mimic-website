import { Box, Container, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      as="footer"
      bg="bg.dark"
      borderTop="1px solid"
      borderColor="border.accentFaint"
      py="2.25rem"
    >
      <Container maxW="1200px">
        <Text
          fontFamily="mono"
          fontSize="xs"
          letterSpacing="0.1em"
          color="fg.ultraFaint"
          textAlign="center"
        >
          Mimic & Engraving Services CC. · Johannesburg, South Africa
        </Text>
      </Container>
    </Box>
  );
};
