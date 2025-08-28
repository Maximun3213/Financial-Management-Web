import WithSideBar from "@/layout/WithSideBar";
import TopBar from "./TopBar";

function InvoicesPage(): React.ReactElement {
  return (
    <WithSideBar>
      <TopBar />
    </WithSideBar>
  );
}

export default InvoicesPage;
