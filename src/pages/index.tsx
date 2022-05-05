import type { NextPage } from 'next';

import { Header } from '@common/ui/Header/Header';
import { Main } from '@components/main/Main';
import { ArticleType } from '@modules/article/types/article';

type Props = ArticleType[];

const Home: NextPage<Props> = (articles) => (
  <>
    <Header />
    <Main articles={articles} />
  </>
);

export default Home;

export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.js`.
  const res = await fetch('https://backend/articles');
  const articles = (await res.json()) as ArticleType[];

  return {
    props: {
      articles
    }
  };
}
