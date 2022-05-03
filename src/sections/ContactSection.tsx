import React from "react";
import withFullScreenSection from "../hocs/withFullScreenSection";
import {Box, Stack, Typography} from "@mui/material";
import {SocialLinkType} from "../components/SocialLinkButton/types";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

interface IContactSectionProps {
}

const contact: {intro: string, info: {type: "location" | "email" | "cell", value: string}[], socialLinks: SocialLinkType[]} = {
    intro: "Hey, would you like to get in touch or give me feedback on any of my work (negative or positive)?, feel free to use any of the options to contact me",
    info: [
        {type: "location", value: "Johannesburg, South Africa"},
        {type: "email", value: "steventmokoena@gmail.com"},
        {type: "cell", value: "+27622995782"}
    ],
    socialLinks: [
        {type: "linkedin", link: "https://www.linkedin.com/in/steven1mokoena"},
        {type: "whatsapp", link: "https://wa.me/27622995782"},
        {type: "cell", link: "tel:+27622995782"},
        {type: "email", link: "mailto:steventmokoena@gmail.com"},
        {type: "github", link: "https://github.com/Steven-MKN"},
    ]
}

const ContactSection: React.FC<IContactSectionProps> = () => {
    return <Box sx={styles.main}>
        <Typography mt={4} textAlign={"center"} variant={"body1"}>{contact.intro}</Typography>
        <Box sx={styles.wrapperOne}>
            <Stack sx={styles.info}>
                {contact.info.map(it => <ContactInfo info={it} key={it.type} />)}
            </Stack>
            <Box sx={styles.form}>
                <ContactForm />
            </Box>
        </Box>
    </Box>
}

const styles = {
    main: {
        justifyContent: 'center',
    },
    wrapperOne: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '35px'
    },
    info: {
        width: {
            xs: "88%",
            sm: "88%",
            md: "88%",
            lg: "40%",
            xl: "40%"
        },
    },
    form: {
        width: {
            xs: "88%",
            sm: "88%",
            md: "60%",
            lg: "40%",
            xl: "40%"
        },
    }
}

export default withFullScreenSection(ContactSection, "Contact")
