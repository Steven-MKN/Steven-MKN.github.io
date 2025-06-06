import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import SocialLinks from "../../components/SocialLinks";
import withFullScreenSection from "../../hocs/withFullScreenSection";
import { Context } from "../../Store";
import { heroSectionSelector } from "./selectors";
import { colorPalette } from "../../hooks/useAppTheme";

interface IHeroSectionProps {
  readonly heroSectionRef: React.MutableRefObject<any>;
}

const HeroSection: React.FC<IHeroSectionProps> = ({ heroSectionRef }) => {
  const state = useContext(Context);
  const { name, headline, socialLinks } = heroSectionSelector(state);

  // set background image as BW when tab/window is blurred
  return (
    // @ts-ignore
    <Box sx={{ position: "relative", overflow: "hidden" }}>
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
      <Box sx={styles.imageDiamonalCut} />
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
    backgroundSize: "auto",
    backgroundPosition: "center",
    boxShadow: "inset 0 0 0 2000px rgba(38, 38, 38, 0.79)",
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
  imageDiamonalCut: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: '100vw',
    borderRightWidth: 0,
    borderTopWidth: '70vh',
    borderBottomWidth: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colorPalette.background,
  }
};

export default withFullScreenSection(HeroSection, undefined, false, "home");
