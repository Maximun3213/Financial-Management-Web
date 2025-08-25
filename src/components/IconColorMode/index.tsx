import { Box } from "@chakra-ui/react";
import classNames from "classnames";
import SvgInsert from "../SvgInsert";
import { useColorMode } from "../ui/color-mode";

type Props = {
  src: string;
  size?: number;
};

function IconColorMode({ src, size = 2 }: Props): React.ReactElement {
  const { colorMode } = useColorMode();
  return (
    <Box
      w={`${size}rem`}
      h={`${size}rem`}
      className={classNames(
        colorMode === "dark" ? "ic_color_light" : "ic_color_dark"
      )}
      css={{
        svg: {
          width: "100%",
          height: "100%",
        },
      }}
    >
      <SvgInsert src={src} />
    </Box>
  );
}

export default IconColorMode;
