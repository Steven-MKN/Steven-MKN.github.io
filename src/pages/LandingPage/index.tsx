import React from "react";
import HeroSection from "../../sections/HeroSection";
import AboutSection from "../../sections/AboutSection";
import SideNavigation from "../../components/SideNavigation";

interface ILandingPageProps {
}

const LandingPage: React.FC<ILandingPageProps> = () => {
  return <div style={styles.main}>
    <SideNavigation/>
    {/* @ts-ignore */}
    <div style={styles.sectionsWrapper}>
      <HeroSection/>
      <AboutSection/>
    </div>
  </div>
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
