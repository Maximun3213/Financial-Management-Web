"use client";

import Heading from "@/components/Typo/Heading";
import { TypoColor } from "@/enums/typo";
import WithSideBar from "@Layout/WithSideBar";
import React from "react";
import s from "./styles.module.scss";

function HomePage(): React.ReactElement {
  return (
    <WithSideBar>
      <div className={s.wrapper}>
        <Heading size={60} color={TypoColor.primaryTextColor}>
          Hello World !
        </Heading>
      </div>
    </WithSideBar>
  );
}

export default HomePage;
