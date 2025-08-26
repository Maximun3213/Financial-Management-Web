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
        p={"1.5rem 2rem"}
        borderRadius={"1.5rem"}
        backdropFilter={"blur(5px)"}
        bg={
          "linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 100%)"
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
          <Box width={"1px"} height={"2rem"} bg={"#fff"} />
          <Label
            size={12}
            as={TypoTagLabel.div}
            color={TypoColor.white}
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
            width={"3rem"}
            height={"2.4rem"}
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
          85952548****
        </Label>
        <Flex mt={"1rem"} justifyContent={"space-between"}>
          <Label size={12} color={TypoColor.gray} fontWeight={500}>
            09/25
          </Label>
          <Box
            width={"3.2rem"}
            height={"2.1rem"}
            css={{
              "& svg": {
                width: "100%",
                height: "100%",
              },
              "& svg path": {
                fill: theme === "dark" ? "#fff" : "#1A1F71",
              },
            }}
          >
            <SvgInsert
              src="/icons/ic_visa.svg"
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
