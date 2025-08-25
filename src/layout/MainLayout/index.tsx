import { Provider } from "@/components/ui/provider";
import GridDebug from "@Components/GridDebug";
import React, { PropsWithChildren } from "react";

export default function MainLayout({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <Provider>
      {children}
      <GridDebug />
    </Provider>
  );
}
