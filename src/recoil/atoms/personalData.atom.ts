import { atom } from 'recoil';

export const personalData = atom<any>({
    key: 'personalData',
    default: {},
});
