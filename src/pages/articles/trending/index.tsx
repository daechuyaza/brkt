import { ReactElement } from 'react';

import { ArticlesLayout } from '@components/articles/ArticlesLayout';
import { NextPageWithLayout } from '@pages/_app';
import { Article } from '@pages/api/data/model';

type Props = {
  articles: Article[];
};

const Trending: NextPageWithLayout<Props> = () => {
  return <div>TRENDING-BODY</div>;
};

Trending.getLayout = function getLayout(page: ReactElement) {
  return <ArticlesLayout>{page}</ArticlesLayout>;
};

export default Trending;
