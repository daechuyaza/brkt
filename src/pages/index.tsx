import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { LogInForm } from '@components/auth/LogInForm';
import { SignUpForm } from '@components/auth/SignUpForm';
import { mainWideButtonsInformation } from '@common/constants/hardCoded';
import { Footer } from '@common/ui/Footer/Footer';
import { Header } from '@common/ui/Header/Header';
import { MainWideButton } from '@common/ui/MainWideButton/MainWideButton';
import { MainArticle } from '@components/article/MainArticle';
import { ArticleType } from '@modules/article/types/article';
import { Modal } from '@common/ui/Modal/Modal';

type Props = {
  articles: ArticleType[];
};

const Home: NextPage<Props> = ({ articles }) => {
  const router = useRouter();
  const { auth } = router.query;

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
          {mainWideButtonsInformation.map((information, index) => (
            <MainWideButton
              key={index}
              title={information.title}
              description={information.description}
            />
          ))}
        </MainWideButtonsArea>
        <FooterArea>
          <Footer />
        </FooterArea>
      </Container>

      <Modal
        active={router.asPath === '/login' || router.asPath === '/signup'}
        onClickBackdrop={() => router.push('/')}
      >
        {auth === 'login' && <LogInForm />}
        {auth === 'signup' && <SignUpForm />}
      </Modal>
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
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.onSurface};
  border-top-style: solid;
`;

const FooterArea = styled.div`
  grid-area: footer;
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
