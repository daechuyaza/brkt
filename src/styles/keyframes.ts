import { keyframes } from '@emotion/react';

export const popInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }

  75% {
    opacity: 1;
    transform: translateY(-16px) scale(1);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const popOutToBottom = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }

  10% {
    opacity: 0.4;
    transform: translateY(0px) scale(1);
  }

  100% {
    opacity: 0;
    transform: translateY(400px) scale(1);
  }
`;
