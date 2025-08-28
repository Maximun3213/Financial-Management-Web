import SvgInsert from "@/components/SvgInsert";
import Label from "@/components/Typo/Label";
import { TypoColor, TypoTagLabel } from "@/enums/typo";
import { Box, Flex, Table } from "@chakra-ui/react";
import Image from "next/image";

function InvoicesTable(): React.ReactElement {
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
                  w={"4rem"}
                  h={"4rem"}
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
              <Box w={"2.5rem"} h={"2.5rem"} cursor={"pointer"}>
                <SvgInsert
                  src="/icons/ic_dots.svg"
                  width={"1.3rem"}
                  height={".3rem"}
                />
              </Box>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

export default InvoicesTable;
