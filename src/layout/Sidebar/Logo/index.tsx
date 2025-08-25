import SvgInsert from "@/components/SvgInsert";
import { useColorMode } from "@/components/ui/color-mode";
import { Box } from "@chakra-ui/react";
import classNames from "classnames";
import React from "react";
function Logo(): React.ReactElement {
  const { colorMode } = useColorMode();

  return (
    <Box
      width={"12.2rem"}
      height={"3rem"}
      className={classNames(
        colorMode === "dark" ? "ic_color_light" : "ic_color_dark"
      )}
      css={{
        "& svg": {
          width: "100%",
          height: "100%",
        },
      }}
    >
      <SvgInsert src={"/imgs/logo.svg"} />
    </Box>
  );
}

export default Logo;
