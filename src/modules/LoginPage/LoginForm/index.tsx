"use client";

import Heading from "@/components/Typo/Heading";
import Paragraph from "@/components/Typo/Paragraph";
import { TypoColor, TypoTagHeading, TypoTagParagraph } from "@/enums/typo";
import { Box, Button, Field, Input, Stack } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";

type FormValues = {
  email: string;
  password: string;
};

function LoginForm(): React.ReactElement {
  const { pending, data, method } = useFormStatus();

  const action = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
  };

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
      <form action={action}>
        <Stack gap="4" align="flex-start" maxW="sm">
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input name="email" />
            {/* <Field.ErrorText>{errors.email?.message}</Field.ErrorText> */}
          </Field.Root>

          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input name="password" />
            {/* <Field.ErrorText>{errors.password?.message}</Field.ErrorText> */}
          </Field.Root>

          <Button type="submit" disabled={pending}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default LoginForm;
