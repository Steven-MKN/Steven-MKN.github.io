import { Box, Typography } from "@mui/material";
import React from "react";
import ResumeSectionItem from "../ResumeSectionItem";
import {ResumeSectionType} from "./types";

interface IResumeSectionProps {
  readonly resumeSection: ResumeSectionType;
}

const ResumeSection: React.FC<IResumeSectionProps> = ({resumeSection}) => {
  return <Box sx={styles.main}>
    {/* @ts-ignore */}
    <Typography variant={"h4"} sx={styles.title}>{resumeSection.title}</Typography>
    {resumeSection.items.map(it => <ResumeSectionItem item={it} key={it.title} />)}
  </Box>
}

const styles = {
  main: {
    marginBottom: '12px',
  },
  title: {
    fontSize: '26px',
    fontWeight: '700',
    textTransform: 'uppercase',
  }
}

export default ResumeSection
