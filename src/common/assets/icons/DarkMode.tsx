import * as React from 'react';
import { SVGProps } from 'react';

export const DarkMode = (props: SVGProps<SVGSVGElement>) => (
  <svg width={36} height={36} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={18} cy={18} r={6} fill="#232323" />
    <path
      d="M18 7.5v-3M18 31.5v-3M25.425 10.574l2.12-2.12M8.454 27.547l2.121-2.121M28.5 18h3M4.5 18h3M25.425 25.426l2.12 2.12M8.454 8.453l2.121 2.121"
      stroke="#232323"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
