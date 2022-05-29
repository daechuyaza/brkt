import styled from '@emotion/styled';

type Props = {
  title: string;
  description: string;
};

export function Paragraph({ title, description }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 48px;
  max-width: 60%;
`;

const Title = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSize.subtitle};
  font-weight: bold;
`;

const Description = styled.div`
  font-size: ${(props) => props.theme.fontSize.caption2};
  white-space: break-spaces;
`;
