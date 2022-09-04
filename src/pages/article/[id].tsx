import styled from '@emotion/styled';
import { GetStaticPaths } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { ArticleType } from '@modules/article/types';
import { UserType } from '@modules/user/types';

type Props = {
  article: ArticleType;
  user: UserType;
};

function ArticleDetail({ article, user }: Props) {
  const [index, setIndex] = useState<string[]>([]);

  useEffect(() => {
    const content = document.querySelector('#blogContent');
    const headings: NodeListOf<HTMLHeadingElement> | undefined = content?.querySelectorAll('h2');

    if (headings) {
      const index = Array.prototype.map.call(
        headings,
        (heading: HTMLHeadingElement) => heading.textContent
      );

      setIndex(index as string[]);
    }
  }, []);

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
        <ArticleIndex>
          {index.map((el, index) => (
            <Index key={index} isOnView={index === 0}>
              {el}
            </Index>
          ))}
        </ArticleIndex>
        <Content id="blogContent" dangerouslySetInnerHTML={{ __html: article.content }} />
        <AuthorBox>
          <AvatarWrapper>
            <Avatar src={user.profileImage} width={140} height={140} />
          </AvatarWrapper>
          <Author>{user.nickname}</Author>
          <AuthorIntroduction>{user.introduction}</AuthorIntroduction>
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
  max-width: 848px;
`;

const TagBox = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
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
  color: ${(props) => props.theme.colors.onBackground};
`;

const ContentsBox = styled.div`
  display: flex;
  gap: 64px;
  padding-top: ${(props) => props.theme.spacing[8]};
`;

const Content = styled.div`
  flex: 3;
  font-size: ${(props) => props.theme.fontSize.caption1};
  line-height: 40px;
  white-space: pre-wrap;
  word-break: keep-all;

  & > h1 {
    font-size: ${(props) => props.theme.fontSize.headline3};
    font-weight: bold;
  }

  & > h2 {
    font-size: ${(props) => props.theme.fontSize.subtitle1};
    font-weight: bold;
  }

  & > h3 {
    font-size: ${(props) => props.theme.fontSize.subtitle1};
    font-weight: bold;
  }

  & > p {
    font-size: ${(props) => props.theme.fontSize.subtitle2};
    color: #0d0d0d;
    line-height: 1.5;
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
  gap: 32px;
  flex: 1;
`;

const AvatarWrapper = styled.div`
  border-radius: 50%;
  height: 140px;
  overflow: hidden;
  width: 140px;
`;

const Avatar = styled(Image)`
  border-radius: 16px;
`;

const Author = styled.span`
  font-size: ${({ theme }) => theme.fontSize.subtitle2};
  font-weight: bold;
`;

const AuthorIntroduction = styled(Author)`
  font-weight: normal;
  line-height: 1.5;
`;

const Index = styled.div<{
  isOnView: boolean;
}>`
  color: ${(props) => (props.isOnView ? props.theme.colors.primary : props.theme.colors.secondary)};
  font-size: ${({ theme }) => theme.fontSize.body2};
  margin-bottom: 32px;
`;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export async function getStaticProps({ params }: any) {
  const articleResponse = await fetch(`https://backend/articles/${params.id}`);
  const article = (await articleResponse.json()) as ArticleType;

  const userResponse = await fetch(`https://backend/users/${article.authorId}`);
  const user = (await userResponse.json()) as UserType;

  return {
    props: {
      article,
      user
    }
  };
}

export default ArticleDetail;
