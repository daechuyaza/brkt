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
  SIGN_UP: '/signup'
} as const;
