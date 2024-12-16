import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Monkey Classification">
      <Container>
        <Title>
          Monkey Classification CNN <Badge>2023</Badge>
        </Title>
        <P>
          This project was for the COLL 400 Machine Learning class, created by myself and a classmate, Melody Vu. 
          We used a kaggle dataset of 10 monkey species and built a 4 layer CNN with ReLU activation, max pooling, and dropout.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/anzuurin/monkeyClassification">
              GitHub Repository <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <Meta>Presentation</Meta>
            <Link href="https://docs.google.com/presentation/d/1bPvZtMRgXaNZ3i1LSsHUT-8xgd6uPlC_pY1H9newLa0/edit?usp=sharing">
              Slideshow <ExternalLinkIcon mx="2px" />
            </Link>
          <ListItem>
            <Meta>Dataset</Meta>
              <Link href="https://www.kaggle.com/datasets/slothkong/10-monkey-species/">
                Kaggle <ExternalLinkIcon mx="2px" />
              </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/monkey_classification_01.png" alt="monkeyClass" />

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  