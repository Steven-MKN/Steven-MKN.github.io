import React, {useState} from "react";
import {Box, Stack, Typography} from "@mui/material";
import {ContactInfoType, ContactType} from "./types";
import {GrCircleQuestion, GrLocation} from "react-icons/gr";
import {MdEmail, MdOutlinePhone} from "react-icons/md";

interface IContactInfoProps {
    readonly info: ContactInfoType
}

const iconProps = (hover: boolean) => ({
    color: hover ? '#ffffff' : '#171717',
    size: 26
})

const mapToIcon = (type: ContactType, hover: boolean) => {
    switch (type) {
        case "location":
            return <GrLocation {...iconProps(hover)}/>;
        case "email":
            return <MdEmail {...iconProps(hover)}/>;
        case "cell":
            return <MdOutlinePhone {...iconProps(hover)}/>;
        default:
            return <GrCircleQuestion {...iconProps(hover)}/>
    }
}

const mapToName = (type: ContactType): string => {
    return type === "location" ? "Location"
        : type === "cell" ? "Call"
            : type === "email" ? "Email"
                : type
}

const formatValue = (info: ContactInfoType): string => {
    switch (info.type) {
        case "location":
            return info.value;
        case "email":
            return info.value;
        case "cell":
            return info.value;
        default:
            return info.value;
    }
}
const ContactInfo: React.FC<IContactInfoProps> = ({info}) => {
    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    return <Box sx={styles.main}>
        <Box sx={styles.icon} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {mapToIcon(info.type, hover)}
        </Box>
        <Stack>
            <Typography variant={"h5"}>{mapToName(info.type)}</Typography>
            <Typography variant={"body1"}>{formatValue(info)}</Typography>
        </Stack>
    </Box>
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: "26px 20px",
    },
    icon: {
        padding: '12px',
        color: '#3c4072',
        background: '#ffffff',
        width: '34px',
        height: '34px',
        borderRadius: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: "pointer",
        marginRight: "10px",
        ':hover': {
            background: '#3c4072'
        }
    }
}

export default ContactInfo
