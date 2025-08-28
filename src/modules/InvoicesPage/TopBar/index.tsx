"use client";

import IconColorMode from "@/components/IconColorMode";
import SearchInput, { TInputRef } from "@/components/SearchInput";
import SvgInsert from "@/components/SvgInsert";
import Label from "@/components/Typo/Label";
import { TypoColor } from "@/enums/typo";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useRef } from "react";

function TopBar(): React.ReactElement {
  const inputRef = useRef<TInputRef>(null);

  return (
    <Flex
      pb={"2.5rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottom={"1px solid var(--border-color)"}
    >
      <Box w={"22.4rem"}>
        <SearchInput ref={inputRef} placeholder="Search invoices" />
      </Box>
      <Flex alignItems={"center"} gap={"3rem"}>
        <Button
          bg={"var(--primary-color)"}
          color={"var(--dark)"}
          borderRadius={"1rem"}
          p={"1.4rem 2rem"}
          _hover={{
            bg: "var(--primary-color)",
          }}
        >
          <Flex alignItems={"center"} gap={"1rem"}>
            <Box width={"2rem"} height={"2rem"}>
              <SvgInsert
                src="/icons/ic_invoice.svg"
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <Label size={14} fontWeight={600}>
              Create Invoice
            </Label>
          </Flex>
        </Button>
        <Button
          border={"1px solid var(--border-color)"}
          borderRadius={"1rem"}
          p={"1.4rem 2rem"}
          bg={"transparent"}
        >
          <Flex alignItems={"center"} gap={"1rem"}>
            <IconColorMode src="/icons/ic_filter.svg" size={2} />
            <Label
              size={14}
              fontWeight={500}
              color={TypoColor.primaryTextColor}
            >
              Filter
            </Label>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
}

export default TopBar;
