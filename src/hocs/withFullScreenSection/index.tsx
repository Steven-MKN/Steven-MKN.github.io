import React from "react";

const withFullScreenSection = (Child: React.FC, sectionTitle?: string, safeArea: boolean = true) => (props: any) => {
  return <WithFullScreenSection title={sectionTitle} safeArea={safeArea}>
    <Child {...props}/>
  </WithFullScreenSection>
}

const WithFullScreenSection: React.FC<{ title?: string, safeArea: boolean }> = ({children, title, safeArea}) => {
  return <div style={styles.main}>
    <div style={{marginLeft: safeArea ? "120px" : "0"}}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  </div>
}

const styles = {
  main: {
    minHeight: "100vh",
    zIndex: 500,
  }
}

export default withFullScreenSection
