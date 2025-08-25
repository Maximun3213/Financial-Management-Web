import IconColorMode from "@/components/IconColorMode";
import Label from "@/components/Typo/Label";
import { TypoColor } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function User(): React.JSX.Element {
  return (
    <Flex
      bg={"var(--bg-card)"}
      alignItems={"center"}
      borderRadius={"10rem"}
      gap={"2.8rem"}
      p={"0.6rem 1.5rem 0.6rem 0.7rem"}
    >
      <Flex alignItems={"center"} gap={"1.2rem"}>
        <Box
          aspectRatio={1}
          w={"3.6rem"}
          h={"3.6rem"}
          css={{
            "& img": {
              width: "100%",
              height: "100%",
            },
          }}
        >
          <Image src={"/imgs/avt.png"} alt="user" width={36} height={36} />
        </Box>
        <Label color={TypoColor.primaryTextColor} size={14} fontWeight={600}>
          Mahfuzul Nabil
        </Label>
      </Flex>
      <IconColorMode src="/icons/ic_dropdown.svg" size={1.7} />
    </Flex>
  );
}

export default User;
