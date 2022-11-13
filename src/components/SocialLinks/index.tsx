import React from "react";
import { SocialLinkType } from "../SocialLinkButton/types";
import SocialLinkButton from "../SocialLinkButton";
import { Box } from "@mui/material";

interface ISocialLinksProps {
  readonly links: SocialLinkType[];
}

const SocialLinks: React.FC<ISocialLinksProps> = ({ links }) => {
  return (
    // @ts-ignore
    <Box sx={styles.main}>
      {links.map((it) => (
        <SocialLinkButton key={it.type} link={it.link} type={it.type} />
      ))}
    </Box>
  );
};

const styles = {
  main: {
    display: "flex",
    flexDirection: "row",
  },
};

export default SocialLinks;
