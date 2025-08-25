import { ColorModeIcon, useColorMode } from "@/components/ui/color-mode";
import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

function Sidebar(): React.ReactElement {
  const { toggleColorMode } = useColorMode();
  return (
    <Box bg={"var(--bg-sidebar)"} w={"100%"} h={"100vh"} p={"3rem 2.5rem"}>
      <Logo />
      <Menu />
      <Button onClick={toggleColorMode}>
        <ColorModeIcon />
      </Button>
    </Box>
  );
}

export default Sidebar;
