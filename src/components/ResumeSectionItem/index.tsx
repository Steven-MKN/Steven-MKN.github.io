import React from "react";
import {ResumeSectionItemType} from "./types";

interface IResumeSectionItemProps {
  readonly item: ResumeSectionItemType;
}

const ResumeSectionItem: React.FC<IResumeSectionItemProps> = ({item}) => {
  return (
    // @ts-ignore
    <div style={styles.main}>
      {/* @ts-ignore */}
      <div style={styles.sideBar}><span style={styles.sectionItemInit}/></div>
      <div style={styles.content}>
        <h5 style={styles.heading}>{item.title}</h5>
        <div style={styles.years}><span className={"text"}>{item.dateStart} </span> - <span
          className={"text"}>{item.dateEnd} </span></div>
        <h6 style={styles.location}>{item.location}</h6>

        <ul>{item.rolesAndAchievements.map(it => <li>{it}</li>)}</ul>
      </div>
    </div>)
}

const styles = {
  main: {
    paddingLeft: "20px",
    paddingBottom: '15px',
    position: 'relative',
  },
  sideBar: {
    position: 'absolute',
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
