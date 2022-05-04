import React from "react";
import {Box, Typography} from "@mui/material";

const withFullScreenSection = (Child: React.FC, sectionTitle?: string, safeArea: boolean = true) => (props: any) => {
  return <WithFullScreenSection title={sectionTitle} safeArea={safeArea}>
    <Child {...props}/>
  </WithFullScreenSection>
}

const WithFullScreenSection: React.FC<{ title?: string, safeArea: boolean }> = ({children, title, safeArea}) => {
  return <Box sx={styles.main}>
    <Box sx={{
        paddingLeft: {
            xs: safeArea ? "20px" : "0",
            sm: safeArea ? "20px" : "0",
            md: safeArea ? "120px" : "0",
            lg: safeArea ? "120px" : "0",
            xl: safeArea ? "120px" : "0"
          },
        paddingRight: {
            xs: safeArea ? "20px" : "0",
            sm: safeArea ? "20px" : "0",
            md: safeArea ? "120px" : "0",
            lg: safeArea ? "120px" : "0",
            xl: safeArea ? "120px" : "0"
        },
        paddingTop: safeArea ? "28px": "0px"}}>
      {title && <Typography variant={"h1"}>{title}</Typography>}
      {children}
    </Box>
  </Box>
}

const styles = {
  main: {
    minHeight: "100vh",
    zIndex: 500,
  }
}

export default withFullScreenSection
