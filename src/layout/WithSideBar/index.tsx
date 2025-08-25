import { Container } from "@/components/Container";
import Header from "@/layout/Header";
import { Box } from "@chakra-ui/react";
import Sidebar from "@Layout/Sidebar";
import React from "react";

export default function WithSideBar({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"25rem 1fr"}
      h={"100vh"}
      minH={"100vh"}
    >
      <Sidebar />
      <Container>
        <Box w={"100%"} h={"100%"}>
          <Header />
          {children}
        </Box>
      </Container>
    </Box>
  );
}
