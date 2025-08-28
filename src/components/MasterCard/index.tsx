"use client";

import { TypoColor, TypoTagLabel } from "@/enums/typo";
import { Box, ClientOnly, Flex } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import React from "react";
import SvgInsert from "../SvgInsert";
import Label from "../Typo/Label";

function MasterCard(): React.ReactElement {
  const { theme } = useTheme();

  return (
    <ClientOnly>
      <Box
        p={"1.9rem 3rem"}
        borderRadius={"1.5rem"}
        bg={
          theme === "dark"
            ? "linear-gradient(111deg, #2E2B4A 2.85%, #29263F 128.48%)"
            : "linear-gradient(104deg, #4A4A49 2.66%, #20201F 90.57%)"
        }
      >
        <Flex alignItems={"center"} gap={"0.8rem"}>
          <Label
            size={16}
            as={TypoTagLabel.div}
            color={TypoColor.white}
            fontWeight={700}
          >
            Maglo.
          </Label>
          <Box width={"1px"} height={"2rem"} bg={"#626260"} />
          <Label
            size={12}
            as={TypoTagLabel.div}
            color={TypoColor.gray}
            fontWeight={500}
          >
            Universal Bank
          </Label>
        </Flex>
        <Flex
          mt={"2.7rem"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            width={"3.8rem"}
            height={"3rem"}
            css={{
              "& svg": {
                width: "100%",
                height: "100%",
              },
            }}
          >
            <SvgInsert src="/icons/ic_chip.svg" />
          </Box>
          <Box
            width={"3.3rem"}
            height={"3.4rem"}
            css={{
              "& svg": {
                width: "100%",
                height: "100%",
              },
              "& svg path": {
                stroke: theme === "dark" ? "#78778B" : "#363B41",
              },
            }}
          >
            <SvgInsert src="/icons/ic_nfc.svg" />
          </Box>
        </Flex>
        <Label
          display={"block"}
          mt={"2.1rem"}
          size={17}
          color={TypoColor.white}
          fontWeight={700}
        >
          5495 7381 3759 2321
        </Label>
        <Flex mt={"1rem"} justifyContent={"space-between"}>
          <Label size={12} color={TypoColor.gray} fontWeight={500}>
            04/24
          </Label>
          <Box width={"4.7rem"} height={"3.6rem"}>
            <SvgInsert
              src="/icons/ic_master.svg"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Flex>
      </Box>
    </ClientOnly>
  );
}

export default MasterCard;
