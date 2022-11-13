import React from "react";
import HeroSection from "../../sections/HeroSection";
import AboutSection from "../../sections/AboutSection";
import SideNavigation from "../../components/SideNavigation";
import { Grid } from "@mui/material";
import ProjectsSection from "../../sections/ProjectsSection";
import ContactSection from "../../sections/ContactSection";
import FooterSection from "../../sections/FooterSection";
import UseLandingPage from "./useLandingPage";

interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = () => {
  const { navigationItems, sectionRefs } = UseLandingPage();

  return (
    <Grid container sx={styles.main}>
      <SideNavigation navigationItems={navigationItems} activeSection={0} />
      {/* @ts-ignore */}
      <Grid sx={styles.sectionsWrapper}>
        <HeroSection heroSectionRef={sectionRefs[0]} />
        <AboutSection
          aboutSectionRef={sectionRefs[1]}
          resumeSectionRef={sectionRefs[2]}
        />
        <ProjectsSection projectsSectionRef={sectionRefs[3]} />
        <ContactSection contactSectionRef={sectionRefs[4]} />
        <FooterSection />
      </Grid>
    </Grid>
  );
};

const styles = {
  main: {
    height: "100vh",
    overflow: "hidden",
  },
  sectionsWrapper: {
    overflowY: "scroll",
    zIndex: 300,
    height: "100%",
    scrollBehavior: "smooth",
  },
};

export default LandingPage;
