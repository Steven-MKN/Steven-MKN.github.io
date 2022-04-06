import React from "react";
import withFullScreenSection from "../hocs/withFullScreenSection"

interface IHeroSectionProps {
}

const HeroSection: React.FC<IHeroSectionProps> = () => {
  return <div></div>
}

export default withFullScreenSection(HeroSection, "Hero Section")
