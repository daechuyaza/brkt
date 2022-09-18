import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { mainWideButtonsInformation } from '@common/constants/hardCoded';
import { MainWideButton } from '@common/ui/MainWideButton/MainWideButton';
import { MainArticle } from '@components/article/MainArticle';
import { ArticleType } from '@modules/article/types/article';

import { NextPageWithLayout } from './_app';

type Props = {
  articles: ArticleType[];
};

const Home: NextPageWithLayout<Props> = ({ articles }) => {
  const router = useRouter();

  const leftArticle = articles[0];
  const rightArticle = articles[1];

  const handleMainArticleClick = (id: number) => {
    router.push({
      pathname: '/article/[id]',
      query: { id }
    });
  };

  const handleMainWideButtonClick = (pathname: string) => {
    router.push({
      pathname: `/${pathname}`
    });
  };

  return (
    <>
      <MainArticlesArea>
        <MainArticle article={leftArticle} onClick={handleMainArticleClick} />
        <MainArticle article={rightArticle} onClick={handleMainArticleClick} />
      </MainArticlesArea>
      <MainWideButtonsArea>
        {mainWideButtonsInformation.map((information, index) => (
          <MainWideButton
            key={index}
            title={information.title}
            description={information.description}
            onClick={() => handleMainWideButtonClick(information.pathName)}
          />
        ))}
      </MainWideButtonsArea>
    </>
  );
};

const MainArticlesArea = styled.div`
  display: flex;
`;

const MainWideButtonsArea = styled.div`
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.onSurface};
  border-top-style: solid;
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

export default Home;
