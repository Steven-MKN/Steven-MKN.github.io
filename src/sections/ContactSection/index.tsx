import React, {useContext} from "react";
import withFullScreenSection from "../../hocs/withFullScreenSection";
import {Box, Stack, Typography} from "@mui/material";
import ContactInfo from "../../components/ContactInfo";
import ContactForm from "../../components/ContactForm";
import {Context} from "../../Store";
import {contactSectionSelector} from "./selectors";

interface IContactSectionProps {
}

const Index: React.FC<IContactSectionProps> = () => {
    const state = useContext(Context);
    const {intro, info} = contactSectionSelector(state);

    return <Box sx={styles.main}>
        <Typography mt={4} textAlign={"center"} variant={"body1"}>{intro}</Typography>
        <Box sx={styles.wrapperOne}>
            <Stack sx={styles.info}>
                {info.map(it => <ContactInfo info={it} key={it.type}/>)}
            </Stack>
            <Box sx={styles.form}>
                <ContactForm/>
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

export default withFullScreenSection(Index, "Contact")
