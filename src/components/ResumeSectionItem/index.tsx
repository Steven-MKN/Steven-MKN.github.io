import React from "react";
import {ResumeSectionItemType} from "./types";
import {Box, Typography} from "@mui/material";

interface IResumeSectionItemProps {
  readonly item: ResumeSectionItemType;
}

const ResumeSectionItem: React.FC<IResumeSectionItemProps> = ({item}) => {
  return (
    // @ts-ignore
    <Box sx={styles.main}>
      {/* @ts-ignore */}
      <Box sx={styles.sideBar}><Box component="span" sx={styles.sectionItemInit}/></Box>
      <Box sx={styles.content}>
        <Typography variant={"h5"} sx={styles.heading}>{item.title}</Typography>
        <Box sx={styles.years}><Box component="span" className={"text"}>{item.dateStart} </Box> - <Box component="span"
          className={"text"}>{item.dateEnd} </Box></Box>
        <Typography variant={"h6"} sx={styles.location}>{item.location}</Typography>

        <ul>{item.rolesAndAchievements.map(it => <li key={it}>{it}</li>)}</ul>
      </Box>
    </Box>)
}

const styles = {
  main: {
    paddingLeft: "20px",
    paddingBottom: '15px',
    position: 'relative',
  },
  sideBar: {
    position: 'absolute',
    top: '4px',
    height: '100%',
    width: '3px',
    background: "#445881"
  },
  sectionItemInit: {
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    position: 'absolute',
    background: "#445881",
    left: "-8px"
  },
  content: {
    paddingLeft: '20px'
  },
  years: {
    background: 'rgba(148,148,148,0.33)',
    width: 'max-content',
    padding: '4px 8px 2px 8px',
    borderRadius: '2px'
  },
  heading: {
    marginTop: '0',
    paddingTop: '0',
    marginBottom: '4px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#303464'
  },
  location: {
    marginTop: '6px',
    marginBottom: '8px'
  }
}

export default ResumeSectionItem
