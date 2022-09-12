import { ReactElement } from 'react';

import { ArticlesLayout } from '@common/ui/ArticlesLayout/ArticlesLayout';
import { NextPageWithLayout } from '@pages/_app';
import { Article } from '@pages/api/data/model';

type Props = {
  articles: Article[];
};

const Articles: NextPageWithLayout<Props> = () => {
  return <div>hihihhi</div>;
};

Articles.getLayout = function getLayout(page: ReactElement) {
  return <ArticlesLayout>{page}</ArticlesLayout>;
};

export default Articles;
