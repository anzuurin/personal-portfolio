import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full stack software engineer based in the US!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Melody L.
          </Heading>
          <p>Software Engineer ( Developer / Artist / Gamer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/melody.png"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Melody is a full-stack developer based in the DMV area.
          She graduated from the College of William & Mary with a B.S in Computer Science
          and a minor in Innovation & Entrepreneurship. She's passionate about web development,
          systems design, and is committed to honing her skills as a programmer with 
          a focus on various programming languages and tech stacks. When she's not coding at her 
          desk, you can find her walking outside and snapping pictures of the local plant 
          and wildlife or practicing any of the 5 instruments she can play (Piano, Cello, Ukulele, 
          Irish Tin Whistle, & Castanets).
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="pink"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Spawned.
        </BioSection>
        <BioSection>
          <BioYear>2008</BioYear>
          Began drawing and making art.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Completed the B.S. in Computer Science and started working as a SWE.
        </BioSection>
        <BioSection>
          <BioYear>2024 to present</BioYear>
          Keep doing what I'm doing!
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          SWE, Art, Music, Badminton, Machine Learning, playing cozy games
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/anzuurin" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<IoLogoGithub />}
              >
                @Anzuurin
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <p>
          Feel free to reach out to me!
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:melodyllinas@gmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="pink"
          >
            Email
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
