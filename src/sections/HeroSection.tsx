import React from "react";
import withFullScreenSection from "../hocs/withFullScreenSection"
import SocialLinks from "../components/SocialLinks";
import {SocialLinkType} from "../components/SocialLinkButton/types";

interface IHeroSectionProps {
}

const links: SocialLinkType[] = [
  {type: "linkedin", link: "https://google.com"},
  {type: "whatsapp", link: "https://wa.me/27790231430"},
  {type: "cell", link: "tel:+27790231430"},
  {type: "email", link: "mailto:steventmokoena@gmail.com"},
]

const HeroSection: React.FC<IHeroSectionProps> = () => {
  // set background image as BW when tab/window is blurred
  return (
    // @ts-ignore
    <div style={styles.main}>
      {/* @ts-ignore */}
      <div style={styles.intro}>
        <h2 style={styles.heroName}>Steven T. Mokoena</h2>
        <h3>Full-Stack Developer</h3>
        <SocialLinks links={links}/>
      </div>
    </div>
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
    paddingLeft: "150px"
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
