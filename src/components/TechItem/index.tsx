import React from "react";
import {TechItemType, TechType} from "./types";
import {Chip} from "@mui/material";
import {SiJava} from "react-icons/si";
import {DiCode} from "react-icons/di";

interface ITechItemProps {
    readonly item: TechItemType;
}

const iconProps = {
    size: "20px",
    color: '#ffffff'
}

const mapTechIcon = (tech: TechType): React.ReactElement => {
    switch (tech) {
        case "Java": return <SiJava {...iconProps}/>;
        default: return <DiCode {...iconProps} />
    }
}

const TechItem: React.FC<ITechItemProps> = ({item}) => {
    return <Chip sx={styles.main} icon={mapTechIcon(item.tech)} label={item.tech + (item.version? " " + item.version : "")} />
}

const styles = {
    main: {
        backgroundColor: '#3c4072',
        color: '#ffffff',
        marginRight: "3px",
        paddingLeft: "8px",
        paddingRight: "6px"
    }
}

export default TechItem
