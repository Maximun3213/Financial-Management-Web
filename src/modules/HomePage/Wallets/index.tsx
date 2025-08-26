import SvgInsert from "@/components/SvgInsert";
import Label from "@/components/Typo/Label";
import { TypoColor } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

function Wallets(): React.ReactElement {
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"space-between"} gap={"1rem"}>
        <Label size={18} fontWeight={600} color={TypoColor.primaryTextColor}>
          Wallet
        </Label>
        <Box
          width={"2.2rem"}
          height={"2.2rem"}
          css={{
            "& svg": {
              width: "2.2rem",
              height: "2.2rem",
            },
          }}
        >
          <SvgInsert src={"/icons/ic_dot.svg"} />
        </Box>
      </Flex>
      <Box mt="1.5rem">cards</Box>
    </Box>
  );
}

export default Wallets;
