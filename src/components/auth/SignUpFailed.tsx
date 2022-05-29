import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { Button } from '@common/ui/Button/Button';

export function SignUpFailed() {
  const router = useRouter();

  return (
    <Container>
      <Head>Something Happend..</Head>
      <Caption>
        회원 가입에 실패하였습니다. <br />
        잠시 후에 다시 시도해 보세요.
      </Caption>
      <Button text="다시 회원가입하기" onClick={() => router.push('/?auth=signup', '/signup')} />
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Head = styled.h2`
  font-size: ${(props) => props.theme.fontSize.headline2};
  margin-bottom: 24px;
`;

const Caption = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSize.caption1};
  margin-bottom: 96px;
  text-align: center;
`;
