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
          author: '티나리',
          thumbNail: 'https://picsum.photos/1000',
          updatedAt: new Date().toISOString().substring(0, 10)
        },
        {
          title: '깔끔하게 깃 관리하기 Rebase와 Merge',
          author: '티나리',
          thumbNail: 'https://picsum.photos/1000',
          updatedAt: new Date().toISOString().substring(0, 10)
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
