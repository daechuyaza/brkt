export const mainWideButtonsInformation = [
  {
    title: 'Article',
    description: 'BRKT가 당신에게 추천하는 개발 관련 articles를 읽어 보세요'
  },
  {
    title: 'My Writings',
    description: '여러분의 글을 확인해 보세요'
  },
  {
    title: 'About BRKT',
    description: 'BRKT에 대해 알아보세요'
  },
  {
    title: 'Contact',
    description: ''
  }
] as const;

export const ROUTES = {
  MAIN: '/',
  ABOUT: '/about',
  SUBSCRIBE: '/subscribe',
  LOG_IN: '/login',
  SIGN_UP: '/signup',
  NEW_STORY: '/new-story'
} as const;

export const aboutParagraphs = [
  {
    title: 'BRKT에 대해서',
    description:
      'BRKT는 프론트엔드 개발자들을 위한 컨텐츠 플랫폼입니다. 개발에 필요한 지식을 나누고 쓸 수 있으며 개발에 관한 다양한 의견을 한국어로 나눌 수 있습니다.'
  },
  {
    title: '왜 만들었나요?',
    description: `개발자로써 가장 중요한 것은 스택 오버 플로우와 구글링 능력이라고 말합니다. 이는 어떻게 보면, 양질의 한국어로 된 개발 관련 아티클들이 부족하다는 말일 수 있습니다. 번역된 좋은 책들이 많지만, 이들은 빠른 변화를 반영하기 어렵습니다. 또한 현업에서 만나는 다양한 문제들을 해결하기 어렵습니다.
      \n그런데 만약, 살아있는 한국어로 된 자료들이 있다면 어떻게 될까요? 좀 더 빠른 문제 파악, 빠른 지식의 습득이 가능하지 않을까요? BRKT는 이러한 생각에서 시작하였습니다. 신뢰할 수 있는, 한국어로 된 프론트엔드 개발 자료들을 쓰고 나누면서, 한국의 개발 생태계에 조금이라도 도움이 되고자 합니다.`
  },
  {
    title: '글은 어떻게 쓸 수 있나요?',
    description:
      '아쉽지만 BRKT는 아직 초기 단계입니다. 아직까지 퍼블릭 오픈 단계는 아닙니다. 글을 따로 쓰고 싶다면 해당 이메일로 본인이 쓴 글 한편과 간단한 소개를 보내주세요. info@brkt.kr.'
  }
] as const;
