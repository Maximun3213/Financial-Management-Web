"use client";

import TransactionTable from "@/components/TransactionTable";
import { Box } from "@chakra-ui/react";

function TransactionsTable(): React.ReactElement {
  return (
    <Box mt={"2.5rem"}>
      <TransactionTable isTransactionsPage />
    </Box>
  );
}

export default TransactionsTable;
