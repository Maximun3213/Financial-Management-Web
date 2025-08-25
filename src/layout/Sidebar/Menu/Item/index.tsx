import SvgInsert from "@/components/SvgInsert";
import Label from "@/components/Typo/Label";
import { TypoColor } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";
import classNames from "classnames";
import Link from "next/link";
import styles from "./Item.module.scss";

type Props = {
  href: string;
  icon: string;
  children: React.ReactNode;
  isActive?: boolean;
};

function Item({ href, children, isActive, icon }: Props): React.ReactElement {
  return (
    <Link href={href}>
      <Flex
        alignItems={"center"}
        gap={"1.2rem"}
        p={"1.4rem 1.5rem"}
        borderRadius={".8rem"}
        bg={isActive ? "var(--primary-color)" : "transparent"}
        _hover={{
          bg: !isActive ? "#cccccc21" : "var(--primary-color)",
        }}
      >
        <Box
          w={"2rem"}
          h={"2rem"}
          className={classNames(styles.icon, isActive && styles.active)}
        >
          <SvgInsert src={icon} />
        </Box>
        <Label
          size={14}
          color={isActive ? TypoColor.dark : TypoColor.secondaryTextColor}
          fontWeight={600}
        >
          {children}
        </Label>
      </Flex>
    </Link>
  );
}

export default Item;
