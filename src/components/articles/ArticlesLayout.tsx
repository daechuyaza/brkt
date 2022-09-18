import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Tab } from '@common/ui';

type Props = {
  children: React.ReactNode;
};

export function ArticlesLayout({ children }: Props) {
  const router = useRouter();
  const [tappedButton, setTappedButton] = useState<'Trending' | 'Following' | 'Series'>('Trending');

  const getTitleByPathName = (pathname: string) => {
    switch (pathname) {
      case '/articles/trending':
        return '최신 컨텐츠';

      case '/articles/following':
        return '팔로잉';

      case '/articles/series':
        return '시리즈';
    }
  };

  return (
    <Container>
      <Title>{getTitleByPathName(router.pathname)}</Title>
      <Tabbar>
        <Link href="/articles/trending" passHref>
          <Tab
            title={'Trending'}
            isTapped={tappedButton === 'Trending'}
            onClick={() => {
              //route
              setTappedButton('Trending');
            }}
          />
        </Link>
        <Link href="/articles/following" passHref>
          <Tab
            title={'Following'}
            isTapped={tappedButton === 'Following'}
            onClick={() => {
              //route
              setTappedButton('Following');
            }}
          />
        </Link>
        <Link href="/articles/series" passHref>
          <Tab
            title={'Series'}
            isTapped={tappedButton === 'Series'}
            onClick={() => {
              //route
              setTappedButton('Series');
            }}
          />
        </Link>
      </Tabbar>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70rem;
  padding-top: ${(props) => props.theme.spacing[9]};
  padding-right: ${(props) => props.theme.spacing[10]};
  padding-left: ${(props) => props.theme.spacing[10]};
  background-color: ${(props) => props.theme.colors.background};
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.secondary};
  border-top-style: solid;
`;

const Title = styled.div`
  margin-bottom: ${(props) => props.theme.spacing[7]};
  font-size: ${(props) => props.theme.fontSize.headline1};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 900;
  color: ${(props) => props.theme.colors.onSurface};
`;

const Tabbar = styled.div`
  display: flex;
  width: 100%;
  height: 5.3rem;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.secondary};
  border-bottom-style: solid;
`;
