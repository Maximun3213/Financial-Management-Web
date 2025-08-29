import Label from "@Components/Typo/Label";
import cn from "classnames";
import React from "react";

import { TypoColor, TypoTagLabel } from "@/enums/typo";

import { Button } from "@chakra-ui/react";
import s from "./styles.module.scss";

type TPrimaryButton = {
  color?: "dark" | "yellow";
  size?: "small" | "medium" | "large";
  variant?: "solid" | "outline";
  text?: string;
  className?: string;
  onClick?: () => void;
};

export default function PrimaryButton({
  ...props
}: TPrimaryButton): React.JSX.Element {
  const {
    text = "",
    className,
    variant = "solid",
    color = "dark",
    size = "large",
    onClick,
  } = props;

  const primaryButtonClassNames = cn(
    s.primaryButton,
    size && s[`primaryButton_${size}`],
    s[`primaryButton_${variant}`],
    s[`primaryButton_${variant}_${color}`],
    className
  );

  return (
    <Button
      backgroundColor={"var(--primary-color)"}
      className={primaryButtonClassNames}
      onClick={onClick}
      borderRadius={"1rem"}
      padding={"1.4rem 2rem"}
    >
      <Label
        color={TypoColor.black}
        size={16}
        as={TypoTagLabel.label}
        fontWeight={600}
        className={s.primaryButton_text}
      >
        {text}
      </Label>
    </Button>
  );
}
