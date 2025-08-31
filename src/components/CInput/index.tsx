import { TypoColor, TypoTagLabel } from "@/enums/typo";
import { Box, Field, Input } from "@chakra-ui/react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import Label from "../Typo/Label";

interface CInputProps<T extends Record<string, unknown>> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  name: Path<T>;
  type?: string;
  label?: string;
  placeholder?: string;
}

function CInput<T extends Record<string, unknown>>({
  register,
  errors,
  name,
  type = "text",
  label,
  placeholder,
}: CInputProps<T>): React.ReactElement {
  return (
    <Field.Root w={"100%"}>
      <Field.Label>
        <Label
          as={TypoTagLabel.span}
          size={14}
          color={TypoColor.primaryTextColor}
          fontWeight={500}
        >
          {label}
        </Label>
      </Field.Label>
      <Box mt={"1rem"}>
        <Input
          type={type}
          {...register(name)}
          _invalid={{ borderColor: "red.500" }}
          width={"100%"}
          backgroundColor={"transparent"}
          padding={"1.5rem 2.5rem 1.6rem 2rem"}
          borderRadius={"1rem"}
          fontSize={"1.4rem"}
          color={`var(--primary-text-color)`}
          fontWeight={500}
          border={"1px solid var(--border-color)"}
          _placeholder={{
            color: TypoColor.headerTextTable,
            fontSize: "1.4rem",
            fontWeight: 500,
          }}
          _focus={{
            borderColor: "var(--primary-text-color)",
          }}
          outline={"none"}
          placeholder={placeholder}
        />
        {errors[name] && (
          <Field.ErrorText>{errors[name]?.message as string}</Field.ErrorText>
        )}
      </Box>
    </Field.Root>
  );
}

export default CInput;
