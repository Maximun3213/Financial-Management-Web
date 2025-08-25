"use client";

import Heading from "@/components/Typo/Heading";
import { TypoColor } from "@/enums/typo";
import Header from "@/layout/Header";
import { Container } from "@Components/Container";
import WithSideBar from "@Layout/WithSideBar";
import React from "react";
import s from "./styles.module.scss";

function HomePage(): React.ReactElement {
  return (
    <WithSideBar>
      <Header />
      <Container></Container>
      <div className={s.wrapper}>
        <Heading size={60} color={TypoColor.black}>
          Hello
        </Heading>
      </div>
    </WithSideBar>
  );
}

export default HomePage;
