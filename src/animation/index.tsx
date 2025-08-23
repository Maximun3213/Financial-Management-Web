import { AssetsProvider } from "@Animation/contexts/AssetsProvider";
import { PageCycleProvider } from "@Animation/contexts/PageCycleProvider";
import React from "react";

export default function Animation({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <PageCycleProvider>
      <AssetsProvider>{children}</AssetsProvider>
    </PageCycleProvider>
  );
}
