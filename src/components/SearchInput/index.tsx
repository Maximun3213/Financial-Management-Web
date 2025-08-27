"use client";

import { Box, Flex, Input } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useImperativeHandle, useRef } from "react";
import SvgInsert from "../SvgInsert";

type Props = {
  ref: React.Ref<TInputRef>;
};

export type TInputRef = {
  focus: () => void;
  getInputValue: () => string | undefined;
};

function SearchInput({ ref }: Props): React.ReactElement {
  const { theme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    getInputValue: () => {
      return inputRef.current?.value;
    },
  }));

  return (
    <Flex
      alignItems={"center"}
      gap={"1.5rem"}
      bg={"var(--input-bg-color)"}
      p={"1.5rem"}
      borderRadius={"1.5rem"}
      maxWidth={"33.5rem"}
    >
      <Box
        width={"2.4rem"}
        height={"2.4rem"}
        css={{
          "& svg": {
            width: "100%",
            height: "100%",
          },
          "& svg path": {
            stroke: theme === "dark" ? "#78778B" : "#363A3F",
          },
        }}
      >
        <SvgInsert src={"/icons/ic_search.svg"} />
      </Box>
      <Input
        ref={inputRef}
        placeholder="Search anything on Transactions"
        border={"none"}
        bg={"transparent"}
        w={"100%"}
        h={"2.4rem"}
        _placeholder={{
          color: "var(--secondary-text-color)",
          fontSize: "1.4rem",
          fontWeight: "400",
        }}
      />
    </Flex>
  );
}

export default SearchInput;
