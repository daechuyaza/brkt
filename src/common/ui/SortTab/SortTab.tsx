import styled from '@emotion/styled';
import { ArrowDown } from 'react-feather';

type Props = {
  title: 'Today' | 'Newest' | 'oldest';
  onClick?: () => void;
};

export function SortTab({ title, onClick }: Props) {
  return (
    <Container onClick={onClick}>
      <TabTitle>{title}</TabTitle>
      <IconBox>
        <ArrowDown size={22} color={'#9E9E9E'} />
      </IconBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing[4]};
  margin-bottom: ${(props) => props.theme.spacing[4]};
`;

const IconBox = styled.div`
  transform: translateY(0.15rem);
`;

const TabTitle = styled.div`
  margin-right: ${(props) => props.theme.spacing[2]};
  font-size: ${(props) => props.theme.fontSize.subtitle2};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary};
`;
