import React from 'react';

import styled from '@emotion/styled';
import Image from 'next/image';

import { ArticleType } from '@modules/article/types/article';

type Props = {
  article: ArticleType;
};

export function MainArticle({ article }: Props) {
  return (
    <Container>
      <Thumbnail>
        <Image src={article.thumbNail} width={'100%'} height={'100%'} layout={'responsive'} />
      </Thumbnail>
      <DescriptionWrapper>
        <Title>{article.title}</Title>
        <SubDescrptionBox>
          <Author>{article.author}</Author>
          <ArticleDate>{article.updatedAt}</ArticleDate>
        </SubDescrptionBox>
      </DescriptionWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
`;

const Thumbnail = styled.div`
  position: relative;
  background-color: brown;
  object-fit: contain;
`;

const DescriptionWrapper = styled.div`
  padding-right: ${(props) => props.theme.spacing[7]};
  padding-left: ${(props) => props.theme.spacing[7]};
  width: 100%;
  background-color: green;
`;

const SubDescrptionBox = styled.div`
  display: flex;
  flex: 1 1 0;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.subtitle};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.colors.onSurface};
`;

const AuthorThumbnail = styled.div`
  position: relative;
  background-color: brown;
  object-fit: contain;
`;

const Author = styled.div`
  font-size: ${(props) => props.theme.fontSize.body2};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.colors.secondary};
`;

const ArticleDate = styled.div`
  font-size: ${(props) => props.theme.fontSize.body2};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  color: ${(props) => props.theme.colors.secondary};
`;
