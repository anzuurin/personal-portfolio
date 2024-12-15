import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNavalChatbot from '../public/images/works/naval_chatbot_thumbnail.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="navalChatbot" title="Naval ChatBot" thumbnail={thumbNavalChatbot}>
            A custom RAG pipeline chatbot trained on Navy Humanitarian research papers using Llama 3.2.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Other Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="tbd" title="TBD" thumbnail={thumbNavalChatbot}>
            Coming soon.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="tbd" title="TBD" thumbnail={thumbNavalChatbot}>
            Coming soon.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="tbd" title="TBD" thumbnail={thumbNavalChatbot}>
            Coming soon.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
