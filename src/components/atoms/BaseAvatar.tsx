import BaseText from "@/components/atoms/BaseText";
import { Avatar, VStack } from "@chakra-ui/react";

const BaseAvatar = () => {
  return (
    <VStack w="240px">
      <Avatar
        size="2xl"
        name="Segun Adebayo"
        src="https://bit.ly/sage-adebayo"
      />{" "}
      <BaseText size="18px" fontFamily="body">
        西川
      </BaseText>
    </VStack>
  );
};

export default BaseAvatar;
