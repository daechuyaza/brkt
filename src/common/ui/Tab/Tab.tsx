import styled from '@emotion/styled';

type Props = {
  title: 'Trending' | 'Following' | 'Series';
  isTapped: boolean;
  onClick: () => void;
};

type TabTitleProps = Pick<Props, 'isTapped'>;

export function Tab({ title, isTapped, onClick }: Props) {
  return (
    <Container onClick={onClick}>
      <TabTitle isTapped={isTapped}>{title}</TabTitle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 13.3rem;
  height: 100%;
`;

const TabTitle = styled.div<TabTitleProps>`
  font-size: ${(props) => props.theme.fontSize.subtitle2};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: ${(props) =>
    props.isTapped ? props.theme.colors.onSurface : props.theme.colors.secondary};
`;
