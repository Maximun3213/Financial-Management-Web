import { TypoColor } from "@/enums/typo";
import { Table } from "@chakra-ui/react";
import Label from "../Typo/Label";

function TransactionTable(): React.ReactElement {
  const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    {
      id: 2,
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 49.99,
    },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
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
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell textAlign="center">{item.price}</Table.Cell>
            <Table.Cell textAlign="center">{item.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

export default TransactionTable;
