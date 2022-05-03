import React from "react";
import withFullScreenSection from "../hocs/withFullScreenSection";
import {Box} from "@mui/material";
import {ProjectType} from "../components/Project/types";
import Project from "../components/Project";

interface IProjectsSectionProps {
}

const projects: ProjectType[] = [
    {
        title: "Insight Covid 19",
        description: "bluh bluh bluh",
        date: "March 2020",
        image: {
            url: "images/insight-covid-19.jpg",
            altText: ""
        },
        techStack: [
            {tech: "Java", version: "1.8"},
            {tech: "Android", version: null},
        ],
        githubLink: "https://github.com/Steven-MKN/insight-covid19",
        liveLink: "https://bit.ly/insight_v4_1"
    }
]


const ProjectsSection: React.FC<IProjectsSectionProps> = () => {

    return <Box>
        {projects.map(it => <Project project={it}/>)}
    </Box>
}

const styles = {}

export default withFullScreenSection(ProjectsSection, "Projects")
