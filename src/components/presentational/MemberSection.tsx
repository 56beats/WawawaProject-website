import BaseText from "@/components/atoms/BaseText";
import { VStack } from "@chakra-ui/react";
import BaseDivider from "@/components/atoms/BaseDivider";

const MemberSection = () => {
  return (
    <VStack gap="24px" w="100%">
      <BaseText size="32px" fontFamily="heading">
        WAWAWA PROJECT
      </BaseText>
      <BaseText size="24px" fontFamily="body">
        メインページです。ようこそ。
      </BaseText>
      <BaseDivider />
    </VStack>
  );
};

export default MemberSection;
