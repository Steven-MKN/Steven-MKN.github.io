import { Link, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../Store";
import SocialLinks from "../../components/SocialLinks";
import { footerSectionSelector } from "./selectors";

interface IFooterSectionProps {}

const FooterSection: React.FC<IFooterSectionProps> = () => {
  const state = useContext(Context);
  const { name, slogan, socialLinks } = footerSectionSelector(state);

  return (
    <Stack sx={styles.main} alignItems={"center"} spacing={2}>
      <Typography variant={"h5"}>{name}</Typography>
      <Typography variant={"body1"}>{slogan}</Typography>
      <SocialLinks links={socialLinks} />
      <Stack>
        <Typography variant={"caption"}>
          &copy; {new Date().getFullYear()} Steven Mokoena, All Rights Reserved
        </Typography>
        <Typography variant={"caption"}>
          Designed and developed by{" "}
          <Link
            href={"https://github.com/Steven-MKN"}
            target={"_blank"}
            referrerPolicy={"no-referrer"}
          >
            Steven Mokoena
          </Link>{" "}
        </Typography>
      </Stack>
    </Stack>
  );
};

const styles = {
  main: {
    textAlign: "center",
    paddingBottom: "40px",
  },
};

export default FooterSection;
