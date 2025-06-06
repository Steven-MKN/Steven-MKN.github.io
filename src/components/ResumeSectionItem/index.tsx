import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { colorPalette } from "../../hooks/useAppTheme";
import SkillBadge from "../SkillBadge";
import { ResumeSectionItemType } from "./types";

interface IResumeSectionItemProps {
  readonly item: ResumeSectionItemType;
}

const ResumeSectionItem: React.FC<IResumeSectionItemProps> = ({ item }) => {
  return (
    // @ts-ignore
    <Box sx={styles.main}>
      {/* @ts-ignore */}
      <Box sx={styles.sideBar}>
        <Box component="span" sx={styles.sectionItemInit} />
      </Box>
      <Box sx={styles.content}>
        <Typography variant={"h6"} sx={styles.location}>
          {item.location}
        </Typography>

        <Stack direction={'row'}>
          <Typography variant={"h6"} sx={styles.heading}>
            {item.title}
          </Typography>

          <Box sx={styles.years}>
            <Typography component="span" className={"text"}>
              {`${item.dateStart} -  ${item.dateEnd}`}
            </Typography>
          </Box>
        </Stack>

        <Typography variant={"body1"} color={'gray'} fontSize={14}>{item.description}</Typography>

        <ul>
          {item.rolesAndAchievements.map((it) => (
            <li key={it} style={styles.listItem}>
              <Typography>{it}</Typography>
            </li>
          ))}
        </ul>

        <Box sx={styles.skills}>
          {item.skills.map((it) => (
            <SkillBadge skill={it} key={it.skill} size={"small"} />
          ))}
        </Box>
      </Box>
    </Box >
  );
};

const styles = {
  main: {
    paddingLeft: "20px",
    paddingBottom: "15px",
    position: "relative",
  },
  sideBar: {
    position: "absolute",
    top: "4px",
    height: "105%",
    width: "3px",
    background: colorPalette.primary,
  },
  sectionItemInit: {
    width: "20px",
    height: "20px",
    borderRadius: "10px",
    position: "absolute",
    background: colorPalette.primary,
    left: "-8px",
  },
  content: {
    paddingLeft: "20px",
  },
  years: {
    background: "rgba(93, 93, 93, 0.33)",
    width: "max-content",
    height: "min-content",
    marginLeft: "10px",
    padding: "4px 8px 2px 8px",
    borderRadius: "2px",
  },
  heading: {
    marginTop: "0",
    paddingTop: "0",
    marginBottom: "4px",
    fontSize: "18px",
    fontWeight: "600",
    color: colorPalette.primary,
  },
  location: {
    marginTop: "6px",
    marginBottom: "8px",
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "start",
    paddingLeft: "16px"
  },
  listItem: {
    color: colorPalette.onBackground,
  },
};

export default ResumeSectionItem;
