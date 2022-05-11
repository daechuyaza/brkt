import * as React from 'react';
import { SVGProps } from 'react';

export const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg width={36} height={36} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M27 16.5C27 22.299 22.299 27 16.5 27S6 22.299 6 16.5 10.701 6 16.5 6 27 10.701 27 16.5Z"
      fill="#232323"
    />
    <path d="m30 30-3-3" stroke="#232323" strokeWidth={2} strokeLinecap="round" />
  </svg>
);
