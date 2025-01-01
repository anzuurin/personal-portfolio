import { Container, Heading, Badge } from '@chakra-ui/react'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Blog = () => (
    <Layout>
        <Container>
            <Heading as="h2" varient="page-title">
                2024: Year in Review
            </Heading>
            <Badge colorScheme='pink' fontSize='0.9em'>Jan 01 2025</Badge>
            
            <Section delay={0.1}>
                <P>
                    A lot happened this year.
                </P>
            </Section>
        </Container>
    </Layout>
);

export default Blog
export { getServerSideProps } from '../../components/chakra'