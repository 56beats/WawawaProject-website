import BaseText from "@/components/atoms/BaseText";
import { VStack, Grid, GridItem } from "@chakra-ui/react";
import BaseDivider from "@/components/atoms/BaseDivider";
import BaseAvatar from "@/components/atoms/BaseAvatar";

const MemberSection = () => {
  return (
    <VStack gap="24px" w="100%">
      <BaseText size="32px" fontFamily="body">
        MEMBERS
      </BaseText>
      <Grid templateColumns="repeat(3, 1fr)" gap="32px">
        <GridItem>
          <BaseAvatar />
        </GridItem>
        <GridItem>
          <BaseAvatar />
        </GridItem>
        <GridItem>
          <BaseAvatar />
        </GridItem>
        <GridItem>
          <BaseAvatar />
        </GridItem>
        <GridItem>
          <BaseAvatar />
        </GridItem>
      </Grid>
      <BaseDivider />
    </VStack>
  );
};

export default MemberSection;
