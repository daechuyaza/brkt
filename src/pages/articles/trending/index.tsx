import styled from '@emotion/styled';
import { ReactElement } from 'react';

import { ArticleList } from '@components/article/ArticleList';
import { ArticlesLayout } from '@components/articles/ArticlesLayout';
import { NextPageWithLayout } from '@pages/_app';
import { Article } from '@pages/api/data/model';

type Props = {
  articles: Article[];
};

const Trending: NextPageWithLayout<Props> = () => {
  return (
    <Container>
      <ArticleList />
    </Container>
  );
};

const Container = styled.div`
  display: 'flex';
  flex: 1 1 0;
`;

Trending.getLayout = function getLayout(page: ReactElement) {
  return <ArticlesLayout>{page}</ArticlesLayout>;
};

export default Trending;
