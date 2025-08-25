import Footer from "@Layout/Footer";
import React from "react";

export default function WithFooter({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
