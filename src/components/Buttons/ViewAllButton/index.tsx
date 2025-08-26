import SvgInsert from "@/components/SvgInsert";
import Label from "@/components/Typo/Label";
import { TypoColor } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  href: string;
};

function ViewAllButton({ href }: Props): React.ReactElement {
  return (
    <Link href={href}>
      <Flex alignItems={"center"} gap={"0.6rem"}>
        <Label size={14} fontWeight={600} color={TypoColor.secondaryColor}>
          View All
        </Label>
        <Box
          width={"1.8rem"}
          height={"1.8rem"}
          css={{
            "& svg": {
              width: "100%",
              height: "100%",
            },
          }}
        >
          <SvgInsert src={"/icons/ic_arrow_right.svg"} />
        </Box>
      </Flex>
    </Link>
  );
}

export default ViewAllButton;
