// example base theme from @theme-ui/presets
export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "text",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
      "&:hover": {
        bg: "primary",
      },
      width: "150px",
    },
  },
  links: {
    nav: {
      px: 2,
      py: 1,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      color: "text",
      "&:hover": {
        color: "primary",
      },
      "&:active": {
        color: "links",
      },
    },
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#222",
    background: "#fff",
    primary: "#75715f",
    secondary: "#fc8059",
    muted: "#f6f6f6",
    links: "#bfbba3",
    modes: {
      dark: {
        text: "#f4f4f4",
        background: "#232323",
        primary: "#fc8059",
      },
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "text",
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      position: "relative",
      mb: "2.5%",
      px: "4",
      py: "4",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },

  },
};
