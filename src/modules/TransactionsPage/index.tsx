import WithSideBar from "@/layout/WithSideBar";
import React from "react";
import Search from "./Seach";
import TransactionsTable from "./TransactionsTable";

const TransactionsPage = (): React.JSX.Element => {
  return (
    <WithSideBar>
      <Search />
      <TransactionsTable />
    </WithSideBar>
  );
};

export default TransactionsPage;
