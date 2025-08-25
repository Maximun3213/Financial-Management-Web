import SvgInsert from "@/components/SvgInsert";
import { Box } from "@chakra-ui/react";
import React from "react";

function Logo(): React.ReactElement {
  return (
    <Box
      width={"12.2rem"}
      height={"3rem"}
      css={{
        "& svg": {
          width: "100%",
          height: "100%",
        },
        "& svg path": {
          fill: "var(--primary-text-color)",
        },
      }}
    >
      <SvgInsert src={"/imgs/logo.svg"} />
    </Box>
  );
}

export default Logo;
