import { Box } from "@mui/material";
import React from "react";
import ResumeSection from "../ResumeSection";
import { ResumeType } from "./types";

interface IResumeProps {
  readonly resume: ResumeType;
}

const Resume: React.FC<IResumeProps> = ({ resume }) => {
  // @ts-ignore
  return (
    <Box sx={styles.main}>
      {resume.sections.map((it) => (
        <ResumeSection resumeSection={it} key={it.title} />
      ))}
    </Box>
  );
};

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
};

export default Resume;
