import { Box, Container, Stack, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
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
    <Box bg="#0F172A" color="#E5E7EB" minH="100vh">
      {/* Header */}
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex={999}
        bg="#0F172A"
        borderBottom="1px solid rgba(255,255,255,0.04)"
        transform={isHeaderVisible ? "translateY(0)" : "translateY(-100%)"}
        transition="transform 0.3s ease-in-out"
      >
        <Container maxW="container.md" py={4}>
          <Grid templateColumns="repeat(4, 1fr)" textAlign="center">
            <GridItem colSpan={2} textAlign={"left"}>
              <Text fontSize="md">Games</Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize="md">Music</Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize="md">Visual</Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Container maxW="container.md" py={{ base: 16, md: 24 }} pt={{ base: "88px", md: "96px" }}>
        <Stack spacing={24}>
          {/* Hero */}
          <Grid templateColumns="repeat(2, 1fr)" textAlign="left">
            <GridItem mb={4}>
              <Heading
                fontFamily="'Press Start 2P', cursive"
                fontSize={{ base: "24px", md: "36px" }}
              >
                WAWAWA PROJECT OFFICIAL
              </Heading>
            </GridItem>
            <GridItem mb={4}>
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
          <Stack spacing={8}>
            <Heading fontSize="xl">Contents</Heading>

            <Stack spacing={6}>
              {/* Project A */}
              <Box
                border="1px solid"
                borderColor="whiteAlpha.300"
                borderRadius="md"
                p={6}
                _hover={{ transform: "translateY(-2px)", transition: "0.2s" }}
              >
                <Heading fontSize="lg" mb={2}>
                  Original Game Project
                </Heading>
                <Text fontSize="sm">
                  レトロゲーム風の個人制作ゲームプロジェクト。
                </Text>
                <Text fontSize="xs" mt={3} opacity={0.7}>
                  Game / Indie
                </Text>
              </Box>

              {/* Project B */}
              <Box
                border="1px solid"
                borderColor="whiteAlpha.300"
                borderRadius="md"
                p={6}
                _hover={{ transform: "translateY(-2px)", transition: "0.2s" }}
              >
                <Heading fontSize="lg" mb={2}>
                  Music Works Collection
                </Heading>
                <Text fontSize="sm">
                  個人で制作した楽曲やBGMをまとめたプロジェクト。
                </Text>
                <Text fontSize="xs" mt={3} opacity={0.7}>
                  Music
                </Text>
              </Box>

              {/* Project C */}
              <Box
                border="1px solid"
                borderColor="whiteAlpha.300"
                borderRadius="md"
                p={6}
                _hover={{ transform: "translateY(-2px)", transition: "0.2s" }}
              >
                <Heading fontSize="lg" mb={2}>
                  Visual / Movie Project
                </Heading>
                <Text fontSize="sm">
                  映像やビジュアル作品の紹介用ページ。
                </Text>
                <Text fontSize="xs" mt={3} opacity={0.7}>
                  Visual
                </Text>
              </Box>
            </Stack>
            {/* Features */}
            <Stack spacing={8}>
              <Heading fontSize="xl">Features</Heading>

              <Stack spacing={4}>
                <Text>
                  本サイトは、作品や活動内容を整理し、
                  全体像が把握しやすい構成となっています。
                </Text>

                <Stack spacing={3}>
                  <Text fontSize="sm">・1ページで全体像が把握できる構成</Text>
                  <Text fontSize="sm">・PC / スマートフォン対応</Text>
                  <Text fontSize="sm">・更新や修正を想定したシンプルな設計</Text>
                  <Text fontSize="sm">・軽量で表示が速い</Text>
                </Stack>
              </Stack>
            </Stack>
            {/* Contact */}
            <Box
              bg="whiteAlpha.100"
              borderRadius="md"
              p={{ base: 6, md: 10 }}
            >
              <Stack spacing={4} textAlign="center">
                <Heading fontSize="xl">Contact</Heading>

                <Text fontSize="sm">
                  このサイトや掲載内容に関するご連絡は、
                  クラウドワークスのメッセージよりお願いいたします。
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}