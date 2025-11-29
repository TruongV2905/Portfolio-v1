import AboutMeSection from "../components/AboutMeSection";
import ContactMeSection from "../components/ContactMeSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import ServiceSection from "../components/ServiceSection";
import HomePageLayout from "../layouts/HomePageLayout";

function Homepage() {
  return (
    <HomePageLayout>
      <HeroSection />
      <AboutMeSection />
      <ServiceSection />
      <ProjectSection />
      <ContactMeSection />
    </HomePageLayout>
  );
}

export default Homepage;
