import { atom } from 'recoil';

export const repos = atom({
  key: 'repos',
  default: [],
});

export const user = atom({
  key: 'view',
  default: 'fatcatt013',
});
