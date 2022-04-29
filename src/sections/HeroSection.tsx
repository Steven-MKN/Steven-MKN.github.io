import React from "react";
import withFullScreenSection from "../hocs/withFullScreenSection"
import SocialLinks from "../components/SocialLinks";
import {SocialLinkType} from "../components/SocialLinkButton/types";
import {Box, Typography} from "@mui/material";

interface IHeroSectionProps {
}

const links: SocialLinkType[] = [
  {type: "linkedin", link: "https://www.linkedin.com/in/steven1mokoena"},
  {type: "whatsapp", link: "https://wa.me/27622995782"},
  {type: "cell", link: "tel:+27622995782"},
  {type: "email", link: "mailto:steventmokoena@gmail.com"},
  {type: "github", link: "https://github.com/Steven-MKN"},
]

const HeroSection: React.FC<IHeroSectionProps> = () => {
  // set background image as BW when tab/window is blurred
  return (
    // @ts-ignore
    <Box sx={styles.main}>
      {/* @ts-ignore */}
      <Box sx={styles.intro}>
        <Typography variant={"h2"} sx={styles.heroName}>Steven T. Mokoena</Typography >
        <Typography variant={"h3"}>Full-Stack Developer</Typography >
        <SocialLinks links={links}/>
      </Box>
    </Box>
  )
}

const styles = {
  main: {
    backgroundImage: "url('images/hero-image.jpg')",
    height: "100vh",
    backgroundRepeat: "round",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: {
      xs: "20px",
      sm: "12px",
      md: "120px",
      lg: "150px",
      xl: "150px",
    }
  },
  intro: {
    display: "flex",
    flexDirection: "column",
  },
  heroName: {
    fontSize: "42px",
    paddingBottom: "0",
    marginBottom: "0",
  }
}

export default withFullScreenSection(HeroSection, undefined, false)
