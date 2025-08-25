import { Box } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import React from "react";

function Sidebar(): React.ReactElement {
  const { resolvedTheme } = useTheme();
  console.log(resolvedTheme);
  return (
    <Box bg={"red"} w={"100%"} h={"100vh"} p={"3rem 2.5rem"}>
      Sidebar
    </Box>
  );
}

export default Sidebar;
