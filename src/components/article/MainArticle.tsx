import React from 'react';

import styled from '@emotion/styled';
import Image from 'next/image';

import { ArticleType } from '@modules/article/types/article';

type Props = {
  article: ArticleType;
};

/**
 * NOTE
 * next image의 responsive는 부모가 꼭 block element여야 합니다.
 * responsive 모드일때 width와 height는 실제 크기가 아니라 비율입니다.
 * responvie 모드일때 해당 이미지 컴포넌트의 크기는 부모의 width에 따라서 결정됩니다.
 *
 * 아래 컴포넌트의 경우 Container가 flex 1 1 0 (MainArticle 이 두개이므로 50%씩)
 * ThumbnailWrapper가 block이므로 100%(부모는 50%이므로 절반)
 * 따라서 절반 크기의 높이를 가지게 됩니다.
 */

export function MainArticle({ article }: Props) {
  return (
    <Container>
      <ThumbnailWrapper>
        <Thumbnail src={article.thumbNail} layout={'fill'} priority={true} />
      </ThumbnailWrapper>
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
  background-color: brown;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
`;

const Thumbnail = styled(Image)`
  object-fit: cover;
`;

const DescriptionWrapper = styled.div`
  padding-right: ${(props) => props.theme.spacing[7]};
  padding-left: ${(props) => props.theme.spacing[7]};
  background-color: green;
`;

const SubDescrptionBox = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.subtitle};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.colors.onSurface};
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
