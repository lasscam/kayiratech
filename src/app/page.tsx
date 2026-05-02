import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { getServices, getSolutions, getSiteConfig } from "@/sanity/queries";

export const revalidate = 60; // ISR — revalide toutes les 60s

export default async function Home() {
  // Fetch depuis Sanity (graceful — pas de crash si pas encore configuré)
  const [services, solutions, siteConfig] = await Promise.allSettled([
    getServices(),
    getSolutions(),
    getSiteConfig(),
  ]);

  const servicesData = services.status === "fulfilled" ? services.value : [];
  const solutionsData = solutions.status === "fulfilled" ? solutions.value : [];
  const configData = siteConfig.status === "fulfilled" ? siteConfig.value : null;

  return (
    <>
      {/* Material Symbols font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <main>
        <HeroSection config={configData} />
        <ServicesSection services={servicesData} />
        <SolutionsSection solutions={solutionsData} />
        <AboutSection config={configData} />
        <ContactSection config={configData} />
      </main>
      <Footer config={configData} />
    </>
  );
}
