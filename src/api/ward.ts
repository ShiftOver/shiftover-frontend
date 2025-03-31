import api from './axiosInstance';

export const getWard = async (id: string) => {
    const response = await api.get(`/ward/${id}`);
    return response.data;
};
