import { ReactElement } from 'react';

import { ArticlesLayout } from '@components/articles/ArticlesLayout';
import { NextPageWithLayout } from '@pages/_app';
import { Article } from '@pages/api/data/model';

type Props = {
  articles: Article[];
};

const Series: NextPageWithLayout<Props> = () => {
  return <div>SERIES-BODY</div>;
};

Series.getLayout = function getLayout(page: ReactElement) {
  return <ArticlesLayout>{page}</ArticlesLayout>;
};

export default Series;
