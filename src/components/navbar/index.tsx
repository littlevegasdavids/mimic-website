import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Link,
  Menu,
  IconButton,
  Portal,
  Image,
  Text,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = ({ isMobile }: { isMobile: boolean }) => {
  return (
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
  );
};
