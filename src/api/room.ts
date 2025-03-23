import api from './axiosInstance';

export const getRoom = async (id: string) => {
    const response = await api.get(`/patient/${id}`);
    return response.data;
};
