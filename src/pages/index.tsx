import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { mainWideButtonsInformation } from '@common/constants/hardCoded';
import { Marquee } from '@common/ui';
import { MainWideButton } from '@common/ui/MainWideButton/MainWideButton';
import { MainArticle } from '@components/article/MainArticle';
import { ArticleType } from '@modules/article/types/article';

import type { NextPage } from 'next';

type Props = {
  articles: ArticleType[];
};

const Home: NextPage<Props> = ({ articles }) => {
  const router = useRouter();

  const leftArticle = articles[0];
  const rightArticle = articles[1];

  const handleMainArticleClick = (id: number) => {
    router.push({
      pathname: '/articles/[id]',
      query: { id }
    });
  };

  return (
    <>
      <MarqueeArea>
        <Marquee />
      </MarqueeArea>
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
          />
        ))}
      </MainWideButtonsArea>
    </>
  );
};

const MarqueeArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 4.3rem;
`;

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
