import styled from '@emotion/styled';
import Image from 'next/image';

type Props = {
  size: number;
  imageSrc: string;
};

export function Avatar({ size, imageSrc }: Props) {
  return (
    <Container size={size}>
      <Photo src={imageSrc} layout={'fill'} priority={true} />
    </Container>
  );
}

/**
 * NOTE
 * next js 의 이미지 컴포넌트 layout fill의 경우
 * parent element에 relative를 명시해야 합니다.
 * https://nextjs.org/docs/api-reference/next/image
 */
const Container = styled.div<Pick<Props, 'size'>>`
  position: relative;
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  border-radius: 25px;
  background-color: blue;
`;

const Photo = styled(Image)`
  object-fit: cover;
  border-radius: 2.5rem;
`;
