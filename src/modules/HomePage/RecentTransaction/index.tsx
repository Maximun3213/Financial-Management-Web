import ViewAllButton from "@/components/Buttons/ViewAllButton";
import HeadingSection from "@/components/HeadingSection";
import { Box, Flex } from "@chakra-ui/react";

function RecentTransaction(): React.ReactElement {
  return (
    <Box
      p={"1.5rem 2rem"}
      borderRadius={"1rem"}
      border={"1px solid var(--border-color)"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <HeadingSection title="Recent Transaction" />
        <ViewAllButton href={"/transaction"} />
      </Flex>
    </Box>
  );
}

export default RecentTransaction;
