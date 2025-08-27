import HeadingSection from "@/components/HeadingSection";
import WithSideBar from "@/layout/WithSideBar";
import React from "react";

const TransactionsPage = (): React.JSX.Element => {
  return (
    <WithSideBar>
      <div>
        <HeadingSection title="Transactions" />
      </div>
    </WithSideBar>
  );
};

export default TransactionsPage;
