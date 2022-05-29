import { rest } from 'msw';

/**
 * TODO updatedAt 바꾸기
 */

export const handlers = [
  rest.get('https://backend/articles', (req, res, ctx) =>
    res(
      ctx.json([
        {
          title: 'CircuitBreaker를 이용한 외부 API 장애 관리',
          author: '정주형',
          authorThumbnail: 'https://picsum.photos/1000',
          thumbnail: 'https://picsum.photos/1100',
          updatedAt: new Date().toISOString().substring(0, 10),
          description: `프로그래밍을 하게 되면 코드 그 자체를 쓰는 기술도 배워야 한다. 하지만 더 수준이 올라갈수록 중요해지는 건, 코드를 어떻게 나누고, 어떻게 배치하고, 나눈 코드들을 어떻게 조합할 것인가. 같은 질문들이다. 프로그래밍을 하게 되면 코드 그 자체를 쓰는 기술도 배워야 한다. 하지만 더 수준이 올라갈수록 중요해지는 건, 코드를 어떻게 나누고, 어떻게 배치하고, 나눈 코드들을 어떻게 조합할 것인가. 같은 질문들이다. 프로그래밍을 하게 되면 코드 그 자체를 쓰는 기술도 배워야 한다. 하지만 더 수준이 올라갈수록 중요해지는 건, 코드를 어떻게 나누고, 어떻게 배치하고, 나눈 코드들을 어떻게 조합할 것인가. 같은 질문들이다.
            `
        },
        {
          title: '깔끔하게 깃 관리하기 Rebase와 Merge',
          author: '김도희',
          authorThumbnail: 'https://picsum.photos/1200',
          thumbnail: 'https://picsum.photos/1300',
          updatedAt: new Date().toISOString().substring(0, 10),
          description:
            '서비스에서 필요한 내용은 "비즈니스 로직" 이라고 불리는 핵심기능입니다. 그 외 시간을 잰다던지, 트랜잭션을 건다던지 하는 기능들은 "인프라 로직", 즉 부가기능입니다.'
        },
        {
          title: '소프트웨어 설계의 근본 원칙 관심사의 분리',
          author: '윤한솔',
          authorThumbnail: 'https://picsum.photos/1400',
          thumbnail: 'https://picsum.photos/1500',
          updatedAt: new Date().toISOString().substring(0, 10),
          description:
            '그리하여 웹 성능 최적화 포스팅의 연장. LCP와 CLS를 중심으로 마크업개발자가 웹성능 향상에 적극적으로 도움을 줄 수 있는 방법을 알아보자. 웹 성능 최적화 V2 ⚡️: 핵심적인 웹 지표 개선하기.'
        },
        {
          title: 'AOP(Aspect Oriented Programming) 정리',
          author: '정혜리',
          authorThumbnail: 'https://picsum.photos/1600',
          thumbnail: 'https://picsum.photos/1700',
          updatedAt: new Date().toISOString().substring(0, 10),
          description:
            '서비스에서 필요한 내용은 "비즈니스 로직" 이라고 불리는 핵심기능입니다. 그 외 시간을 잰다던지, 트랜잭션을 건다던지 하는 기능들은 "인프라 로직", 즉 부가기능입니다.'
        }
      ])
    )
  ),
  rest.get('/reviews', (req, res, ctx) =>
    res(
      ctx.json([
        {
          id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
          author: 'John Maverick',
          text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!'
        }
      ])
    )
  )
];
