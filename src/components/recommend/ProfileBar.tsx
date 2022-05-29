import styled from '@emotion/styled';
import Image from 'next/image';

type Props = {
  author: string;
  authorThumbnailSrc: string;
  createdAt: string;
};

export function ProfileBar({ author, authorThumbnailSrc, createdAt }: Props) {
  return (
    <Container>
      <Avatar src={authorThumbnailSrc} width={24} height={24} objectFit="cover" />
      <Author>{author}</Author>
      <CreatedAt>{createdAt}</CreatedAt>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

const Avatar = styled(Image)`
  border-radius: 16px;
`;

const Author = styled.span`
  font-size: ${(props) => props.theme.fontSize.caption2};
  font-weight: bold;
  padding-left: 8px;
`;

const CreatedAt = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSize.caption2};
  padding-left: 16px;
`;
