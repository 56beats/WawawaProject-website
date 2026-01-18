import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="#0F172A" color="#E5E7EB" minH="100vh">
      <Container maxW="container.md" py={{ base: 16, md: 24 }}>
        <Stack spacing={24}>

          {/* Hero */}
          <Stack spacing={4} textAlign="center">
            <Heading
              fontFamily="'Press Start 2P', cursive"
              fontSize={{ base: "24px", md: "36px" }}
            >
              WAWAWA PROJECT OFFICIAL
            </Heading>

            <Text fontSize="md">
              個人制作・同人活動を中心に
              ゲームや音楽作品を制作しているサークルです
            </Text>

            <Text fontSize="sm" opacity={0.7}>
              Games / Music / Visual
            </Text>
          </Stack>

          {/* Concept */}
          <Stack spacing={4}>
            <Heading fontSize="xl">Concept</Heading>

            <Text>
              wawawa-project は、個人制作を中心に活動している
              同人サークルです。
            </Text>

            <Text>
              ゲームや音楽など、ジャンルにとらわれず
              実験的な作品制作を行っています。
            </Text>
          </Stack>
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