import React, {useContext} from "react";
import withFullScreenSection from "../../hocs/withFullScreenSection";
import {Box} from "@mui/material";
import Project from "../../components/Project";
import {Context} from "../../Store";
import {projectsSectionSelector} from "./selectors";

interface IProjectsSectionProps {
}

const Index: React.FC<IProjectsSectionProps> = () => {
    const state = useContext(Context);
    const projects = projectsSectionSelector(state);

    return <Box>
        {projects.map(it => <Project project={it} key={it.title}/>)}
    </Box>
}

const styles = {}

export default withFullScreenSection(Index, "Projects")
