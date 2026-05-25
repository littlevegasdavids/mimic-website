import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Grid,
  HStack,
} from "@chakra-ui/react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const BASE = "/mimic-website/photos";

const albums: Record<string, { src: string }[]> = {
  engraving: [1, 2, 3, 4, 5].map((n) => ({ src: `${BASE}/engraving/${n}.jpg` })),
  signage: [1, 2, 3, 4, 5, 7, 8, 9].map((n) => ({ src: `${BASE}/signage/${n}.jpg` })),
  "mimic-panels": [1, 2, 3, 4].map((n) => ({ src: `${BASE}/mimic-panels/${n}.jpg` })),
  "m1-pro-printer": [1, 2, 3, 4].map((n) => ({ src: `${BASE}/m1-pro-printer/${n}.jpg` })),
};

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

const ServiceCard = ({
  icon,
  title,
  description,
  pills,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  pills: string[];
  onClick: () => void;
}) => (
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
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transform: "translateY(-4px)",
    }}
    transition="all 0.32s cubic-bezier(0.4,0,0.2,1)"
    gap="3"
    direction="column"
    cursor="pointer"
    onClick={onClick}
  >
    <Flex align="center" gap="1rem" mb="0.7rem">
      <Box w="38px" h="38px" color="grey.600">
        {icon}
      </Box>
      <Heading
        fontFamily="heading"
        fontSize="1.45rem"
        letterSpacing="0.07em"
        color="blue.600"
      >
        {title}
      </Heading>
    </Flex>
    <Text
      fontSize="0.855rem"
      color="grey.600"
      lineHeight="1.75"
      fontWeight="300"
      fontStyle="italic"
    >
      {description}
    </Text>
    <HStack gap="0.35rem" mt="1.2rem" flexWrap="wrap">
      {pills.map((pill) => (
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
    <Text
      fontFamily="mono"
      fontSize="0.6rem"
      letterSpacing="0.12em"
      textTransform="uppercase"
      color="blue.500"
      mt="10px"
    >
      View photos →
    </Text>
  </Flex>
);

export const ServicesSection = () => {
  const [active, setActive] = useState<{ key: string; label: string } | null>(null);

  const open = (key: string, label: string) => setActive({ key, label });
  const close = () => setActive(null);

  return (
    <Box as="section" id="services" py="16" bg="gray.50">
      <Container maxW="1200px">
        <Flex
          justify="space-between"
          align="flex-end"
          mb="4rem"
          direction={{ base: "column", md: "row" }}
          gap={{ base: "1rem", md: "0" }}
        >
          <Box alignSelf="center">
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
        </Flex>

        <Box>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr",
              lg: "repeat(2, 1fr)",
            }}
            gap="2rem"
            mb="2rem"
          >
            <ServiceCard
              icon={<EngravingIcon />}
              title="ENGRAVING"
              description="Industrial engraving via computerised rotary, laser surface and manual machines. Control panels, commemorative plaques, valve tags, machine diagrams — anything requiring precision marking."
              pills={["Rotary", "Laser Surface", "Plaques", "Badges"]}
              onClick={() => open("engraving", "Engraving")}
            />
            <ServiceCard
              icon={<SignageIcon />}
              title="SIGNAGE"
              description="Custom corporate and industrial signage — cut-out letters, sandblasted glass, light boxes, illuminated letters and directional systems tailored to your brand and environment."
              pills={["Cut-Out", "Sandblast", "Light Boxes", "Directional"]}
              onClick={() => open("signage", "Signage")}
            />
            <ServiceCard
              icon={<PanelIcon />}
              title="MIMIC PANELS"
              description="Mosaic-system panels built on polycarbonate glass-filled fibre tiles. UV stable, shock resistant modules in 18×18mm, 24×24mm and 48×48mm sizes — light grey or black standard."
              pills={["Mosaic Tiles", "Grid Systems", "Push Buttons", "LED Mounting"]}
              onClick={() => open("mimic-panels", "Mimic Panels")}
            />
            <ServiceCard
              icon={<M1ProIcon />}
              title="M1 PRO PRINTERS"
              description="High-quality M1 Pro output with a full range of consumables. Ideal for instrument panel labels, overlays and precision-printed materials across industrial and commercial sectors."
              pills={["Labels", "Overlays", "Consumables", "Panels"]}
              onClick={() => open("m1-pro-printer", "M1 Pro Printers")}
            />
          </Grid>
        </Box>
      </Container>

      <Lightbox
        open={active !== null}
        close={close}
        slides={active ? albums[active.key].map((s) => ({ ...s, title: active.label })) : []}
        plugins={[Captions, Thumbnails, Zoom]}
      />
    </Box>
  );
};
