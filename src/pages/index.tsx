import styled from '@emotion/styled';
import type { NextPage } from 'next';

import { Header } from '@common/ui/Header/Header';
import { MainWideButton } from '@common/ui/MainWideButton/MainWideButton';
import { MainArticle } from '@components/article/MainArticle';
import { ArticleType } from '@modules/article/types/article';

type Props = {
  articles: ArticleType[];
};

const Home: NextPage<Props> = ({ articles }) => {
  const leftArticle = articles[0];
  const rightArticle = articles[1];

  return (
    <>
      <Container>
        <HeaderArea>
          <Header />
        </HeaderArea>
        <MainArticlesArea>
          <MainArticle article={leftArticle} />
          <MainArticle article={rightArticle} />
        </MainArticlesArea>
        <MainWideButtonsArea>
          <MainWideButton />
          <MainWideButton />
          <MainWideButton />
          <MainWideButton />
        </MainWideButtonsArea>
        <Footer>Fotter</Footer>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(11.4rem, auto);
  grid-template-areas:
    'header'
    'mainArticles'
    'mainWideButtons'
    'footer';
  width: 100vw;
`;

const HeaderArea = styled.div`
  grid-area: header;
`;

const MainArticlesArea = styled.div`
  grid-area: mainArticles;
  display: flex;
`;

const MainWideButtonsArea = styled.div`
  grid-area: mainWideButtons;
  background-color: skyblue;
`;

const Footer = styled.div`
  grid-area: footer;
  background-color: purple;
`;

export async function getStaticProps() {
  const res = await fetch('https://backend/articles');
  const articles = (await res.json()) as ArticleType[];

  return {
    props: {
      articles
    }
  };
}
