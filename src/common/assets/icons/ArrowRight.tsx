import * as React from 'react';
import { SVGProps } from 'react';

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={'32px'} height={'64px'} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m37 37 2.004-2.004L41.007 37l-2.003 2.003L37 37ZM5.004.996l34 34-4.008 4.007-34-34L5.005.996Zm34 38.007-34 34-4.007-4.007 34-34 4.007 4.007Z"
      fill="#232323"
    />
  </svg>
);
