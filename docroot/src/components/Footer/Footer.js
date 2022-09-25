// React imports.
import React from "react";

// Theme IU imports.
import { Paragraph, Flex } from "theme-ui";

function Footer() {
  return (
    <footer>
      <Flex
        sx={{
          justifyContent: "center",
          mt: "2.5%",
        }}
      >
        <Paragraph>&copy; 2022</Paragraph>
      </Flex>
    </footer>
  );
}

export default Footer;
