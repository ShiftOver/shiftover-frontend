import { selector } from 'recoil';
import {
    selectedPersonalData,
    selectedSpiritual,
    selectedNutrition,
    selectedSkin,
    selectedPulmonary,
    selectedCardiovascular,
    selectedCardioCurrentTreatment,
    selectedNeurosensory,
    selectedMusculoskeletal,
    selectedMobility,
    selectedTeaching,
    selectedGastrointestinal,
    selectedGenitourinary,
    selectedPainManagement,
    selectedDischarge,
} from '../atoms'; // adjust import path if needed

export const selectedPersonalDataSelector = selector({
    key: 'selectedPersonalDataSelector',
    get: ({ get }) => get(selectedPersonalData),
});

export const selectedSpiritualSelector = selector({
    key: 'selectedSpiritualSelector',
    get: ({ get }) => get(selectedSpiritual),
});

export const selectedNutritionSelector = selector({
    key: 'selectedNutritionSelector',
    get: ({ get }) => get(selectedNutrition),
});

export const selectedSkinSelector = selector({
    key: 'selectedSkinSelector',
    get: ({ get }) => get(selectedSkin),
});

export const selectedPulmonarySelector = selector({
    key: 'selectedPulmonarySelector',
    get: ({ get }) => get(selectedPulmonary),
});

export const selectedCardiovascularSelector = selector({
    key: 'selectedCardiovascularSelector',
    get: ({ get }) => get(selectedCardiovascular),
});

export const selectedCardioCurrentTreatmentSelector = selector({
    key: 'selectedCardioCurrentTreatmentSelector',
    get: ({ get }) => get(selectedCardioCurrentTreatment),
});

export const selectedNeurosensorySelector = selector({
    key: 'selectedNeurosensorySelector',
    get: ({ get }) => get(selectedNeurosensory),
});

export const selectedMusculoskeletalSelector = selector({
    key: 'selectedMusculoskeletalSelector',
    get: ({ get }) => get(selectedMusculoskeletal),
});

export const selectedMobilitySelector = selector({
    key: 'selectedMobilitySelector',
    get: ({ get }) => get(selectedMobility),
});

export const selectedTeachingSelector = selector({
    key: 'selectedTeachingSelector',
    get: ({ get }) => get(selectedTeaching),
});

export const selectedGastrointestinalSelector = selector({
    key: 'selectedGastrointestinalSelector',
    get: ({ get }) => get(selectedGastrointestinal),
});

export const selectedGenitourinarySelector = selector({
    key: 'selectedGenitourinarySelector',
    get: ({ get }) => get(selectedGenitourinary),
});

export const selectedPainManagementSelector = selector({
    key: 'selectedPainManagementSelector',
    get: ({ get }) => get(selectedPainManagement),
});

export const selectedDischargeSelector = selector({
    key: 'selectedDischargeSelector',
    get: ({ get }) => get(selectedDischarge),
});
