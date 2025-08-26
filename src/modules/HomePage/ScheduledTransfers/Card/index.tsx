import Label from "@/components/Typo/Label";
import { TypoColor } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  isLast?: boolean;
};

function ScheduledTransfersCard({ isLast }: Props): React.ReactElement {
  return (
    <Box
      py={"1.2rem"}
      borderBottom={isLast ? "none" : "1px solid var(--border-color)"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"} gap={"1.5rem"}>
          <Box
            width={"3.3rem"}
            height={"3.3rem"}
            css={{
              "& img": {
                width: "100%",
                height: "100%",
              },
            }}
          >
            <Image src={"/imgs/avt.png"} alt="user" width={33} height={33} />
          </Box>
          <Flex flexDirection={"column"} gap={"0.7rem"}>
            <Label
              color={TypoColor.primaryTextColor}
              size={14}
              fontWeight={600}
            >
              Saleh Ahmed
            </Label>
            <Label
              color={TypoColor.secondaryTextColor}
              size={12}
              fontWeight={500}
            >
              April 25, 2022 at 11:00
            </Label>
          </Flex>
        </Flex>

        <Label color={TypoColor.primaryTextColor} size={16} fontWeight={600}>
          - $435,00
        </Label>
      </Flex>
    </Box>
  );
}

export default ScheduledTransfersCard;
