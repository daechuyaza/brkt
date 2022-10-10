import styled from '@emotion/styled';
import Image from 'next/image';

import { Avatar, Tag } from '@common/ui';

export function ArticleList() {
  return (
    <Container>
      <ArticleBox>
        <HeaderWrapper>
          <Avatar
            size={3.2}
            imageSrc={
              'https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'
            }
          />
          <Author>티나리</Author>
          <ArticleDate>2022-02-23</ArticleDate>
        </HeaderWrapper>
        <BodyWrapper>
          <Title>소프트웨어 설계의 근본 원칙 관심사의 분리</Title>
          <Description>
            프로그래밍을 하게 되면 코드 그 자체를 쓰는 기술도 배워야 한다. 하지만 더 수준이
            올라갈수록 중요해지는 건, 코드를 어떻게 나누고, 어떻게 배치하고, 나눈 코드들을 어떻게
            조합할 것인가. 같은 질문들이다. 프로그래밍을 하게 되면 코드 그 자체를 쓰는 기술도 배워야
            한다. 하지만 더 수준이 올라갈수록 중요해지는 건, 코드를 어떻게 나누고, 어떻게 배치하고,
            나눈 코드들을 어떻게 조합할 것인가. 같은 질문들이다. 프로그래밍을 하게 되면 코드 그
            자체를 쓰는 기술도 배워야 한다. 하지만 더 수준이 올라갈수록 중요해지는 건, 코드를 어떻게
            나누고, 어떻게 배치하고, 나눈 코드들을 어떻게 조합할 것인가. 같은 질문들이다.
            프로그래밍을 하게 되면 코드 그 자체를 쓰는 기술도 배워야 한다. 하지만 더 수준이
            올라갈수록 중요해지는 건, 코드를 어떻게 나누고, 어떻게 배치하고, 나눈 코드들을 어떻게
            조합할 것인가. 같은 질문들이다.
          </Description>
        </BodyWrapper>
        {/* <FooterWrapper> */}
        <TagWrapper>
          <Tag title="React" />
          <Tag title="Web" />
        </TagWrapper>
        {/* </FooterWrapper> */}
      </ArticleBox>
      <ThumbnailBox>
        <Thumbnail
          src={
            'https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'
          }
          layout={'fill'}
          priority={true}
        />
      </ThumbnailBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5.3rem;
`;

const ArticleBox = styled.div`
  display: flex;
  max-width: 70%;
  flex-direction: column;
  background-color: 'blue';
`;

const BodyWrapper = styled.div`
  max-height: 19rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing[4]};
`;

const Author = styled.div`
  margin-right: ${(props) => props.theme.spacing[4]};
  margin-left: ${(props) => props.theme.spacing[4]};
  font-size: ${(props) => props.theme.fontSize.body1};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.colors.onSurface};
`;

const ArticleDate = styled.div`
  font-size: ${(props) => props.theme.fontSize.body1};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.colors.secondary};
`;

const Title = styled.h1`
  margin-bottom: ${(props) => props.theme.spacing[4]};
  font-size: ${(props) => props.theme.fontSize.headline3};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.colors.onSurface};
`;

const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  font-size: ${(props) => props.theme.fontSize.body1};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.colors.onSurface};
`;

const ThumbnailBox = styled.div`
  position: relative;
  width: 17rem;
  height: 19rem;
`;

const Thumbnail = styled(Image)`
  object-fit: cover;
`;

const TagWrapper = styled.div`
  display: flex;
`;
