"use client";
import Heading from "@/components/Typo/Heading";
import { ROUTER } from "@/constants/router";
import { TypoColor, TypoTagHeading } from "@/enums/typo";
import React from "react";

import SvgInsert from "@/components/SvgInsert";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { Button, Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

function Header(): React.JSX.Element {
  const pathname = usePathname();
  const { toggleColorMode } = useColorMode();

  const generateTitle = () => {
    if (pathname === "/") return "Dashboard";

    return ROUTER.find((item) => item.href === pathname)?.label;
  };

  return (
    <Flex as={"header"} justifyContent={"space-between"} w={"100%"}>
      <Heading
        as={TypoTagHeading.h1}
        size={25}
        fontWeight={600}
        textTransform={"capitalize"}
        color={TypoColor.primaryTextColor}
      >
        {generateTitle()}
      </Heading>

      <Flex alignItems={"center"} gap={"4.5rem"}>
        <Button onClick={toggleColorMode} bg={"transparent"}>
          <SvgInsert
            src="/icons/ic_notify.svg"
            width={"2.4rem"}
            height={"2.4rem"}
          />
        </Button>
        <ColorModeButton />
      </Flex>
    </Flex>
  );
}

export default Header;
