import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
};

export function ArticlesLayout({ children }: Props) {
  return (
    <Container>
      <Title>안녕하세요</Title>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding-left: 12.1rem;
  height: 70rem;
  background-color: black;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.headline2};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 900;
  color: ${(props) => props.theme.colors.surface};
`;
