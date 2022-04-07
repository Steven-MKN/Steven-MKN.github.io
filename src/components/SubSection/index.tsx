import React from "react";

const SubSection: React.FC<{title?: string}> = ({children,title}) => {
  return <div style={styles.main}>
    {title && <h2 style={styles.subTitle}>{title}</h2>}
    <div style={styles.content}>
      {children}
    </div>
  </div>
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
