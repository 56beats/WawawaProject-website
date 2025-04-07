import { AppProps } from "next/app";
import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider {...({} as ChakraProviderProps)}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
