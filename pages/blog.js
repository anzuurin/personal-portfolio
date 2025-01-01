import NextLink from 'next/link'
import { Link, Container, Heading, Stack } from '@chakra-ui/react'
import Layout from '../components/layouts/article.js'
import Section from '../components/section'

const Blogs = () => (
    <Layout>
        <Container>
            <Heading as="h2" varient="page-title">
                Blog
            </Heading>
            <p> Melody&apos;s musings.</p>
            
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Recent Posts
                </Heading>
                <Stack>
                    <Link 
                    as={NextLink} 
                    href="/blogs/2024-year-in-review" 
                    variant="plain">
                        2024: Year in Review</Link>
                </Stack>
            </Section>
        </Container>
    </Layout>
);

export default Blogs
export { getServerSideProps } from '../components/chakra'