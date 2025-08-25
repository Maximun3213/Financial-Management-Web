import { ROUTER } from "@/constants/router";
import { Box, Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Item from "./Item";
import Logout from "./Logout";

function Menu(): React.ReactElement {
  const pathname = usePathname();
  return (
    <Flex
      mt={"4rem"}
      h={"calc(100% - 14rem)"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Flex flexDirection={"column"} h={"100%"}>
        {ROUTER.map((item) => (
          <Item
            href={item.href}
            key={item.href}
            icon={item.icon}
            isActive={pathname === item.href}
          >
            {item.label}
          </Item>
        ))}
      </Flex>
      <Box>
        <Item href={"/help"} icon="/icons/ic_help.svg">
          Help
        </Item>
        <Logout />
      </Box>
    </Flex>
  );
}

export default Menu;
