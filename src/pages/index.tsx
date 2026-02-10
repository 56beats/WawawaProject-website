import { Box, Container, Stack, Heading, Text, Grid, GridItem, Button, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // スクロール方向を判定：下スクロール時は非表示、上スクロール時は表示
      if (currentScrollY > lastScrollY) {
        // 下にスクロール
        setIsHeaderVisible(false);
      } else {
        // 上にスクロール
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Box bg="brand.primary" color="#E5E7EB" minH="100%">
      {/* Header */}
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="999"
        bg="brand.primary"
        borderBottom="1px solid rgba(255,255,255,0.04)"
        transform={isHeaderVisible ? "translateY(0)" : "translateY(-100%)"}
        transition="transform 0.3s ease-in-out"
      >
        <Container maxW="100%" py="4" ml="0" mr="0" width="100%" px={0}>
          <Box width={{ base: "100%", md: "80%" }} ml="auto" mr="0">
            <Grid templateColumns="repeat(5, 1fr)" textAlign="left">
              <GridItem colSpan={2}>
                <Text fontSize="md">Games</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text fontSize="md">Music</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text fontSize="md">Visual</Text>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      </Box>

        <Container maxW="100%" pt={{ base: "88px", md: "96px" }} ml="0" mr="0" width="100%" px={0}>
        <Box width={{ base: "100%", md: "80%" }} ml="auto" mr="0">
          <Stack spacing="24">
            {/* Hero */}
            <Grid templateColumns="repeat(5, 1fr)" textAlign="left" minHeight="60vh" alignItems="center">
              <GridItem colSpan={2} mb="4">
                <Heading
                  fontFamily="'Press Start 2P', cursive"
                  fontSize={{ base: "24px", md: "36px" }}
                >
                  WAWAWA PROJECT OFFICIAL
                </Heading>  
              </GridItem>
              <GridItem colSpan={3}>
                <Text>
                  wawawa-project は、個人制作を中心に活動している
                  同人サークルです。
                </Text>

                <Text>
                  ゲームや音楽など、ジャンルにとらわれず
                  実験的な作品制作を行っています。
                </Text>
              </GridItem>
            </Grid>

            {/* Works */}
            <Stack spacing="8">
              <Heading fontSize="xl">Contents</Heading>
              
              <Stack gap="0">
                
                {/* Project A */}
                <Box
                  minHeight="70vh"
                  border="1px solid"
                  borderColor="brand.accent"
                  backgroundColor="brand.accent"
                  p="6"
                  _hover={{ transform: "translateY(-2px)", transition: "0.2s" }}
                >
                  <Grid templateColumns="repeat(5, 1fr)">
                    <GridItem colSpan={2} padding="180px 60px 180px 60px">
                      <Stack spacing="12" >
                        <Heading fontSize="2xl" mb="2" alignContent="center">
                          Game Projects
                        </Heading>
                        <Text fontSize="md">
                          個人制作ゲームプロジェクト。
                        </Text>
                        <Button
                          variant="outline"
                          colorScheme="white"
                          size="lg"
                          border="10px double"
                          borderColor="white"
                        >
                          View Details
                        </Button>
                      </Stack>
                    </GridItem>
                    <GridItem colSpan={3} display="flex" alignItems="center" justifyContent="center" >
                      <Image
                        src="https://picsum.photos/1200/800?random=1"
                        alt="Game Project Sample"
                        borderRadius="md"
                        maxW="100%"
                        h="auto"
                      />
                    </GridItem>
                  </Grid>
                </Box>

                {/* Project B */}
                <Box
                  minHeight="70vh"
                  border="1px solid"
                  borderColor="brand.accent"
                  p="6"
                  _hover={{ transform: "translateY(-2px)", transition: "0.2s" }}
                >
                  <Grid templateColumns="repeat(5, 1fr)">
                    <GridItem colSpan={2} padding="180px 60px 180px 60px">
                      <Stack spacing="12" >
                        <Heading fontSize="2xl" mb="2" alignContent="center">
                          Music Works Collection
                        </Heading>
                        <Text fontSize="md">
                          個人で制作した楽曲やBGMをまとめたプロジェクト。
                        </Text>
                        <Button
                          variant="outline"
                          colorScheme="white"
                          size="lg"
                          border="10px double"
                          borderColor="white"
                        >
                          View Details
                        </Button>
                      </Stack>
                    </GridItem>
                    <GridItem colSpan={3} display="flex" alignItems="center" justifyContent="center" >
                      <Image
                        src="https://picsum.photos/1200/800?random=2"
                        alt="Game Project Sample"
                        borderRadius="md"
                        maxW="100%"
                        h="auto"
                      />
                    </GridItem>
                  </Grid>
                </Box>

                {/* Project C */}
                <Box
                  minHeight="70vh"
                  border="1px solid"
                  borderColor="brand.accent"
                  backgroundColor="brand.accent"
                  p="6"
                  _hover={{ transform: "translateY(-2px)", transition: "0.2s" }}
                >
                  <Grid templateColumns="repeat(5, 1fr)">
                    <GridItem colSpan={2} padding="180px 60px 180px 60px">
                      <Stack spacing="12" >
                        <Heading fontSize="2xl" mb="2" alignContent="center">
                          Visual / Movie Project
                        </Heading>
                        <Text fontSize="md">
                          映像やビジュアル作品の紹介用ページ。
                        </Text>
                        <Button
                          variant="outline"
                          colorScheme="white"
                          size="lg"
                          border="10px double"
                          borderColor="white"
                        >
                          View Details
                        </Button>
                      </Stack>
                    </GridItem>
                    <GridItem colSpan={3} display="flex" alignItems="center" justifyContent="center" >
                      <Image
                        src="https://picsum.photos/1200/800?random=3"
                        alt="Game Project Sample"
                        borderRadius="md"
                        maxW="100%"
                        h="auto"
                      />
                    </GridItem>
                  </Grid>
                </Box>
              </Stack>
              
              {/* Features */}
              <Stack spacing="8">
                <Heading fontSize="xl">Information</Heading>

                <Stack spacing="4">
                  <Text>
                    本サイトは、作品や活動内容を整理し、
                    全体像が把握しやすい構成となっています。
                  </Text>

                  <Stack spacing="3">
                    <Text fontSize="sm">・1ページで全体像が把握できる構成</Text>
                    <Text fontSize="sm">・PC / スマートフォン対応</Text>
                    <Text fontSize="sm">・更新や修正を想定したシンプルな設計</Text>
                    <Text fontSize="sm">・軽量で表示が速い</Text>
                  </Stack>
                </Stack>
              </Stack>
              {/* Contact */}
              <Box
                minHeight="70vh"
                bg="whiteAlpha.100"
                borderRadius="md"
                p={{ base: 6, md: 10 }}
              >
                <Stack spacing="4" textAlign="center">
                  <Heading fontSize="xl">Contact</Heading>

                  <Text fontSize="sm">
                    このサイトや掲載内容に関するご連絡は、
                    クラウドワークスのメッセージよりお願いいたします。
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}