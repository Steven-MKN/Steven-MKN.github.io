import React from "react";
import HeroSection from "../../sections/HeroSection";
import AboutSection from "../../sections/AboutSection";
import SideNavigation from "../../components/SideNavigation";
import { Grid } from "@mui/material";
import ProjectsSection from "../../sections/ProjectsSection";
import ContactSection from "../../sections/ContactSection";

interface ILandingPageProps {
}

const LandingPage: React.FC<ILandingPageProps> = () => {
  return <Grid container sx={styles.main}>
    <SideNavigation/>
    {/* @ts-ignore */}
    <Grid sx={styles.sectionsWrapper}>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection />
      <ContactSection />
    </Grid>
  </Grid>
}

const styles = {
  main: {
    height: '100vh',
    overflow: 'hidden'
  },
  sectionsWrapper: {
    overflowY: 'scroll',
    zIndex: 300,
    height: '100%'
  }
}

export default LandingPage
