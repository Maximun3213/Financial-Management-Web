import HeadingSection from "@/components/HeadingSection";
import MasterCard from "@/components/MasterCard";
import SvgInsert from "@/components/SvgInsert";
import VisaCard from "@/components/VisaCard";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

function Wallets(): React.ReactElement {
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"space-between"} gap={"1rem"}>
        <HeadingSection title="Wallet" />

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
      <Box mt="1.5rem">
        <MasterCard />
        <Box
          maxWidth={"32.4rem"}
          margin={"0 auto"}
          mt={"-6rem"}
          position={"relative"}
        >
          <VisaCard />
        </Box>
      </Box>
    </Box>
  );
}

export default Wallets;
