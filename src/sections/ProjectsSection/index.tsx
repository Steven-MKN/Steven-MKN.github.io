import React, {useContext} from "react";
import withFullScreenSection from "../../hocs/withFullScreenSection";
import {Box} from "@mui/material";
import Project from "../../components/Project";
import {Context} from "../../Store";
import {projectsSectionSelector} from "./selectors";

interface IProjectsSectionProps {
    readonly projectsSectionRef: React.MutableRefObject<any>;
}

const ProjectsSection: React.FC<IProjectsSectionProps> = ({projectsSectionRef}) => {
    const state = useContext(Context);
    const projects = projectsSectionSelector(state);

    return <Box ref={projectsSectionRef}>
        {projects.map(it => <Project project={it} key={it.title}/>)}
    </Box>
}

const styles = {}

export default withFullScreenSection(ProjectsSection, "Projects", true, "projects")
