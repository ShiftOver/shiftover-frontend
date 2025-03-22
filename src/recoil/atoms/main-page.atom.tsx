import { atom } from 'recoil';

export const selectedPatient = atom<string>({
    key: 'selectedPatient',
    default: '',
});
