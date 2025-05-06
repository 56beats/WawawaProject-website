import { VStack, Grid, GridItem } from "@chakra-ui/react";
import BaseDivider from "@/components/atoms/BaseDivider";
import BaseCard from "@/components/atoms/BaseCard";

const CategorySection = () => {
  return (
    <VStack gap="24px" w="100%">
      <Grid templateColumns="repeat(2, 1fr)" gap="32px">
        <GridItem>
          <BaseCard />
        </GridItem>
        <GridItem>
          <BaseCard />
        </GridItem>
        <GridItem>
          <BaseCard />
        </GridItem>
        <GridItem>
          <BaseCard />
        </GridItem>
      </Grid>
      <BaseDivider />
    </VStack>
  );
};

export default CategorySection;
