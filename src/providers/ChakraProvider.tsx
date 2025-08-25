"use client";

import type { ReactElement, ReactNode } from "react";

import {
  ChakraProvider as Chakra,
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const minimalConfig = defineConfig({
  cssVarsPrefix: "ck",
  utilities: {},
  theme: {
    breakpoints: {
      sm: "768px",
      md: "1200px",
    },
  },
});

const optimizedSystem = createSystem(defaultBaseConfig, minimalConfig);

function ChakraProvider({ children }: Props): ReactElement {
  return <Chakra value={optimizedSystem}>{children}</Chakra>;
}

export default ChakraProvider;
