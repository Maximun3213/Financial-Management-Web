"use client";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import CInput from "@/components/CInput";
import Heading from "@/components/Typo/Heading";
import Paragraph from "@/components/Typo/Paragraph";
import { TypoColor, TypoTagHeading, TypoTagParagraph } from "@/enums/typo";
import { Box, Flex } from "@chakra-ui/react";
import { useLoginForm } from "./useLoginForm";

function LoginForm(): React.ReactElement {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useLoginForm();

  return (
    <Box w={"40.4rem"}>
      <Heading
        as={TypoTagHeading.h1}
        size={30}
        color={TypoColor.primaryTextColor}
        fontWeight={600}
      >
        Login to your account
      </Heading>
      <Paragraph
        as={TypoTagParagraph.p}
        color={TypoColor.headerTextTable}
        mt={".8rem"}
      >
        Welcome back! Please enter your details
      </Paragraph>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection={"column"} gap={"1.5rem"} mt={"2.4rem"}>
          <CInput
            register={register}
            errors={errors}
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
          />

          <CInput
            register={register}
            errors={errors}
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <PrimaryButton
            text={isSubmitting ? "Signing in..." : "Sign in"}
            onClick={() => {}}
          />
        </Flex>
      </form>
    </Box>
  );
}

export default LoginForm;
