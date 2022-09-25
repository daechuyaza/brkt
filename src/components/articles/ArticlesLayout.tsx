import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Tab, SortTab } from '@common/ui';

type Props = {
  children: React.ReactNode;
};

export function ArticlesLayout({ children }: Props) {
  const router = useRouter();
  const [tappedButton, setTappedButton] = useState<'Trending' | 'Following' | 'Series'>(() => {
    if (router.pathname === '/articles/trending') {
      return 'Trending';
    }

    if (router.pathname === '/articles/following') {
      return 'Following';
    }

    if (router.pathname === '/articles/series') {
      return 'Series';
    }

    return 'Trending';
  });
  const [titleName, setTitleName] = useState<'최신 컨텐츠' | '팔로잉' | '시리즈'>(() => {
    if (router.pathname === '/articles/trending') {
      return '최신 컨텐츠';
    }

    if (router.pathname === '/articles/following') {
      return '팔로잉';
    }

    if (router.pathname === '/articles/series') {
      return '시리즈';
    }

    return '최신 컨텐츠';
  });

  useEffect(() => {
    switch (router.pathname) {
      case '/articles/trending':
        setTappedButton('Trending');
        setTitleName('최신 컨텐츠');
        return;

      case '/articles/following':
        setTappedButton('Following');
        setTitleName('팔로잉');
        return;

      case '/articles/series':
        setTappedButton('Series');
        setTitleName('시리즈');
        return;
    }
  }, [router.pathname]);

  return (
    <Container>
      <Title>{titleName}</Title>
      <Tabbar>
        <Link href="/articles/trending" passHref>
          <a>
            <Tab title={'Trending'} isTapped={tappedButton === 'Trending'} />
          </a>
        </Link>
        <Link href="/articles/following" passHref>
          <a>
            <Tab title={'Following'} isTapped={tappedButton === 'Following'} />
          </a>
        </Link>
        <Link href="/articles/series" passHref>
          <a>
            <Tab title={'Series'} isTapped={tappedButton === 'Series'} />
          </a>
        </Link>
      </Tabbar>
      <SortTab title={'Today'} />
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
