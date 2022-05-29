import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { Button } from '@common/ui/Button/Button';

export function SignUpSuccess() {
  const router = useRouter();

  return (
    <Container>
      <Head>환영합니다!</Head>
      <Caption>
        회원가입에 성공하였습니다. <br />
        BRKT의 멤버가 되신 것을 진심으로 환영합니다.
      </Caption>
      <Button text="시작하기" theme="primary" onClick={() => router.push('/')} />
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
