import HeadingSection from "@/components/HeadingSection";
import Label from "@/components/Typo/Label";
import { TypoColor } from "@/enums/typo";
import useCapitalChartStore from "@/stores/CapitalChart.store";
import { Box, Flex } from "@chakra-ui/react";
import Chart from "./Chart";

function Capital(): React.ReactElement {
  const { data } = useCapitalChartStore();
  return (
    <Box
      p={"1.5rem 2rem"}
      borderRadius={"1rem"}
      border={"1px solid var(--border-color)"}
    >
      <Flex justifyContent={"space-between"}>
        <HeadingSection title="Working Capital" />
        <Flex alignItems={"center"} gap={"3rem"}>
          {data.datasets.map((dataset) => (
            <Flex key={dataset.label} alignItems={"center"} gap={"0.5rem"}>
              <Box
                w={"0.8rem"}
                h={"0.8rem"}
                borderRadius={"50%"}
                bg={dataset.borderColor as string}
              />
              <Label
                color={TypoColor.primaryTextColor}
                size={12}
                fontWeight={400}
              >
                {dataset.label}
              </Label>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Box mt={"3rem"}>
        <Chart />
      </Box>
    </Box>
  );
}

export default Capital;
