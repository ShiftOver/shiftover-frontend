import api from './axiosInstance';

export const getPatientById = async (id: string) => {
    const response = await api.get(`/patient/${id}`);
    return response.data;
};

export const createPatient = async (patientData: object) => {
    const response = await api.post('/patient', patientData);
    return response.data;
};
