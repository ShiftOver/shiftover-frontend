import { atom } from 'recoil';

export const selectedPatient = atom<string>({
    key: 'selectedPatient',
    default: '',
});

export const selectedRoom = atom<string>({
    key: 'selectedRoom',
    default: '',
});
