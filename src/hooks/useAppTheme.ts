import { createTheme } from "@mui/material";

export type AppColorPelette = {
  background: `#${string}`;
  onBackground: `#${string}`;
  surface: `#${string}`;
  onSurface: `#${string}`;
  primary: `#${string}`;
  onPrimary: `#${string}`;
  typography: {
    headline: `#${string}`;
    title: `#${string}`;
    body: `#${string}`;
    caption: `#${string}`;
    label: `#${string}`;
  }
}

export const colorPalette: AppColorPelette = {
  background: "#000000",
  onBackground: "#d3d3d3",

  surface: '#131313',
  onSurface: "#ffffff",

  primary: "#3a7d26",
  onPrimary: "#131313",

  typography: {
    headline: "#ffffff",
    title: "#ffffff",
    body: "#d3d3d3",
    caption: "#d3d3d3",
    label: "#d3d3d3"
  }
}

const useAppTheme = () => {
  return createTheme({
    typography: {
      fontFamily: "SF Mono, Roboto, sans-serif",
      allVariants: {
        color: colorPalette.onBackground,
      }
    },
  });
};

export default useAppTheme;
