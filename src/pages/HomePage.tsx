import { Box, useBreakpointValue } from "@chakra-ui/react";
import { ServicesSection } from "@/sections/services";
import { AboutSection } from "@/sections/about";
import { CapabilitiesSection } from "@/sections/capabilities";
import { ContactSection } from "@/sections/contact";
import { HeroSection } from "@/sections/hero";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

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

export const HomePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false }) || false;
  return (
    <Box>
      <Navbar isMobile={isMobile} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CapabilitiesSection />
      <ContactSection />

      <Footer />
    </Box>
  );
};
