import React, { useContext } from "react";
import withFullScreenSection from "../../hocs/withFullScreenSection";
import SocialLinks from "../../components/SocialLinks";
import { Box, Typography } from "@mui/material";
import { Context } from "../../Store";
import { heroSectionSelector } from "./selectors";

interface IHeroSectionProps {
  readonly heroSectionRef: React.MutableRefObject<any>;
}

const HeroSection: React.FC<IHeroSectionProps> = ({ heroSectionRef }) => {
  const state = useContext(Context);
  const { name, headline, socialLinks } = heroSectionSelector(state);

  // set background image as BW when tab/window is blurred
  return (
    // @ts-ignore
    <Box sx={styles.main} ref={heroSectionRef} id={"home"}>
      {/* @ts-ignore */}
      <Box sx={styles.intro}>
        <Typography variant={"h2"} sx={styles.heroName}>
          {name}
        </Typography>
        <Typography variant={"h6"}>{headline}_</Typography>
        <SocialLinks links={socialLinks} />
      </Box>
    </Box>
  );
};

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
    },
  },
  intro: {
    display: "flex",
    flexDirection: "column",
  },
  heroName: {
    fontSize: "42px",
    paddingBottom: "0",
    marginBottom: "0",
  },
};

export default withFullScreenSection(HeroSection, undefined, false, "home");
