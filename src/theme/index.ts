import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#1F2A44",
      secondary: "#FF5C8A",
      accent: "#8A7FFF",
    },
  },
  fonts: {
    heading: `'Press Start 2P', system-ui, sans-serif`,
    body: `'Inter', system-ui, sans-serif`,
  },
});

export default theme;
