import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { GrGithub, GrPlayFill } from "react-icons/gr";
import { colorPalette } from "../../hooks/useAppTheme";
import TechItem from "../TechItem";
import { ProjectType } from "./types";
import UseProject from "./useProject";

interface IProjectProps {
  readonly project: ProjectType;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  const { handleProjectImageError } = UseProject();

  // @ts-ignore
  return (
    <Box sx={styles.main}>
      <Box sx={{ ...styles.cardSection, ...styles.header }}>
        <Typography variant={"h5"} sx={{ textDecoration: "underline" }}>
          {project.title}
        </Typography>
        <Typography variant={"caption"}>{project.date}</Typography>
      </Box>
      <Box sx={{ ...styles.cardSection, ...styles.body }}>
        <Box sx={{ ...styles.cardSection, ...styles.imageWrapper }}>
          <img
            src={project.image?.url}
            loading={"lazy"}
            onError={handleProjectImageError}
            alt={project.image?.altText}
            style={styles.image}
          />
        </Box>
        <Box sx={styles.description}>
          <Box>
            <Typography ml={1} mr={5} mb={2} variant={"body1"}>
              {project.description}
            </Typography>
          </Box>
          <Box>
            {project.techStack.map((it) => (
              <TechItem item={it} key={it.tech} />
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ ...styles.cardSection, ...styles.footer }}>
        {project.githubLink && (
          <Box sx={styles.referer}>
            <GrGithub />{" "}
            <Typography pl={1} variant={"body2"}>
              checkout the source code{" "}
              <Link
                href={project.githubLink}
                target={"_blank"}
                rel={"noreferrer"}
              >
                here
              </Link>{" "}
            </Typography>
          </Box>
        )}
        {project.liveLink && (
          <Box sx={styles.referer}>
            <GrPlayFill />{" "}
            <Typography pl={1} variant={"body2"}>
              checkout the project{" "}
              <Link
                href={project.liveLink}
                target={"_blank"}
                rel={"noreferrer"}
              >
                here
              </Link>{" "}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const styles = {
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 2,
    gridTemplateRows: "auto",
    gridTemplateAreas: `"header header header header"
          "main main main main"
          "footer footer footer footer"`,
    margin: "16px 12px 10px",
    borderRadius: "25px",
    padding: "25px 18px",
    background: colorPalette.surface,
    width: {
      xs: "85%",
      sm: "85%",
      md: "80%",
      lg: "80%",
      xl: "70%",
    },
    marginRight: "10px",
  },
  cardSection: {
    padding: "12px 8px 8px",
  },
  header: {
    gridArea: "header",
  },
  body: {
    gridArea: "main",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  description: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "no-wrap",
    padding: "5px 15px",
  },
  imageWrapper: {
    gridArea: "sidebar",
    background: "lightgray",
    padding: "0",
    display: "flex",
    flexDirection: "horizontal",
    alignItems: "center",
    width: {
      xs: "100%",
      sm: "100%",
      md: "45%",
      lg: "38%",
      xl: "32%",
    },
    borderRadius: "7px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    margin: "0",
  },
  footer: {
    gridArea: "footer",
  },
  referer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    marginBottom: "5px",
  },
};

export default Project;
