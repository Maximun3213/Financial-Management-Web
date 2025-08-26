import { Grid } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import s from "./MoneyCards.module.scss";

function MoneyCards(): React.ReactElement {
  return (
    <Grid
      gridTemplateColumns={"repeat(3, 1fr)"}
      gap={"2.5rem"}
      className={s.cards}
    >
      <Card
        isActive
        balance={5240.21}
        icon={"/icons/ic_wallet.svg"}
        title={"Total balance"}
      />
      <Card
        balance={250.8}
        icon={"/icons/ic_wallet.svg"}
        title={"Total spending"}
      />
      <Card
        balance={550.25}
        icon={"/icons/ic_wallet_add.svg"}
        title={"Total saved"}
      />
    </Grid>
  );
}

export default MoneyCards;
