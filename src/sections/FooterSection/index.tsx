import React from "react";
import {Box, Link, Stack, Typography} from "@mui/material";
import SocialLinks from "../../components/SocialLinks";
import {SocialLinkType} from "../../components/SocialLinkButton/types";

interface IFooterSectionProps {

}

const links: SocialLinkType[] = [
    {type: "linkedin", link: "https://www.linkedin.com/in/steven1mokoena"},
    {type: "whatsapp", link: "https://wa.me/27622995782"},
    {type: "cell", link: "tel:+27622995782"},
    {type: "email", link: "mailto:steventmokoena@gmail.com"},
    {type: "github", link: "https://github.com/Steven-MKN"},
]

const FooterSection: React.FC<IFooterSectionProps> = ({}) => {
    return (
        <Stack sx={styles.main} alignItems={"center"} spacing={2}>
            <Typography variant={"h5"}>Steven T. Mokoena</Typography>
            <Typography variant={"body1"}>A full-stack developer with a passion to solve problems</Typography>
            <SocialLinks links={links} />
            <Stack>
                <Typography variant={"caption"}>&copy; {new Date().getFullYear()} Steven Mokoena, All Rights Reserved</Typography>
                <Typography variant={"caption"}>Designed and developed by <Link href={"https://github.com/Steven-MKN"} target={"_blank"} referrerPolicy={"no-referrer"}>Steven Mokoena</Link> </Typography>
            </Stack>
        </Stack>
    )
}

const styles = {
    main: {
        textAlign: 'center',
        paddingBottom: '40px'
    }
}

export default FooterSection
