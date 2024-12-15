import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Naval Chatbot">
    <Container>
      <Title>
        Naval Chatbot <Badge>2024</Badge>
      </Title>
      <P>
        This project was for an LLM Hackathon. We built a custom RAG pipeline to answer questions based on content within Naval research papers.
        There are 3 modes: Chatbot, Low Code, and Quiz Mode.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/anzuurin/Naval-Chatbot">
            GitHub Repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Streamlit, Langchain, HuggingFace, Zilliz, Shadcn UI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/naval_chatbot_01.png" alt="NavalChatbot" />
      <WorkImage src="/images/works/naval_chatbot_02.png" alt="NavalChatbot" />
      <WorkImage src="/images/works/naval_chatbot_thumbnail.png" alt="NavalChatbot" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
