import * as React from 'react';
import { SVGProps } from 'react';

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m24 24 1.296-1.296L26.593 24l-1.297 1.296L24 24ZM3.296.704l22 22-2.592 2.592-22-22L3.296.704Zm22 24.592-22 22-2.592-2.592 22-22 2.592 2.592Z"
      fill="#232323"
    />
  </svg>
);
