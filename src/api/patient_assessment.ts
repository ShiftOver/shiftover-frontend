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
