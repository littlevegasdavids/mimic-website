import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.message.trim() !== "";

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSubmitStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xaqkdrlr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "First Name": formData.firstName,
          "Last Name": formData.lastName,
          email: formData.email,
          "Service Required": formData.service,
          "Project Details": formData.message,
        }),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          service: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 4000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <Box
      as="section"
      id="contact"
      bg="bg.dark"
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
              color="fg.subtle"
              fontWeight="300"
              lineHeight="1.85"
              mb="2.5rem"
            >
              Ready to start a project or need a quote? Reach out directly to
              our team.
            </Text>

            <Link
              href="https://wa.me/270723421357?text=Hi%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              bg="green.500"
              color="white"
              fontFamily="mono"
              fontSize="0.7rem"
              letterSpacing="0.14em"
              textTransform="uppercase"
              px="2rem"
              py="0.9rem"
              borderRadius="6px"
              _hover={{
                bg: "green.600",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(72, 187, 120, 0.3)",
              }}
              transition="all 0.32s cubic-bezier(0.4,0,0.2,1)"
              display="inline-flex"
              alignItems="center"
              gap="0.75rem"
              textDecoration="none"
              w="fit-content"
              mb="2.5rem"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
              </svg>
              Chat on WhatsApp
            </Link>

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
                      <circle cx="8" cy="6" r="2.5" />
                      <path d="M3 14 C3 11 5.2 9 8 9 C10.8 9 13 11 13 14" />
                    </svg>
                  ),
                  label: "Contact",
                  value: "Trever — Design & Sales",
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
                      <path d="M2 4 L8 9 L14 4" />
                      <rect x="2" y="3" width="12" height="10" rx="1" />
                    </svg>
                  ),
                  label: "Emails",
                  value: "sales@mimicengraving.co.za",
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
                  value: "011 646 7539 · 072 342 1357",
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
                  value: "114 Barry Hertzog Avenue, Greenside, Johannesburg",
                },
              ].map((item, index) => (
                <Flex key={index} gap="0.9rem" align="flex-start">
                  <Flex
                    w="36px"
                    h="36px"
                    flexShrink="0"
                    border="1px solid"
                    borderColor="border.accentStrong"
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
                      color="grey.50/30"
                      mb="2px"
                    >
                      {item.label}
                    </Text>
                    <Text
                      fontSize="0.875rem"
                      color="fg.muted"
                      fontWeight="300"
                    >
                      {item.value}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Box>

          <VStack
            gap="0.9rem"
            align="stretch"
            as="form"
            onSubmit={handleSubmit}
          >
            <Grid templateColumns="1fr 1fr" gap="0.9rem">
              <Box>
                <Text
                  fontFamily="mono"
                  fontSize="0.58rem"
                  letterSpacing="0.18em"
                  textTransform="uppercase"
                  color="fg.faint"
                  mb="0.4rem"
                >
                  First Name
                </Text>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  bg="input.bg"
                  border="1px solid"
                  borderColor="border.accent"
                  borderRadius="3px"
                  color="white"
                  fontFamily="body"
                  fontSize="0.875rem"
                  fontWeight="300"
                  placeholder="Your name"
                  _placeholder={{ color: "input.placeholder" }}
                  _focus={{
                    borderColor: "blue.500",
                    bg: "input.focusBg",
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
                  color="fg.faint"
                  mb="0.4rem"
                >
                  Last Name
                </Text>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  bg="input.bg"
                  border="1px solid"
                  borderColor="border.accent"
                  borderRadius="3px"
                  color="white"
                  fontFamily="body"
                  fontSize="0.875rem"
                  fontWeight="300"
                  placeholder="Your surname"
                  _placeholder={{ color: "input.placeholder" }}
                  _focus={{
                    borderColor: "blue.500",
                    bg: "input.focusBg",
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
                color="fg.faint"
                mb="0.4rem"
              >
                Email Address
              </Text>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                bg="input.bg"
                border="1px solid"
                borderColor="border.accent"
                borderRadius="3px"
                color="white"
                fontFamily="body"
                fontSize="0.875rem"
                fontWeight="300"
                placeholder="you@company.co.za"
                _placeholder={{ color: "input.placeholder" }}
                _focus={{
                  borderColor: "blue.500",
                  bg: "input.focusBg",
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
                color="fg.faint"
                mb="0.4rem"
              >
                Service Required
              </Text>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(74,127,165,0.2)",
                  borderRadius: "3px",
                  color: formData.service ? "white" : "rgba(250,251,252,0.5)",
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  width: "100%",
                  padding: "0 1rem",
                  height: "2.5rem",
                }}
              >
                <option value="" disabled style={{ background: "#252729" }}>
                  Select a service…
                </option>
                <option
                  value="Mimic Panels"
                  style={{ background: "#252729", color: "white" }}
                >
                  Mimic Panels
                </option>
                <option
                  value="Engraving"
                  style={{ background: "#252729", color: "white" }}
                >
                  Engraving
                </option>
                <option
                  value="Signage"
                  style={{ background: "#252729", color: "white" }}
                >
                  Signage
                </option>
                <option
                  value="M1 Pro Printer"
                  style={{ background: "#252729", color: "white" }}
                >
                  M1 Pro Printers
                </option>
                <option
                  value="Other"
                  style={{ background: "#252729", color: "white" }}
                >
                  Other
                </option>
              </select>
            </Box>

            <Box>
              <Text
                fontFamily="mono"
                fontSize="0.58rem"
                letterSpacing="0.18em"
                textTransform="uppercase"
                color="fg.faint"
                mb="0.4rem"
              >
                Project Details
              </Text>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                bg="input.bg"
                border="1px solid"
                borderColor="border.accent"
                borderRadius="3px"
                color="white"
                fontFamily="body"
                fontSize="0.875rem"
                fontWeight="300"
                minH="115px"
                resize="vertical"
                placeholder="Describe your project, quantities, materials or any specific requirements…"
                _placeholder={{ color: "input.placeholder" }}
                _focus={{
                  borderColor: "blue.500",
                  bg: "input.focusBg",
                }}
                transition="border-color 0.32s cubic-bezier(0.4,0,0.2,1), background 0.32s cubic-bezier(0.4,0,0.2,1)"
              />
            </Box>

            {submitStatus === "success" && (
              <Text
                fontFamily="mono"
                fontSize="0.75rem"
                color="green.400"
                letterSpacing="0.1em"
              >
                Enquiry sent — we'll be in touch shortly.
              </Text>
            )}
            {submitStatus === "error" && (
              <Text
                fontFamily="mono"
                fontSize="0.75rem"
                color="red.400"
                letterSpacing="0.1em"
              >
                Something went wrong. Please try again or email us directly.
              </Text>
            )}

            <Button
              type="submit"
              loading={submitStatus === "loading"}
              disabled={
                !isFormValid ||
                submitStatus === "loading" ||
                submitStatus === "success"
              }
              bg={submitStatus === "success" ? "green.600" : "blue.500"}
              color="white"
              fontFamily="mono"
              fontSize="0.7rem"
              letterSpacing="0.14em"
              textTransform="uppercase"
              px="2rem"
              py="0.95rem"
              borderRadius="3px"
              _hover={{
                bg: submitStatus === "success" ? "green.600" : "blue.600",
                transform: "translateY(-2px)",
              }}
              transition="background 0.32s cubic-bezier(0.4,0,0.2,1), transform 0.32s cubic-bezier(0.4,0,0.2,1)"
            >
              {submitStatus === "success" ? "Enquiry Sent ✓" : "Send Enquiry →"}
            </Button>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
};
