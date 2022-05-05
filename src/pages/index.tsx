import type { NextPage } from 'next';

import { Main } from '@components/main/Main';
import Header from 'common/ui/Header/Header';

const Home: NextPage = ({ book }: any) => {
  console.log('book', book);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.js`.
  const res = await fetch('https://my.backend/book');
  const book = (await res.json()) as unknown;

  return {
    props: {
      book
    }
  };
}
