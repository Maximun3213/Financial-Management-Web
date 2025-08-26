import HeadingSection from "@/components/HeadingSection";
import { Box } from "@chakra-ui/react";

function Capital(): React.ReactElement {
  return (
    <Box
      p={"1.5rem 2rem"}
      borderRadius={"1rem"}
      border={"1px solid var(--border-color)"}
    >
      <HeadingSection title="Working Capital" />
    </Box>
  );
}

export default Capital;
