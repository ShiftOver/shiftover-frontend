import { atom } from 'recoil';

export const selectedPersonalData = atom<any>({
    key: 'selectedPersonalData',
    default: {},
});

export const selectedSpiritual = atom<any>({
    key: 'selectedSpiritual',
    default: {},
});

export const selectedNutrition = atom<any>({
    key: 'selectedNutrition',
    default: {},
});

export const selectedSkin = atom<any>({
    key: 'selectedSkin',
    default: {},
});

export const selectedPulmonary = atom<any>({
    key: 'selectedPulmonary',
    default: {},
});

export const selectedCardiovascular = atom<any>({
    key: 'selectedCardiovascular',
    default: {},
});

export const selectedCardioCurrentTreatment = atom<any>({
    key: 'selectedCardioCurrentTreatment',
    default: '',
});

export const selectedNeurosensory = atom<any>({
    key: 'selectedNeurosensory',
    default: '',
});

export const selectedMusculoskeletal = atom<any>({
    key: 'selectedMusculoskeletal',
    default: '',
});

export const selectedMobility = atom<any>({
    key: 'selectedMobility',
    default: '',
});

export const selectedTeaching = atom<any>({
    key: 'selectedTeaching',
    default: '',
});

export const selectedGastrointestinal = atom<any>({
    key: 'selectedGastrointestinal',
    default: '',
});

export const selectedGenitourinary = atom<any>({
    key: 'selectedGenitourinary',
    default: '',
});

export const selectedPainManagement = atom<any>({
    key: 'selectedPainManagement',
    default: '',
});

export const selectedDischarge = atom<any>({
    key: 'selectedDischarge',
    default: '',
});
