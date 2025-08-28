import { TypoColor, TypoTagLabel } from "@/enums/typo";
import { Box, Button, Flex, Table } from "@chakra-ui/react";
import Image from "next/image";
import Label from "../Typo/Label";

type Props = {
  isTransactionsPage?: boolean;
};

function TransactionTable({ isTransactionsPage }: Props): React.ReactElement {
  const textAlign = isTransactionsPage ? "left" : "center";

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
          <Table.ColumnHeader textAlign="left" pb={"2rem"}>
            <Label
              color={TypoColor.headerTextTable}
              size={12}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              NAME/BUSINESS
            </Label>
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign={textAlign} pb={"2rem"}>
            <Label
              color={TypoColor.headerTextTable}
              size={12}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              TYPE
            </Label>
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign={textAlign} pb={"2rem"}>
            <Label
              color={TypoColor.headerTextTable}
              size={12}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              AMOUNT
            </Label>
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign={textAlign} pb={"2rem"}>
            <Label
              color={TypoColor.headerTextTable}
              size={12}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              DATE
            </Label>
          </Table.ColumnHeader>

          {isTransactionsPage && (
            <>
              <Table.ColumnHeader textAlign={textAlign} pb={"2rem"}>
                <Label
                  color={TypoColor.headerTextTable}
                  size={12}
                  fontWeight={600}
                  textTransform={"uppercase"}
                >
                  INVOICE ID
                </Label>
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign={textAlign} pb={"2rem"}>
                <Label
                  color={TypoColor.headerTextTable}
                  size={12}
                  fontWeight={600}
                  textTransform={"uppercase"}
                >
                  ACTIONS
                </Label>
              </Table.ColumnHeader>
            </>
          )}
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
              textAlign={textAlign}
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
              textAlign={textAlign}
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
              textAlign={textAlign}
              verticalAlign={"middle"}
              borderBottom={
                index === items.length - 1
                  ? "none"
                  : "1px solid var(--border-color)"
              }
            >
              <Label
                color={
                  !isTransactionsPage
                    ? TypoColor.headerTextTable
                    : TypoColor.primaryTextColor
                }
                size={14}
                fontWeight={500}
              >
                {item.date}
              </Label>
              {isTransactionsPage && (
                <Label
                  color={TypoColor.headerTextTable}
                  size={13}
                  as={TypoTagLabel.div}
                  mt={"0.5rem"}
                >
                  at {item.time}
                </Label>
              )}
            </Table.Cell>
            {isTransactionsPage && (
              <>
                <Table.Cell
                  textAlign={textAlign}
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
                  textAlign={textAlign}
                  verticalAlign={"middle"}
                  borderBottom={
                    index === items.length - 1
                      ? "none"
                      : "1px solid var(--border-color)"
                  }
                >
                  <Button
                    fontSize={"1.4rem"}
                    borderRadius={"0.4rem"}
                    fontWeight={600}
                    color={TypoColor.dark}
                    bg={"var(--primary-color)"}
                    h={"4rem"}
                    cursor={"pointer"}
                    w={"7.4rem"}
                    _hover={{
                      bg: "var(--primary-color)",
                    }}
                  >
                    VIEW
                  </Button>
                </Table.Cell>
              </>
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

export default TransactionTable;
