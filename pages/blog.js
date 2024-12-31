import NextLink from 'next/link'
import { Container, Heading, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Blog = () => (
    <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Blog
            </Heading>
            <Box>
                <NextLink href="/blog/hello-world" passHref>
                    <Heading as="h4" fontSize={16} mb={2} cursor="pointer">
                        Hello World
                    </Heading>
                </NextLink>
                <Box>
                    <p>My first blog post!</p>
                </Box>
            </Box>
        </Container>
    </Layout>
);