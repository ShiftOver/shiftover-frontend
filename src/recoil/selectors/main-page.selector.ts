import { selector } from 'recoil';
import { selectedPatient, selectedRoom } from '../atoms'; // Update the path as needed

export const selectedRoomPatientSelector = selector({
    key: 'selectedRoomSelector',
    get: ({ get }) => {
        const room = get(selectedRoom);

        return {
            selectedRoom: room,
        };
    },
});
