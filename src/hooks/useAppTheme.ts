import { createTheme } from "@mui/material";

const useAppTheme = () => {
  return createTheme({
    typography: {
      fontFamily: "Montserrat Alternates",
    },
  });
};

export default useAppTheme;
