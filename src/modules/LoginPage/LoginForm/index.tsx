"use client";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import CInput from "@/components/CInput";
import Heading from "@/components/Typo/Heading";
import Label from "@/components/Typo/Label";
import Paragraph from "@/components/Typo/Paragraph";
import {
  TypoColor,
  TypoTagHeading,
  TypoTagLabel,
  TypoTagParagraph,
} from "@/enums/typo";
import { Box, Flex, Input } from "@chakra-ui/react";
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
        <Flex flexDirection={"column"} mt={"2.4rem"}>
          <Flex gap={"1.5rem"} flexDirection={"column"}>
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
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"1rem"}
            mt={"2rem"}
            mb={"2.5rem"}
          >
            <Flex gap={".9rem"}>
              <Input
                type="checkbox"
                css={{
                  width: "1.6rem",
                  height: "1.6rem",
                  backgroundColor: "transparent",
                  border: "1px solid var(--header-text-table)",
                  borderRadius: "0.4rem",
                  appearance: "none",
                  cursor: "pointer",
                  "&:checked": {
                    backgroundColor: "var(--primary-color)",
                  },
                }}
              />
              <Label
                size={14}
                fontWeight={500}
                as={TypoTagLabel.span}
                color={TypoColor.primaryTextColor}
              >
                Remember for 30 Days
              </Label>
            </Flex>

            <Label
              color={TypoColor.primaryTextColor}
              size={14}
              fontWeight={500}
            >
              Forgot password?
            </Label>
          </Flex>
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
