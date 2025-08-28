import WithSideBar from "@/layout/WithSideBar";
import InvoicesTable from "./InvoicesTable";
import TopBar from "./TopBar";

function InvoicesPage(): React.ReactElement {
  return (
    <WithSideBar>
      <TopBar />
      <InvoicesTable />
    </WithSideBar>
  );
}

export default InvoicesPage;
