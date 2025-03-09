'use client';
import { useEffect, useState } from 'react';
import { getPatientById } from '@/api';
import { storage } from '@/config/firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const PatientPage = () => {
    const [patient, setPatient] = useState(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        getPatientById('PATIENT-0')
            .then((data) => setPatient(data))
            .catch((err) => console.error('Error fetching patient', err));

        const fetchImage = async () => {
            try {
                const imageRef = ref(storage, 'Cat03.jpg');
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
            } catch (error) {
                console.error('Error getting image URL:', error);
            }
        };

        fetchImage();
    }, []);

    return (
        <div>
            {imageUrl ? (
                <img src={imageUrl} alt='Firebase Image' />
            ) : (
                <p>Loading image...</p>
            )}
            {patient ? (
                <pre>{JSON.stringify(patient, null, 2)}</pre>
            ) : (
                'Loading...'
            )}
        </div>
    );
};

export default PatientPage;
