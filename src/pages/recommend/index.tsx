import { RecommendArticle } from '@components/recommend/RecommendArticle';
import styled from '@emotion/styled';

import { ArticleType } from '@modules/article/types/article';

type Props = {
  articles: ArticleType[];
};

export default function Recommend({ articles }: Props) {
  console.log(articles);

  return (
    <Container>
      <Heading>Recommended</Heading>
      <Caption>
        BRKT가 당신에게만 맞춘 글들을 읽어보세요. <br />
        당신의 관심사에 따라 하루에 5개만 선별해서 준비했습니다. 추천글은 매일 바뀝니다.
      </Caption>
      {articles.map((article) => (
        <RecommendArticle
          author={article.author}
          authorThumbnailSrc={article.authorThumbnail}
          createdAt={article.updatedAt}
          description={article.description}
          thumbnailSrc={article.thumbnail}
          title={article.title}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding-left: ${(props) => props.theme.spacing[12]};
  padding-right: ${(props) => props.theme.spacing[12]};
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.headline1};
  padding-top: ${(props) => props.theme.spacing[6]};
`;

const Caption = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  display: block;
  font-size: ${(props) => props.theme.fontSize.caption1};
  margin-bottom: ${(props) => props.theme.spacing[9]};
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
