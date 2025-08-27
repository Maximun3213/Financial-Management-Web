import WithSideBar from "@/layout/WithSideBar";
import React from "react";
import Search from "./Seach";

const TransactionsPage = (): React.JSX.Element => {
  return (
    <WithSideBar>
      <Search />
    </WithSideBar>
  );
};

export default TransactionsPage;
