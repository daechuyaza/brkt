import styled from '@emotion/styled';
import Image from 'next/image';

import { ProfileBar } from './ProfileBar';

type Props = {
  author: string;
  authorThumbnailSrc: string;
  createdAt: string;
  description: string;
  thumbnailSrc: string;
  title: string;
};

export function RecommendArticle({
  author,
  authorThumbnailSrc,
  createdAt,
  description,
  thumbnailSrc,
  title
}: Props) {
  return (
    <Container>
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>
      <DescriptionBox>
        <Description>{description}</Description>
        <ProfileBar author={author} authorThumbnailSrc={authorThumbnailSrc} createdAt={createdAt} />
      </DescriptionBox>
      <ThumbnailWrapper>
        <Image src={thumbnailSrc} objectFit="cover" layout="fill" priority={true} />
      </ThumbnailWrapper>
    </Container>
  );
}

const Container = styled.div`
  align-items: flex-start;
  border-top: 1px solid;
  display: flex;
  gap: 32px;
  width: 100%;
  padding-bottom: ${(props) => props.theme.spacing[6]};
  padding-left: ${(props) => props.theme.spacing[8]};
  padding-top: ${(props) => props.theme.spacing[4]};
`;

const TitleBox = styled.div`
  flex: 1.5 1 0;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.subtitle};
  font-weight: bold;
  word-break: keep-all;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex: 2 1 0;
  flex-direction: column;
  font-size: ${(props) => props.theme.fontSize.caption1};
  gap: 32px;
  min-width: 300px;
`;

const Description = styled.span`
  white-space: pre-wrap;
  word-break: keep-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 300px;
  aspect-ratio: auto 300 / 178;
  height: 178px;
`;
