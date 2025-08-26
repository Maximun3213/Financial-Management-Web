import { TypoColor } from "@/enums/typo";
import Label from "../Typo/Label";

type Props = {
  title: string;
};

function HeadingSection({ title }: Props): React.ReactElement {
  return (
    <Label size={18} color={TypoColor.primaryTextColor} fontWeight={600}>
      {title}
    </Label>
  );
}

export default HeadingSection;
