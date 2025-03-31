import api from './axiosInstance';

export const getRoom = async (id: string) => {
    const response = await api.get(`/room/${id}`);
    return response.data;
};
