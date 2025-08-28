"use client";

import SvgInsert from "@/components/SvgInsert";
import Label from "@/components/Typo/Label";
import { TypoColor, TypoTagLabel } from "@/enums/typo";
import { Box, ClientOnly, Flex, Table } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import Image from "next/image";

function InvoicesTable(): React.ReactElement {
  const { theme } = useTheme();
  const items = [
    {
      id: 1,
      name: "Iphone 13 Pro MAX",
      company: "Apple. Inc",
      image: "/imgs/phone.png",
      type: "Electronics",
      amount: 420.84,
      date: "14 Apr 2022",
      invoiceId: "MGL0124877",
      time: "14:00 PM",
    },
    {
      id: 2,
      name: "Iphone 13 Pro MAX",
      company: "Apple. Inc",
      image: "/imgs/phone.png",
      type: "Electronics",
      amount: 420.84,
      date: "14 Apr 2022",
      invoiceId: "MGL0124877",
      time: "14:00 PM",
    },
    {
      id: 3,
      name: "Iphone 13 Pro MAX",
      company: "Apple. Inc",
      image: "/imgs/phone.png",
      type: "Electronics",
      amount: 420.84,
      date: "14 Apr 2022",
      invoiceId: "MGL0124877",
      time: "14:00 PM",
    },
  ];

  return (
    <Box mt={"2.5rem"}>
      <Table.Root w={"100%"} variant={"line"}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader textAlign={"left"} pb={"2rem"}>
              <Label
                color={TypoColor.headerTextTable}
                size={12}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                NAME/CLIENT
              </Label>
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign={"left"} pb={"2rem"}>
              <Label
                color={TypoColor.headerTextTable}
                size={12}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                DATE
              </Label>
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign={"left"} pb={"2rem"}>
              <Label
                color={TypoColor.headerTextTable}
                size={12}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                ORDERS/TYPE
              </Label>
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign={"left"} pb={"2rem"}>
              <Label
                color={TypoColor.headerTextTable}
                size={12}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                AMOUNT
              </Label>
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign={"left"} pb={"2rem"}>
              <Label
                color={TypoColor.headerTextTable}
                size={12}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                STATUS
              </Label>
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign={"left"} pb={"2rem"}>
              <Label
                color={TypoColor.headerTextTable}
                size={12}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                ACTIONS
              </Label>
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item, index) => (
            <Table.Row key={item.id}>
              <Table.Cell
                py={"1.5rem"}
                borderBottom={
                  index === items.length - 1
                    ? "none"
                    : "1px solid var(--border-color)"
                }
              >
                <Flex alignItems={"center"} gap={"1rem"}>
                  <Box
                    aspectRatio={"1"}
                    w={"3.8rem"}
                    h={"3.8rem"}
                    borderRadius={"50%"}
                    overflow={"hidden"}
                    css={{
                      "& img": {
                        w: "100%",
                        h: "100%",
                      },
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                    />
                  </Box>

                  <Flex flexDirection={"column"} gap={".5rem"}>
                    <Label
                      color={TypoColor.primaryTextColor}
                      size={14}
                      fontWeight={500}
                    >
                      {item.name}
                    </Label>
                    <Label
                      color={TypoColor.headerTextTable}
                      size={12}
                      fontWeight={400}
                    >
                      {item.company}
                    </Label>
                  </Flex>
                </Flex>
              </Table.Cell>
              <Table.Cell
                verticalAlign={"middle"}
                borderBottom={
                  index === items.length - 1
                    ? "none"
                    : "1px solid var(--border-color)"
                }
              >
                <Label
                  color={TypoColor.primaryTextColor}
                  size={14}
                  fontWeight={500}
                >
                  {item.date}
                </Label>
                <Label
                  color={TypoColor.headerTextTable}
                  size={13}
                  as={TypoTagLabel.div}
                  mt={"0.5rem"}
                >
                  at {item.time}
                </Label>
              </Table.Cell>
              <Table.Cell
                verticalAlign={"middle"}
                borderBottom={
                  index === items.length - 1
                    ? "none"
                    : "1px solid var(--border-color)"
                }
              >
                <Label
                  color={TypoColor.headerTextTable}
                  size={14}
                  fontWeight={500}
                >
                  {item.type}
                </Label>
              </Table.Cell>
              <Table.Cell
                verticalAlign={"middle"}
                borderBottom={
                  index === items.length - 1
                    ? "none"
                    : "1px solid var(--border-color)"
                }
              >
                <Label
                  color={TypoColor.primaryTextColor}
                  size={14}
                  fontWeight={600}
                >
                  ${item.amount}
                </Label>
              </Table.Cell>

              <Table.Cell
                verticalAlign={"middle"}
                borderBottom={
                  index === items.length - 1
                    ? "none"
                    : "1px solid var(--border-color)"
                }
              >
                <Label
                  color={TypoColor.headerTextTable}
                  size={14}
                  fontWeight={500}
                >
                  {item.invoiceId}
                </Label>
              </Table.Cell>
              <Table.Cell
                verticalAlign={"middle"}
                borderBottom={
                  index === items.length - 1
                    ? "none"
                    : "1px solid var(--border-color)"
                }
              >
                <ClientOnly>
                  <Box
                    w={"2.5rem"}
                    h={"2.5rem"}
                    cursor={"pointer"}
                    css={{
                      "& svg path": {
                        fill: theme === "dark" ? "#fff" : "#29A073",
                      },
                    }}
                  >
                    <SvgInsert
                      src="/icons/ic_dots.svg"
                      width={"1.3rem"}
                      height={".3rem"}
                    />
                  </Box>
                </ClientOnly>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}

export default InvoicesTable;
