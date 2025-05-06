import BaseText from "@/components/atoms/BaseText";
import { VStack, Card, Image, CardBody } from "@chakra-ui/react";

const BaseCard = () => {
  return (
    <Card direction="row" overflow="hidden" variant="outline" w="320px">
      <Image
        objectFit="cover"
        maxW="180px"
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />
      <VStack>
        <CardBody>
          <BaseText size="18px" fontFamily="heading">
            Games
          </BaseText>
          <BaseText py="2" size="14px" fontFamily="body">
            ゲームを紹介します。
          </BaseText>
        </CardBody>
      </VStack>
    </Card>
  );
};

export default BaseCard;
