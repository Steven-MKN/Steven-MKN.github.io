import { Box, Typography } from "@mui/material";
import React from "react";
import ResumeSectionItem from "../ResumeSectionItem";
import { ResumeSectionType } from "./types";

interface IResumeSectionProps {
  readonly resumeSection: ResumeSectionType;
}

const ResumeSection: React.FC<IResumeSectionProps> = ({ resumeSection }) => {
  return (
    <Box sx={styles.main}>
      {/* @ts-ignore */}
      <Box mb={"8px"} />
      <Typography variant={"h4"} sx={styles.title}>
        {resumeSection.title}
      </Typography>
      <Box mb={"16px"} />
      {resumeSection.items.map((it) => (
        <ResumeSectionItem item={it} key={it.title} />
      ))}
    </Box>
  );
};

const styles = {
  main: {
    marginBottom: "12px",
  },
  title: {
    fontSize: "26px",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default ResumeSection;
