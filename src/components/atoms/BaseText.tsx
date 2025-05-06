import { Text, TextProps } from "@chakra-ui/react";

type BaseTextProps = {
  size?: string;
  color?: string;
  weight?: string;
  lineHeight?: string;
  children: React.ReactNode;
} & TextProps;

const BaseText = (props: BaseTextProps) => {
  const { size, color, weight, lineHeight, children, ...textProps } = props;

  return (
    <Text
      fontSize={size ?? "16px"}
      fontWeight={weight ?? "400"}
      color={color ?? "#444"}
      lineHeight={lineHeight ?? "1.5"}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export default BaseText;
