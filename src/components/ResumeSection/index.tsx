import React from "react";
import ResumeSectionItem from "../ResumeSectionItem";
import {ResumeSectionType} from "./types";

interface IResumeSectionProps {
  readonly resumeSection: ResumeSectionType;
}

const ResumeSection: React.FC<IResumeSectionProps> = ({resumeSection}) => {
  return <div style={styles.main}>
    {/* @ts-ignore */}
    <h4 style={styles.title}>{resumeSection.title}</h4>
    {resumeSection.items.map(it => <ResumeSectionItem item={it} />)}
  </div>
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
