import React from "react";
import {Box, Typography} from "@mui/material";

const SubSection: React.FC<{title?: string}> = ({children,title}) => {
  return <Box sx={styles.main}>
    {title && <Typography variant={"h2"} sx={styles.subTitle}>{title}</Typography>}
    <Box sx={styles.content}>
      {children}
    </Box>
  </Box>
}

const styles = {
  main: {
    paddingLeft: '10px',
    paddingRight: '50px',
  },
  content: {
    paddingLeft: "8px"
  },
  subTitle: {
    marginTop: "32px"
  }
}

export default SubSection
