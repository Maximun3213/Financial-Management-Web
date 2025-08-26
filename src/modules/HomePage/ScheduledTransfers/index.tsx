import ViewAllButton from "@/components/Buttons/ViewAllButton";
import HeadingSection from "@/components/HeadingSection";
import { Box, Flex } from "@chakra-ui/react";

function ScheduledTransfers(): React.ReactElement {
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <HeadingSection title="Scheduled Transfers" />
        <ViewAllButton href={"/transaction"} />
      </Flex>
    </Box>
  );
}

export default ScheduledTransfers;
