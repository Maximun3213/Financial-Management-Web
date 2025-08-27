import { Box, Flex } from "@chakra-ui/react";
import WithSideBar from "@Layout/WithSideBar";
import React from "react";
import Capital from "./Capital";
import MoneyCards from "./MoneyCards";
import RecentTransaction from "./RecentTransaction";
import ScheduledTransfers from "./ScheduledTransfers";
import Wallets from "./Wallets";

function HomePage(): React.ReactElement {
  return (
    <WithSideBar>
      <Box display={"grid"} gridTemplateColumns={"71.7rem 1fr"} gap={"4rem"}>
        <Flex flexDirection={"column"} gap={"3rem"}>
          <MoneyCards />
          <Capital />
          <RecentTransaction />
        </Flex>
        <Flex flexDirection={"column"} gap={"3rem"}>
          <Wallets />
          <ScheduledTransfers />
        </Flex>
      </Box>
    </WithSideBar>
  );
}

export default HomePage;
