import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-roboto";

export const lightTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    type: "light",
    primary: {
      main: "#1e88e5"
    },
    disable: "#cccccc"
  },
  props: {
    drawer: {
      drawerWidth: 200
    },
    icons: {
      iconColor: "#0000008a"
    },
    mediaPlayer: {
      mediaPlayerHeight: "6.8rem",
      mediaPlayerBackgroundColor: "#fefefe",
      mediaPlayerPlayButtonBackground: "#1e88e5"
    },
    appBar: {
      appBarHeight: "4rem",
      appBarBackgroundColor: "#1e88e5"
    }
  }
});

export const darkTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    type: "dark",
    primary: {
      main: "#1e88e5"
    },
    disable: "#cccccc"
  },
  props: {
    drawer: {
      drawerWidth: 200
    },
    mediaPlayer: {
      mediaPlayerHeight: "6.8rem",
      mediaPlayerBackgroundColor: "#424242",
      mediaPlayerPlayButtonBackground: "#838383"
    },
    icons: {
      iconColor: "#fff"
    },
    appBar: {
      appBarHeight: "4rem",
      appBarBackgroundColor: "#424242"
    }
  }
});
