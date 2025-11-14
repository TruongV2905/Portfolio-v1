import AboutMeSection from "../components/AboutMeSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import HomePageLayout from "../layouts/HomePageLayout";

function Homepage() {
  return (
    <HomePageLayout>
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
    </HomePageLayout>
  );
}

export default Homepage;
