import React from "react";
import { TechItemType } from "./types";
import { Chip } from "@mui/material";
import UseTechItem from "./useTechItem";
import { mapTechIcon } from "./index.helper";

interface ITechItemProps {
  readonly item: TechItemType;
}

const TechItem: React.FC<ITechItemProps> = ({ item }) => {
  const { iconProps } = UseTechItem();
  return (
    <Chip
      sx={styles.main}
      icon={mapTechIcon(iconProps, item.tech)}
      label={item.tech + (item.version ? " " + item.version : "")}
    />
  );
};

const styles = {
  main: {
    backgroundColor: "#3c4072",
    color: "#ffffff",
    marginRight: "3px",
    paddingLeft: "8px",
    paddingRight: "6px",
  },
};

export default TechItem;
