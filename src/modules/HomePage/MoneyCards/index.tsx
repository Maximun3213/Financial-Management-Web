import SvgInsert from "@/components/SvgInsert";
import { Box, Flex, Grid } from "@chakra-ui/react";
import classNames from "classnames";
import React from "react";
import s from "./MoneyCards.module.scss";

function MoneyCards(): React.ReactElement {
  return (
    <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={"2.5rem"}>
      <Flex
        p="2.4rem 2rem"
        bg={"var(--bg-card)"}
        borderRadius={"1rem"}
        className={classNames(s.card, s.active)}
      >
        <Flex
          width={"4.2rem"}
          height={"4.2rem"}
          bg={"var(--bg-card-icon)"}
          borderRadius={"50%"}
          justifyContent={"center"}
          alignItems={"center"}
          css={{
            "& svg": {
              width: "2rem",
              height: "2rem",
            },
          }}
        >
          <SvgInsert src={"/icons/ic_wallet.svg"} />
        </Flex>
      </Flex>
      <Box>MoneyCards</Box>
      <Box>MoneyCards</Box>
    </Grid>
  );
}

export default MoneyCards;
