import api from './axiosInstance';

export const getUser = async (id: string) => {
    const response = await api.get(`/user/${id}`);
    return response.data;
};
