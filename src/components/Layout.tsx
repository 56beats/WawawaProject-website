import { Flex, VStack } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const RootLayout = (props: Props): ReactElement => {
  return (
    <Flex justify="center" margin="120px 120px 0px 120px">
      <VStack w="100%">{props.children}</VStack>
    </Flex>
  );
};

export default RootLayout;
