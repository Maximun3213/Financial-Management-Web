import { TypoColor } from "@/enums/typo";
import { Box, Flex, Table } from "@chakra-ui/react";
import Image from "next/image";
import Label from "../Typo/Label";
function TransactionTable(): React.ReactElement {
  const items = [
    {
      id: 1,
      name: "Iphone 13 Pro MAX",
      company: "Apple. Inc",
      image: "/imgs/phone.png",
      type: "Electronics",
      amount: 420.84,
      date: "14 Apr 2022",
    },
    {
      id: 2,
      name: "Iphone 13 Pro MAX",
      company: "Apple. Inc",
      image: "/imgs/phone.png",
      type: "Electronics",
      amount: 420.84,
      date: "14 Apr 2022",
    },
    {
      id: 3,
      name: "Iphone 13 Pro MAX",
      company: "Apple. Inc",
      image: "/imgs/phone.png",
      type: "Electronics",
      amount: 420.84,
      date: "14 Apr 2022",
    },
    {
      id: 4,
      name: "Iphone 13 Pro MAX",
      company: "Apple. Inc",
      image: "/imgs/phone.png",
      type: "Electronics",
      amount: 420.84,
      date: "14 Apr 2022",
    },
    {
      id: 5,
      name: "Iphone 13 Pro MAX",
      company: "Apple. Inc",
      image: "/imgs/phone.png",
      type: "Electronics",
      amount: 420.84,
      date: "14 Apr 2022",
    },
  ];

  return (
    <Table.Root w={"100%"}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader textAlign="left">
            <Label
              color={TypoColor.headerTextTable}
              size={12}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              NAME/BUSINESS
            </Label>
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">
            <Label
              color={TypoColor.headerTextTable}
              size={12}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              TYPE
            </Label>
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">
            <Label
              color={TypoColor.headerTextTable}
              size={12}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              AMOUNT
            </Label>
          </Table.ColumnHeader>
          <Table.ColumnHeader textAlign="center">
            <Label
              color={TypoColor.headerTextTable}
              size={12}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              DATE
            </Label>
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>
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

                <Flex flexDirection={"column"}>
                  <Label>{item.name}</Label>
                  <Label>{item.company}</Label>
                </Flex>
              </Flex>
            </Table.Cell>
            <Table.Cell>{item.type}</Table.Cell>
            <Table.Cell textAlign="center">{item.amount}</Table.Cell>
            <Table.Cell textAlign="center">{item.date}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

export default TransactionTable;
