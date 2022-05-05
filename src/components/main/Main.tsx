import React from 'react';

import styled from '@emotion/styled';

import { ArticleType } from '@modules/article/types/article';

type MainProps = {
  articles: ArticleType[];
};

export function Main({ articles }: MainProps) {
  console.log('articles', articles);

  return <Container>Main</Container>;
}

/**
 * TODO laptop 기준 120rem
 * 차후 미디어 쿼리 훅을 추가해야 합니다.
 */
const Container = styled.div`
  display: flex;
  flex: 1 1 0;
  height: 60vh;
  min-width: 120rem;
  background-color: red;
`;
