import SvgInsert from "@/components/SvgInsert";
import { useColorMode } from "@/components/ui/color-mode";
import { Box } from "@chakra-ui/react";
import classNames from "classnames";
import React from "react";
import s from "./Logo.module.scss";
function Logo(): React.ReactElement {
  const { colorMode } = useColorMode();
  console.log("colorMode", colorMode);
  return (
    <Box
      width={"12.2rem"}
      height={"3rem"}
      className={classNames(colorMode === "dark" ? s.light : s.dark)}
    >
      <SvgInsert src={"/imgs/logo.svg"} />
    </Box>
  );
}

export default Logo;
