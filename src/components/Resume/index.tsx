import React from "react";
import ResumeSection from "../ResumeSection";
import {ResumeType} from "./types";

interface IResumeProps {
  readonly resume: ResumeType;
}

const Resume: React.FC<IResumeProps> = ({resume}) => {
  // @ts-ignore
  return <div style={styles.main}>
    {resume.sections.map(it => <ResumeSection resumeSection={it} />)}
  </div>
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
}

export default Resume
