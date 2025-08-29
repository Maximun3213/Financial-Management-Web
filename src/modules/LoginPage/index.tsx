import Logo from "@/layout/Sidebar/Logo";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import LoginForm from "./LoginForm";

function LoginPage(): React.ReactElement {
  return (
    <Grid templateColumns="1fr 1fr" h="100vh" maxHeight={"100vh"}>
      <GridItem w="100%" h="100%" position={"relative"}>
        <Box px="13.5rem" pt={"4rem"}>
          <Logo />
        </Box>
        <Box
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
        >
          <LoginForm />
        </Box>
      </GridItem>
      <GridItem overflow={"hidden"}>
        <Box
          h="100%"
          w="100%"
          css={{
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1599837565318-67429bde7162?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
            width={675}
            height={900}
          />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default LoginPage;
