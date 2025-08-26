"use client";

import SvgInsert from "@/components/SvgInsert";
import Label from "@/components/Typo/Label";
import { TypoColor } from "@/enums/typo";
import { Box, ClientOnly, Flex } from "@chakra-ui/react";
import classNames from "classnames";
import { useTheme } from "next-themes";
import React from "react";
import s from "./Card.module.scss";

type Props = {
  isActive?: boolean;
  balance: number;
  icon: string;
  title: string;
};

function Card({ isActive, balance, icon, title }: Props): React.ReactElement {
  const { theme } = useTheme();

  return (
    <ClientOnly>
      <Box className={classNames(s.card, theme === "dark" && s.dark)}>
        <Flex
          className={classNames(s.card_inner, { [s.active]: isActive })}
          p="2.4rem 2rem"
          borderRadius={"1rem"}
          gap={"1.5rem"}
          alignItems={"center"}
        >
          <Flex
            width={"4.2rem"}
            height={"4.2rem"}
            borderRadius={"50%"}
            justifyContent={"center"}
            alignItems={"center"}
            className={s.card_inner_icon}
            css={{
              "& svg": {
                width: "2rem",
                height: "2rem",
              },
            }}
          >
            <SvgInsert src={icon} />
          </Flex>
          <Flex flexDirection={"column"} gap={"1rem"}>
            <Label
              size={14}
              fontWeight={400}
              color={TypoColor.secondaryTextColor}
            >
              {title}
            </Label>
            <Label
              size={24}
              fontWeight={700}
              color={TypoColor.primaryTextColor}
              className={s.card_inner_balance}
            >
              ${balance}
            </Label>
          </Flex>
        </Flex>
      </Box>
    </ClientOnly>
  );
}

export default Card;
