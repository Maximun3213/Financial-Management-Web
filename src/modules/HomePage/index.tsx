"use client";

import { Box, Flex } from "@chakra-ui/react";
import WithSideBar from "@Layout/WithSideBar";
import React from "react";
import MoneyCards from "./MoneyCards";

function HomePage(): React.ReactElement {
  return (
    <WithSideBar>
      <Box display={"grid"} gridTemplateColumns={"71.7rem 1fr"} gap={"4rem"}>
        <Flex flexDirection={"column"} gap={"3rem"}>
          <MoneyCards />
          <Box bg="red" w={"100%"}>
            2
          </Box>
          <Box bg="red" w={"100%"}>
            3
          </Box>
        </Flex>
        <Flex flexDirection={"column"} gap={"3rem"}>
          <Box bg="red" w={"100%"}>
            1
          </Box>
          <Box bg="red" w={"100%"}>
            2
          </Box>
        </Flex>
      </Box>
    </WithSideBar>
  );
}

export default HomePage;
