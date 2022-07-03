import styled from '@emotion/styled';
import { GetStaticPaths } from 'next';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

import { ArticleType } from '@modules/article/types/article';

type Props = {
  article: ArticleType;
};

function ArticleDetail({ article }: Props) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!article) {
      return;
    }

    if (contentRef && contentRef.current) {
      const dom = new DOMParser();
      const doc = dom.parseFromString(article.content, 'text/html');

      contentRef.current.innerHTML = doc.documentElement.innerHTML;
    }
  }, [article]);

  return (
    <Container>
      <HeaderBox>
        <Title>{article.title}</Title>
        <TagBox>
          {article.tags.map((tag) => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
          <CreatedAt>{article.updatedAt}</CreatedAt>
        </TagBox>
      </HeaderBox>
      <ContentsBox>
        <ArticleIndex>index</ArticleIndex>
        {/* <Content dangerouslySetInnerHTML={{ __html: article.content }} /> */}
        <Content ref={contentRef} />
        <AuthorBox>
          <AvatarWrapper>
            <Avatar src={article.authorThumbnail} width={30} height={30} />
          </AvatarWrapper>
          <Author>{article.author}</Author>
        </AuthorBox>
      </ContentsBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${(props) => props.theme.spacing[12]};
  padding-right: ${(props) => props.theme.spacing[12]};
`;

const HeaderBox = styled.div`
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.onBackground};
  display: flex;
  flex-direction: column;
  min-width: 40%;
  padding-bottom: ${(props) => props.theme.spacing[10]};
  padding-top: ${(props) => props.theme.spacing[12]};
  width: 100%;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.onBackground};
  font-size: ${(props) => props.theme.fontSize.headline2};
  font-weight: 900;
  white-space: pre-wrap;
  word-break: keep-all;
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing[9]};
  max-width: 50%;
`;

const TagBox = styled.div`
  align-items: center;
  display: flex;
  gap: 8px; ;
`;

const Tag = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  font-size: ${(props) => props.theme.fontSize.body2};
  font-weight: bold;
  padding: 6px 12px;
`;

const CreatedAt = styled(Tag)`
  background-color: ${(props) => props.theme.colors.primary};
`;

const ContentsBox = styled.div`
  display: flex;
  gap: 24px;
  padding-top: ${(props) => props.theme.spacing[8]};
`;

const Content = styled.div`
  flex: 3;
  font-size: ${(props) => props.theme.fontSize.caption1};
  line-height: 40px;
  white-space: pre-wrap;
  word-break: keep-all;

  & > h1 {
    font-size: ${(props) => props.theme.fontSize.headline1};
    font-weight: bold;
  }

  & > h2 {
    font-size: ${(props) => props.theme.fontSize.headline3};
    font-weight: bold;
  }

  & > h3 {
    font-size: ${(props) => props.theme.fontSize.headline3};
    font-weight: bold;
  }

  & > p {
    font-size: ${(props) => props.theme.fontSize.subtitle};
    color: #0d0d0d;
    margin-top: ${(props) => props.theme.spacing[6]};
  }
`;

const ArticleIndex = styled.div`
  font-size: ${(props) => props.theme.fontSize.caption2};
  flex: 1;
`;

const AuthorBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

const AvatarWrapper = styled.div`
  width: 30px;
  height: 30px;
`;

const Avatar = styled(Image)`
  border-radius: 16px;
`;

const Author = styled.span`
  font-weight: bold;
`;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export async function getStaticProps({ params }: any) {
  const res = await fetch(`https://backend/articles/${params.id}`);
  const article = (await res.json()) as ArticleType;

  return {
    props: {
      article
    }
  };
}

export default ArticleDetail;
