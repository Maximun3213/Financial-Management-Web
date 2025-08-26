import ViewAllButton from "@/components/Buttons/ViewAllButton";
import HeadingSection from "@/components/HeadingSection";
import ScheduledTransfersCard from "@/modules/HomePage/ScheduledTransfers/Card";
import { Box, Flex } from "@chakra-ui/react";

function ScheduledTransfers(): React.ReactElement {
  return (
    <Box>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={"2.5rem"}
      >
        <HeadingSection title="Scheduled Transfers" />
        <ViewAllButton href={"/transaction"} />
      </Flex>
      {Array.from({ length: 5 }).map((_, index) => (
        <ScheduledTransfersCard key={index} isLast={index === 4} />
      ))}
    </Box>
  );
}

export default ScheduledTransfers;
