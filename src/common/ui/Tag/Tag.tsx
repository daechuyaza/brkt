import styled from '@emotion/styled';

type Props = {
  title: string;
};

export function Tag({ title }: Props) {
  return <Container>{title}</Container>;
}

const Container = styled.div`
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  height: ${(props) => props.theme.spacing[5]};
  background-color: blue;
`;
