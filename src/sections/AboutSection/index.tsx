import React, {useContext} from "react";
import withFullScreenSection from "../../hocs/withFullScreenSection";
import SubSection from "../../components/SubSection";
import SkillBadge from "../../components/SkillBadge";
import Resume from "../../components/Resume";
import {Box, Typography} from "@mui/material";
import {Context} from "../../Store";
import {aboutSectionSelector} from "./selectors";

interface IAboutSectionProps {
}

const Index: React.FC<IAboutSectionProps> = () => {
  const state = useContext(Context);
  const about = aboutSectionSelector(state);

  return <Box>
    <SubSection>
      {
        /* @ts-ignore */
        about.about.map(it => <Typography variant={"body1"} sx={styles.about} key={it}>{it}</Typography>)
      }
    </SubSection>
    <SubSection title={"Skills"}>
      {/* @ts-ignore */}
      <Box sx={styles.skills}>
        {about.skills.map(it => <SkillBadge skill={it} key={it.skill} />)}
      </Box>
    </SubSection>
    <SubSection title={"Resume"}>
      {/* @ts-ignore */}
      <Box sx={styles.resume}>
        <Resume resume={about.resume}/>
      </Box>
    </SubSection>
  </Box>
}

const styles = {
  skills: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "center"
  },
  about: {

  },
  resume: {

  }
}

export default withFullScreenSection(Index, "About Me")
