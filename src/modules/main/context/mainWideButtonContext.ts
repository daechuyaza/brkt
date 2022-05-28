import { atom } from 'recoil';

export const hoveredMainWideButtonContext = atom({
  key: 'mainWideButtonContext', // unique ID (with respect to other atoms/selectors)
  default: 'Article' // default value (aka initial value)
});
