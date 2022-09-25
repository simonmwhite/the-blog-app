// React imports.
import React from "react";
import image from "../../../src/images/blog.svg";

// Theme UI imports.
import { Heading, Box, Image, Button, useColorMode } from "theme-ui";

function Header() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Box as="Header">
      <Button
        onClick={(e) => {
          e.preventDefault();
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
        sx={{
          lineHeight: 1,
          position: "absolute",
          top: 3,
          right: 3,
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M256 128c-70.692 0-128 57.308-128 128s57.308 128 128 128 128-57.308 128-128-57.308-128-128-128zM256 336v-160c44.112 0 80 35.888 80 80s-35.888 80-80 80zM256 416c17.673 0 32 14.327 32 32v32c0 17.673-14.327 32-32 32s-32-14.327-32-32v-32c0-17.673 14.327-32 32-32zM256 96c-17.673 0-32-14.327-32-32v-32c0-17.673 14.327-32 32-32s32 14.327 32 32v32c0 17.673-14.327 32-32 32zM480 224c17.673 0 32 14.327 32 32s-14.327 32-32 32h-32c-17.673 0-32-14.327-32-32s14.327-32 32-32h32zM96 256c0 17.673-14.327 32-32 32h-32c-17.673 0-32-14.327-32-32s14.327-32 32-32h32c17.673 0 32 14.327 32 32zM414.392 369.137l22.628 22.628c12.496 12.496 12.496 32.758 0 45.255-12.497 12.496-32.759 12.496-45.255 0l-22.628-22.628c-12.496-12.496-12.496-32.758 0-45.255 12.497-12.496 32.759-12.496 45.255 0zM97.608 142.863l-22.628-22.628c-12.497-12.497-12.497-32.758 0-45.255s32.758-12.497 45.255 0l22.628 22.628c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0zM414.392 142.863c-12.496 12.496-32.758 12.496-45.255 0-12.496-12.497-12.496-32.758 0-45.255l22.628-22.627c12.496-12.497 32.758-12.497 45.255 0 12.496 12.497 12.496 32.758 0 45.255l-22.628 22.627zM97.608 369.137c12.496-12.496 32.758-12.496 45.254 0 12.497 12.497 12.497 32.759 0 45.255l-22.627 22.628c-12.497 12.496-32.758 12.496-45.255 0-12.497-12.497-12.497-32.759 0-45.255l22.628-22.628z"></path>
        </svg>
      </Button>
      <a href="/home" title="Home">
        <Image
          width="75"
          height="75"
          src={image}
          sx={{
            mx: "auto",
            mt: "0",
            mb: "1rem",
            display: "block",
          }}
          alt="A laptop showing the layout of a blog post on the screen with a pencil overlayed."
        />
      </a>
      <Heading
        as="h1"
        sx={{
          mx: "auto",
          mt: "0",
          mb: "1rem",
          display: "block",
          textAlign: "center",
        }}
      >
        The Blog App
      </Heading>
    </Box>
  );
}

export default Header;
