import React from "react";
import { Box, Typography } from "@mui/material";

const SubSection: React.FC<{
  title?: string;
  id?: string;
  sectionRef?: React.MutableRefObject<any>;
}> = ({ children, title, id, sectionRef }) => {
  return (
    <Box sx={styles.main} id={id} ref={sectionRef}>
      {title && (
        <Typography variant={"h2"} sx={styles.subTitle}>
          {title}
        </Typography>
      )}
      <Box sx={styles.content}>{children}</Box>
    </Box>
  );
};

const styles = {
  main: {
    paddingLeft: "10px",
    paddingRight: "50px",
  },
  content: {
    paddingLeft: "8px",
  },
  subTitle: {
    marginTop: "32px",
  },
};

export default SubSection;
