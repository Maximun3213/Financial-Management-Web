import { Box } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

function Sidebar(): React.ReactElement {
  return (
    <Box bg={"var(--bg-sidebar)"} w={"100%"} h={"100vh"} p={"3rem 2.5rem"}>
      <Logo />
      <Menu />
    </Box>
  );
}

export default Sidebar;
