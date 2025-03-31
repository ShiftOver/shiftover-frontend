import api from './axiosInstance';

export const upsertPatientAssessment = async (
    patientAssessmentData: object
) => {
    const response = await api.post(
        '/patient/assessment',
        patientAssessmentData
    );
    return response.data;
};

export const getPatientAssessmentById = async (id: string) => {
    const response = await api.get(`/patient/assessment/${id}`);
    return response.data;
};
