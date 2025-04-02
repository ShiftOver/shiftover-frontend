import { useEffect, useRef, useState } from 'react';
import CardHolder from '../../CardHolder';
import SaveButton from '../../SaveButton';
import TextInput from '../../TextInput';
import Image from 'next/image';
import { createPatient, getRoom } from '@/api';
import ArrayInput from '../../ArrayInput';
import NumberInput from '../../NumberInput';
import DoubleInput from '../../DoubleInput';
import { ref, getDownloadURL, uploadBytes, listAll } from 'firebase/storage';
import { storage } from '@/config/firebase';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedRoomPatientSelector } from '@/recoil/selectors';
import { useRouter } from 'next/navigation';
import { selectedPersonalData } from '@/recoil/atoms';

export type PersonalDataProps = {
    id?: any;
};

export default function PersonalData({ id }: PersonalDataProps) {
    const [personalData, setPersonalData] =
        useRecoilState<any>(selectedPersonalData);
    const useSyncPersonalData = () => {
        const update = (field: string, value: any) => {
            setPersonalData((prev: any) => ({
                ...prev,
                [field]: value,
            }));
        };

        return update;
    };
    const updatePersonalData = useSyncPersonalData();
    const isModeOfArrivalOther =
        personalData?.modeOfArrival?.startsWith('Other:');
    const modeOfArrivalOther = isModeOfArrivalOther
        ? personalData.modeOfArrival.split(':')[1]
        : '';
    const handleModeOfArrivalOtherChange = (value: string) => {
        updatePersonalData('modeOfArrival', `Other:${value}`);
    };

    const isAdmittedFormOther =
        personalData?.admittedForm?.startsWith('Other:');
    const admittedFormOther = isAdmittedFormOther
        ? personalData.admittedForm.split(':')[1]
        : '';
    const handleAdmittedFormOtherChange = (value: string) => {
        updatePersonalData('admittedForm', `Other:${value}`);
    };

    const [modeOfArrival, setModeOfArrival] = useState('');

    const [admittedForm, setAdmittedForm] = useState('');

    const [diagnosis, setDiagnosis] = useState('');
    const [chiefComplaint, setChiefComplaint] = useState('');
    const [pastIllness, setPastIllness] = useState('');
    const [pastIllnessHistory, setPastIllnessHistory] = useState('');
    const [familyIllnessHistory, setFamilyIllnessHistory] = useState('');
    const [allergies, setAllergies] = useState(['']);
    const [reactions, setReactions] = useState(['']);
    const [temp, setTemp] = useState<null | number>(null);
    const [hr, setHr] = useState<string | number>('');
    const [resp, setResp] = useState<string | number>('');
    const [bPSystol, setBPSystol] = useState<string | number>('');
    const [bPDiastol, setBPDiastol] = useState<string | number>('');
    const [tobacco, setTobacco] = useState('');
    const [tobaccoQuit, setTobaccoQuit] = useState('');
    const [tobaccoSmokedDuration, setTobaccoSmokedDuration] = useState('');
    const [tobaccoQuitDuration, setTobaccoQuitDuration] = useState('');
    const [tobaccoContinuous, setTobaccoContinuous] = useState('');
    const [alcohol, setAlcohol] = useState('');
    const [alcoholQuit, setAlcoholQuit] = useState('');
    const [alcoholSmokedDuration, setAlcoholSmokedDuration] = useState('');
    const [alcoholQuitDuration, setAlcoholQuitDuration] = useState('');
    const [alcoholContinuous, setAlcoholContinuous] = useState('');
    const [alcoholContinuousFrequency, setAlcoholContinuousFrequency] =
        useState('');
    const [alcoholContinuousDuration, setAlcoholContinuousDuration] =
        useState('');
    const [drug, setDrug] = useState('');
    const [drugQuit, setDrugQuit] = useState('');
    const [drugSmokedDuration, setDrugSmokedDuration] = useState('');
    const [drugQuitDuration, setDrugQuitDuration] = useState('');
    const [drugContinuous, setDrugContinuous] = useState('');
    const [drugContinuousFrequency, setDrugContinuousFrequency] = useState('');
    const [drugContinuousDuration, setDrugContinuousDuration] = useState('');
    const [exercise, setExercise] = useState('');
    const [exerciseFrequency, setExerciseFrequency] = useState('');
    const [sleepHour, setSleepHour] = useState<string | number>('');
    const [sleep, setSleep] = useState('');
    const [sleepHelp, setSleepHelp] = useState('');
    const [informationProvider, setInformationProvider] = useState('');
    const [informationProviderOther, setInformationProviderOther] =
        useState('');
    const [emergencyNotify, setEmergencyNotify] = useState('');
    const [relationship, setRelationship] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState<null | string>(null);
    const [imageUrl, setImageUrl] = useState<string>(''); // Current image URL (Firebase or preview)
    const [selectedFile, setSelectedFile] = useState<File | null>(null); // File selected by user
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { selectedRoom } = useRecoilValue(selectedRoomPatientSelector);
    const router = useRouter();

    useEffect(() => {
        if (!id) return;

        const checkAndLoadImage = async () => {
            const folderRef = ref(storage, `profile`);
            try {
                const result = await listAll(folderRef);
                const fileExists = result.items.find(
                    (item) => item.name === `${id}.jpg`
                );
                if (fileExists) {
                    const url = await getDownloadURL(fileExists);
                    setImageUrl(url);
                } else {
                    setImageUrl('');
                }
            } catch (error) {
                console.error('Failed to list files:', error);
                setImageUrl('');
            }
        };

        checkAndLoadImage();
    }, [id]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const previewUrl = URL.createObjectURL(file);
            setImageUrl(previewUrl); // Update preview
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!id) {
            if (
                !personalData?.firstName ||
                !personalData?.lastName ||
                !['male', 'female', 'other'].includes(personalData?.sex) ||
                !personalData?.dateOfBirth
            ) {
                alert(
                    `Please fill in the required form.  ${personalData?.firstName ? '' : 'firstname'} ${personalData?.lastName ? '' : 'lastName'} ${['male', 'female', 'other'].includes(personalData?.sex) ? '' : 'sex must be male or female or other'} ${personalData?.dateOfBirth ? '' : 'dateOfBirth'}`
                );
            } else {
                const formData = {
                    // roomId: selectedRoom,
                    roomId: 'ROOM-7',
                    patientModel: {
                        firstName: personalData?.firstName,
                        lastName: personalData?.lastName,
                        profilePictureUrl: '',
                        sex: personalData?.sex,
                        education: personalData?.education,
                        occupation: personalData?.occupation,
                        dateOfBirth: personalData?.dateOfBirth,
                        height: personalData?.height ? personalData.height : 0,
                        weight: personalData?.weight ? personalData.weight : 0,
                        modeOfArrival: personalData?.modeOfArrival,
                        admittedForm: personalData?.admittedForm,
                        initialVitalSigns: {
                            temperature: temp,
                            heartRate: hr ? hr : 0,
                            respiratoryRate: resp ? resp : 0,
                            bloodPressure: {
                                systol: bPSystol ? bPSystol : 0,
                                diastol: bPDiastol ? bPDiastol : 0,
                            },
                        },
                        diagnosis,
                        chiefComplaint,
                        pastIllness,
                        pastIllnessHistory,
                        familyIllnessHistory,
                        allergies: allergies.map((value) => {
                            return { name: value };
                        }),

                        reactions: reactions.map((value) => {
                            return { data: value };
                        }),
                        tobacco: {
                            status: tobacco,
                            quitInfo: {
                                smokedDuration: tobaccoSmokedDuration,
                                quitDuration: tobaccoQuitDuration,
                            },
                            continuousInfo: {
                                duration: tobaccoContinuous,
                            },
                        },
                        alcohol: {
                            status: alcohol,
                            quitInfo: {
                                smokedDuration: alcoholSmokedDuration,
                                quitDuration: alcoholQuitDuration,
                            },
                            continuousInfo: {
                                frequency: alcoholContinuousFrequency,
                                duration: alcoholContinuousDuration,
                            },
                        },
                        drug: {
                            status: drug,
                            quitInfo: {
                                smokedDuration: drugSmokedDuration,
                                quitDuration: drugQuitDuration,
                            },
                            continuousInfo: {
                                frequency: drugContinuousFrequency,
                                duration: drugContinuousDuration,
                            },
                        },
                        exercise: {
                            status: exercise,
                            frequency: exerciseFrequency,
                        },
                        sleep: {
                            amount: sleepHour ? sleepHour : 0,
                            status: sleep,
                            helper: sleepHelp,
                        },
                        information: {
                            providedBy:
                                informationProvider == 'Other'
                                    ? `Other:${informationProviderOther}`
                                    : informationProvider,
                            emergencyContact: {
                                name: emergencyNotify,
                                relationship: relationship,
                                phoneNumber: phone,
                            },
                        },
                    },
                };
                setError(null);
                try {
                    await createPatient(formData);
                    const roomData = await getRoom('ROOM-7');
                    const patientId = roomData.currentPatient.patientId;
                    if (selectedFile) {
                        const imageRef = ref(
                            storage,
                            `profile/${patientId}.jpg`
                        ); // Overwrite or change filename as needed
                        await uploadBytes(imageRef, selectedFile);
                        const url = await getDownloadURL(imageRef);
                        setImageUrl(url); // Update with new Firebase URL
                        setSelectedFile(null); // Clear temp file
                    }
                    router.push(`/pages/main-page/patient-page/${patientId}`);
                } catch (err) {
                    setError('Failed to create patient. Please try again.');
                }
            }
        } else {
            console.log(personalData);
            try {
                if (selectedFile) {
                    const imageRef = ref(storage, `profile/${id}.jpg`);
                    await uploadBytes(imageRef, selectedFile);
                    const url = await getDownloadURL(imageRef);
                    setImageUrl(url);
                    setSelectedFile(null);
                    alert('Image uploaded successfully!');
                }
            } catch (err) {
                setError('Failed to create patient. Please try again.');
            }
        }
    };

    return (
        <div className='ml-[27px] mt-[23px] justify-items-center'>
            <div className='w-full justify-items-start'>
                <CardHolder
                    path='personalLogo'
                    type='NurseAssessmentForm'
                    name='Personal'
                >
                    <div className='w-[1000px]'>
                        <div className='ml-[12px] mr-[12px] flex'>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className=''
                            >
                                {imageUrl ? (
                                    <Image
                                        src={imageUrl}
                                        className='border-full h-[84px] w-[84px]'
                                        width={84}
                                        height={84}
                                        alt=''
                                    />
                                ) : (
                                    <div className='border-full flex h-[84px] w-[84px] items-center justify-center bg-[#f6f3f3]'>
                                        +
                                    </div>
                                )}
                            </button>
                            <input
                                type='file'
                                accept='image/*'
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                            />

                            <div className='ml-[8px] flex flex-col gap-[12px] text-cardnumber text-shiftover-cardtext'>
                                <div className='flex flex-row'>
                                    <TextInput
                                        placeHolder='Name'
                                        value={personalData?.firstName}
                                        onChange={(val: string) =>
                                            updatePersonalData('firstName', val)
                                        }
                                        style={'w-[80px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='Lastname'
                                        value={personalData?.lastName}
                                        onChange={(val: string) =>
                                            updatePersonalData('lastName', val)
                                        }
                                        style={'w-[110px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='Birthdate'
                                        value={personalData?.dateOfBirth}
                                        onChange={(val: string) =>
                                            updatePersonalData(
                                                'dateOfBirth',
                                                val
                                            )
                                        }
                                        style={'w-[51px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='Sex'
                                        value={personalData?.sex}
                                        onChange={(val: string) =>
                                            updatePersonalData('sex', val)
                                        }
                                        style={'w-[50px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='Education'
                                        value={personalData?.education}
                                        onChange={(val: string) =>
                                            updatePersonalData('education', val)
                                        }
                                        style={'w-[92px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='Occupation'
                                        value={personalData?.occupation}
                                        onChange={(val: string) =>
                                            updatePersonalData(
                                                'occupation',
                                                val
                                            )
                                        }
                                        style={'w-[103px]'}
                                    ></TextInput>
                                </div>
                                <div className='flex flex-row'>
                                    <TextInput
                                        placeHolder='Admssion Date'
                                        value={personalData?.admissionDate}
                                        onChange={(val: string) =>
                                            updatePersonalData(
                                                'admissionDate',
                                                val
                                            )
                                        }
                                        style={'w-[142px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='Time'
                                        value={personalData?.time}
                                        onChange={(val: string) =>
                                            updatePersonalData('time', val)
                                        }
                                        style={'w-[89px]'}
                                    ></TextInput>
                                    <NumberInput
                                        placeHolder='Height'
                                        value={personalData?.height}
                                        onChange={(val: any) =>
                                            updatePersonalData('height', val)
                                        }
                                        style={'w-[89px]'}
                                    ></NumberInput>
                                    <NumberInput
                                        placeHolder='Weight'
                                        value={personalData?.weight}
                                        onChange={(val: any) =>
                                            updatePersonalData('weight', val)
                                        }
                                        style={'w-[89px]'}
                                    ></NumberInput>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='mr-[20px]'>
                                        Mode of Arrival:
                                    </div>
                                    <input
                                        type='radio'
                                        id='Walk'
                                        name='modeOfArrival'
                                        value='Walk'
                                        checked={
                                            personalData?.modeOfArrival ===
                                            'Walk'
                                        }
                                        onChange={() =>
                                            updatePersonalData(
                                                'modeOfArrival',
                                                'Walk'
                                            )
                                        }
                                    />
                                    <p className='ml-[6px] mr-[20px]'>Walk</p>
                                    <input
                                        type='radio'
                                        id='Wheel Chair'
                                        name='modeOfArrival'
                                        value='Wheel Chair'
                                        checked={
                                            personalData?.modeOfArrival ===
                                            'Wheel Chair'
                                        }
                                        onChange={() =>
                                            updatePersonalData(
                                                'modeOfArrival',
                                                'Wheel Chair'
                                            )
                                        }
                                    />
                                    <p className='ml-[6px] mr-[20px]'>
                                        Wheel Chair
                                    </p>
                                    <input
                                        type='radio'
                                        id='Stretcher'
                                        name='modeOfArrival'
                                        value='Stretcher'
                                        checked={
                                            personalData?.modeOfArrival ===
                                            'Stretcher'
                                        }
                                        onChange={() =>
                                            updatePersonalData(
                                                'modeOfArrival',
                                                'Stretcher'
                                            )
                                        }
                                    />
                                    <p className='ml-[6px] mr-[20px]'>
                                        Stretcher
                                    </p>
                                    <input
                                        type='radio'
                                        className='mr-[6px]'
                                        id='Other'
                                        name='modeOfArrival'
                                        value='Other'
                                        checked={isModeOfArrivalOther}
                                        onChange={() =>
                                            updatePersonalData(
                                                'modeOfArrival',
                                                'Other:'
                                            )
                                        }
                                    />
                                    <TextInput
                                        placeHolder='Other'
                                        value={modeOfArrivalOther}
                                        onChange={
                                            handleModeOfArrivalOtherChange
                                        }
                                        disabled={!isModeOfArrivalOther}
                                        style={'w-[89px]'}
                                    ></TextInput>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='mr-[25px]'>
                                        Admitted Form:{' '}
                                    </div>
                                    <input
                                        type='radio'
                                        id='ER Trauma'
                                        name='admittedForm'
                                        value='ER Trauma'
                                        checked={
                                            personalData?.admittedForm ===
                                            'ER Trauma'
                                        }
                                        onChange={() =>
                                            updatePersonalData(
                                                'admittedForm',
                                                'ER Trauma'
                                            )
                                        }
                                    />
                                    <p className='ml-[6px] mr-[20px]'>
                                        ER Trauma
                                    </p>
                                    <input
                                        type='radio'
                                        id='OPD'
                                        name='admittedForm'
                                        value='OPD'
                                        checked={
                                            personalData?.admittedForm === 'OPD'
                                        }
                                        onChange={() =>
                                            updatePersonalData(
                                                'admittedForm',
                                                'OPD'
                                            )
                                        }
                                    />
                                    <p className='ml-[6px] mr-[20px]'>OPD</p>
                                    <input
                                        type='radio'
                                        id='Refer'
                                        name='admittedForm'
                                        value='Refer'
                                        checked={
                                            personalData?.admittedForm ===
                                            'Refer'
                                        }
                                        onChange={() =>
                                            updatePersonalData(
                                                'admittedForm',
                                                'Refer'
                                            )
                                        }
                                    />
                                    <p className='ml-[6px] mr-[20px]'>Refer</p>
                                    <input
                                        type='radio'
                                        className='mr-[6px]'
                                        id='Other'
                                        name='admittedForm'
                                        value='Other'
                                        checked={isAdmittedFormOther}
                                        onChange={() =>
                                            updatePersonalData(
                                                'admittedForm',
                                                'Other:'
                                            )
                                        }
                                    />
                                    <TextInput
                                        placeHolder='Other'
                                        value={admittedFormOther}
                                        onChange={handleAdmittedFormOtherChange}
                                        disabled={!isAdmittedFormOther}
                                        style={'w-[89px]'}
                                    ></TextInput>
                                </div>
                            </div>
                        </div>
                        <div className='ml-[12px] mt-[12px] flex w-[750px] flex-col gap-[12px]'>
                            <TextInput
                                placeHolder='Diagnosis'
                                value={personalData?.diagnosis}
                                onChange={(val: string) =>
                                    updatePersonalData('diagnosis', val)
                                }
                            ></TextInput>
                            <TextInput
                                placeHolder='Chief Complaint'
                                value={personalData?.chiefComplaint}
                                onChange={(val: string) =>
                                    updatePersonalData('chiefComplaint', val)
                                }
                            ></TextInput>
                            <TextInput
                                placeHolder='Past Illness'
                                value={personalData?.pastIllness}
                                onChange={(val: string) =>
                                    updatePersonalData('pastIllness', val)
                                }
                            ></TextInput>
                            <TextInput
                                placeHolder='Past Illness History'
                                value={personalData?.pastIllnessHistory}
                                onChange={(val: string) =>
                                    updatePersonalData(
                                        'pastIllnessHistory',
                                        val
                                    )
                                }
                            ></TextInput>
                            <TextInput
                                placeHolder='Family Illness History'
                                value={personalData?.familyIllnessHistory}
                                onChange={(val: string) =>
                                    updatePersonalData(
                                        'familyIllnessHistory',
                                        val
                                    )
                                }
                            ></TextInput>
                            <div className='flex flex-row gap-[5px]'>
                                <ArrayInput
                                    placeHolder='Allergies (Drug, Food, Others)'
                                    value={allergies}
                                    onChange={setAllergies}
                                    style={'w-[234px]'}
                                ></ArrayInput>
                                <ArrayInput
                                    placeHolder='Reactions'
                                    value={reactions}
                                    onChange={setReactions}
                                    style={'w-[234px]'}
                                ></ArrayInput>
                            </div>
                        </div>
                        <div className='absolute right-[10px] top-[100px] h-[174px] w-[201px] rounded-[5px] border-[1px] border-[#b7b1b1] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]'>
                            <div className='ml-[10px] mt-[10px]'>
                                Vital Sign:
                                <div className='ml-[7px] mt-[8px] flex flex-col gap-[15px]'>
                                    <DoubleInput
                                        placeHolder='Temp'
                                        value={temp}
                                        onChange={setTemp}
                                        style='w-[82px]'
                                        unit='C'
                                    ></DoubleInput>
                                    <NumberInput
                                        placeHolder='HR'
                                        value={hr}
                                        onChange={setHr}
                                        style='w-[82px]'
                                        unit='/ min'
                                    ></NumberInput>
                                    <NumberInput
                                        placeHolder='Resp'
                                        value={resp}
                                        onChange={setResp}
                                        style='w-[82px]'
                                        unit='/ min'
                                    ></NumberInput>
                                    <div className='flex flex-row'>
                                        <NumberInput
                                            placeHolder='BP'
                                            value={bPSystol}
                                            onChange={setBPSystol}
                                            style='w-[38px]'
                                        ></NumberInput>
                                        /
                                        <NumberInput
                                            value={bPDiastol}
                                            onChange={setBPDiastol}
                                            style='ml-[4px] w-[38px]'
                                            unit='mmHg'
                                        ></NumberInput>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardHolder>
                <div className='mt-[24px] grid grid-cols-3 gap-[11px]'>
                    <CardHolder
                        path='smoke'
                        type='NurseAssessmentForm'
                        name='Tobacco'
                    >
                        <div className='ml-[24px] mt-[3px] flex w-[286px] flex-col gap-[14px]'>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='None'
                                    name='tobacco'
                                    value='None'
                                    checked={tobacco === 'None'}
                                    onChange={() => setTobacco('None')}
                                />
                                <p className='ml-[6px] mr-[20px]'>None</p>
                            </div>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='Quit'
                                    name='tobacco'
                                    value='Quit'
                                    checked={tobacco === 'Quit'}
                                    onChange={() => setTobacco('Quit')}
                                />
                                <div className='ml-[6px]'>
                                    <TextInput
                                        placeHolder='Quit'
                                        value={tobaccoQuit}
                                        onChange={setTobaccoQuit}
                                        disabled={tobacco !== 'Quit'}
                                        style={'w-[186px]'}
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Smoked Duration'
                                    value={tobaccoSmokedDuration}
                                    onChange={setTobaccoSmokedDuration}
                                    disabled={tobacco !== 'Quit'}
                                    style={'w-[117px]'}
                                ></TextInput>
                            </div>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Quit Duration'
                                    value={tobaccoQuitDuration}
                                    onChange={setTobaccoQuitDuration}
                                    disabled={tobacco !== 'Quit'}
                                    style={'w-[144px]'}
                                ></TextInput>
                            </div>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='Continuous'
                                    name='tobacco'
                                    value='Continuous'
                                    checked={tobacco === 'Continuous'}
                                    onChange={() => setTobacco('Continuous')}
                                />
                                <div className='ml-[6px]'>
                                    <TextInput
                                        placeHolder='Continuous'
                                        value={tobaccoContinuous}
                                        onChange={setTobaccoContinuous}
                                        disabled={tobacco !== 'Continuous'}
                                        style={'w-[136px]'}
                                    ></TextInput>
                                </div>
                            </div>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='alcohol'
                        type='NurseAssessmentForm'
                        name='Alcohol'
                    >
                        <div className='ml-[24px] mt-[3px] flex w-[286px] flex-col gap-[14px]'>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='None'
                                    name='alcohol'
                                    value='None'
                                    checked={alcohol === 'None'}
                                    onChange={() => setAlcohol('None')}
                                />
                                <p className='ml-[6px] mr-[20px]'>None</p>
                            </div>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='Quit'
                                    name='alcohol'
                                    value='Quit'
                                    checked={alcohol === 'Quit'}
                                    onChange={() => setAlcohol('Quit')}
                                />
                                <div className='ml-[6px]'>
                                    <TextInput
                                        placeHolder='Quit'
                                        value={alcoholQuit}
                                        onChange={setAlcoholQuit}
                                        disabled={alcohol !== 'Quit'}
                                        style={'w-[186px]'}
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Used Duration'
                                    value={alcoholSmokedDuration}
                                    onChange={setAlcoholSmokedDuration}
                                    disabled={alcohol !== 'Quit'}
                                    style={'w-[136px]'}
                                ></TextInput>
                            </div>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Quit Duration'
                                    value={alcoholQuitDuration}
                                    onChange={setAlcoholQuitDuration}
                                    disabled={alcohol !== 'Quit'}
                                    style={'w-[144px]'}
                                ></TextInput>
                            </div>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='Continuous'
                                    name='alcohol'
                                    value='Continuous'
                                    checked={alcohol === 'Continuous'}
                                    onChange={() => setAlcohol('Continuous')}
                                />
                                <div className='ml-[6px]'>
                                    <TextInput
                                        placeHolder='Continuous'
                                        value={alcoholContinuous}
                                        onChange={setAlcoholContinuous}
                                        disabled={alcohol !== 'Continuous'}
                                        style={'w-[136px]'}
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Frequency'
                                    value={alcoholContinuousFrequency}
                                    onChange={setAlcoholContinuousFrequency}
                                    disabled={alcohol !== 'Continuous'}
                                    style={'w-[117px]'}
                                ></TextInput>
                                /day
                            </div>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Duration'
                                    value={alcoholContinuousDuration}
                                    onChange={setAlcoholContinuousDuration}
                                    disabled={alcohol !== 'Continuous'}
                                    style={'w-[176px]'}
                                ></TextInput>
                            </div>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='medicine'
                        type='NurseAssessmentForm'
                        name='Other Drug/ substances'
                    >
                        <div className='ml-[24px] mt-[3px] flex w-[286px] flex-col gap-[14px]'>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='None'
                                    name='drug'
                                    value='None'
                                    checked={drug === 'None'}
                                    onChange={() => setDrug('None')}
                                />
                                <p className='ml-[6px] mr-[20px]'>None</p>
                            </div>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='Quit'
                                    name='drug'
                                    value='Quit'
                                    checked={drug === 'Quit'}
                                    onChange={() => setDrug('Quit')}
                                />
                                <div className='ml-[6px]'>
                                    <TextInput
                                        placeHolder='Quit'
                                        value={drugQuit}
                                        onChange={setDrugQuit}
                                        disabled={drug !== 'Quit'}
                                        style={'w-[186px]'}
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Used Duration'
                                    value={drugSmokedDuration}
                                    onChange={setDrugSmokedDuration}
                                    disabled={drug !== 'Quit'}
                                    style={'w-[136px]'}
                                ></TextInput>
                            </div>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Quit Duration'
                                    value={drugQuitDuration}
                                    onChange={setDrugQuitDuration}
                                    disabled={drug !== 'Quit'}
                                    style={'w-[144px]'}
                                ></TextInput>
                            </div>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='Continuous'
                                    name='drug'
                                    value='Continuous'
                                    checked={drug === 'Continuous'}
                                    onChange={() => setDrug('Continuous')}
                                />
                                <div className='ml-[6px]'>
                                    <TextInput
                                        placeHolder='Continuous'
                                        value={drugContinuous}
                                        onChange={setDrugContinuous}
                                        disabled={drug !== 'Continuous'}
                                        style={'w-[136px]'}
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Frequency'
                                    value={drugContinuousFrequency}
                                    onChange={setDrugContinuousFrequency}
                                    disabled={drug !== 'Continuous'}
                                    style={'w-[117px]'}
                                ></TextInput>
                                /day
                            </div>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Duration'
                                    value={drugContinuousDuration}
                                    onChange={setDrugContinuousDuration}
                                    disabled={drug !== 'Continuous'}
                                    style={'w-[176px]'}
                                ></TextInput>
                            </div>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='exercise'
                        type='NurseAssessmentForm'
                        name='Exercise'
                    >
                        <div className='ml-[24px] mt-[3px] flex w-[286px] flex-col gap-[14px]'>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='None'
                                    name='exercise'
                                    value='None'
                                    checked={exercise === 'None'}
                                    onChange={() => setExercise('None')}
                                />
                                <p className='ml-[6px] mr-[20px]'>None</p>
                            </div>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='Always'
                                    name='exercise'
                                    value='Always'
                                    checked={exercise === 'Always'}
                                    onChange={() => setExercise('Always')}
                                />
                                <p className='ml-[6px] mr-[20px]'>Always</p>
                            </div>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='Sometime'
                                    name='exercise'
                                    value='Sometime'
                                    checked={exercise === 'Sometime'}
                                    onChange={() => setExercise('Sometime')}
                                />
                                <p className='ml-[6px] mr-[20px]'>Sometime</p>
                            </div>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Frequency'
                                    value={exerciseFrequency}
                                    onChange={setExerciseFrequency}
                                    disabled={exercise !== 'Sometime'}
                                    style={'w-[117px]'}
                                ></TextInput>
                                /day
                            </div>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='sleep'
                        type='NurseAssessmentForm'
                        name='Sleep/ Rest'
                    >
                        <div className='ml-[24px] mt-[3px] flex w-[286px] flex-col gap-[14px]'>
                            <div className='flex flex-row'>
                                <NumberInput
                                    placeHolder='Sleep/ Rest'
                                    value={sleepHour}
                                    onChange={setSleepHour}
                                    style={'w-[96px]'}
                                ></NumberInput>
                                hr/ day
                            </div>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='Enough'
                                    name='Sleep'
                                    value='Enough'
                                    checked={sleep === 'Enough'}
                                    onChange={() => setSleep('Enough')}
                                />
                                <p className='ml-[6px] mr-[20px]'>Enough</p>
                            </div>
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='Not Enough'
                                    name='Sleep'
                                    value='Not Enough'
                                    checked={sleep === 'Not Enough'}
                                    onChange={() => setSleep('Not Enough')}
                                />
                                <p className='ml-[6px] mr-[20px]'>Not Enough</p>
                            </div>
                            What help in the past?
                            <TextInput
                                value={sleepHelp}
                                onChange={setSleepHelp}
                                style={'w-[239px]'}
                            ></TextInput>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='information'
                        type='NurseAssessmentForm'
                        name='Information'
                    >
                        <div className='ml-[24px] mt-[3px] flex w-[286px] flex-col gap-[14px]'>
                            Information Provided by:
                            <div className='flex flex-row'>
                                <input
                                    type='radio'
                                    id='Patient'
                                    name='information'
                                    value='Patient'
                                    checked={informationProvider === 'Patient'}
                                    onChange={() =>
                                        setInformationProvider('Patient')
                                    }
                                />
                                <p className='ml-[6px] mr-[24px]'>Patient</p>
                                <input
                                    type='radio'
                                    id='Other'
                                    name='information'
                                    value='Other'
                                    checked={informationProvider === 'Other'}
                                    onChange={() =>
                                        setInformationProvider('Other')
                                    }
                                />
                                <div className='ml-[6px]'>
                                    <TextInput
                                        placeHolder='Other'
                                        value={informationProviderOther}
                                        onChange={setInformationProviderOther}
                                        disabled={
                                            informationProvider !== 'Other'
                                        }
                                        style={'w-[110px]'}
                                    ></TextInput>
                                </div>
                            </div>
                            <TextInput
                                placeHolder='Emergency Notify: Name'
                                value={emergencyNotify}
                                onChange={setEmergencyNotify}
                                style={'w-[91px]'}
                            ></TextInput>
                            <TextInput
                                placeHolder='Relationship'
                                value={relationship}
                                onChange={setRelationship}
                                style={'w-[176px]'}
                            ></TextInput>
                            <TextInput
                                placeHolder='Phone #'
                                value={phone}
                                onChange={setPhone}
                                style={'w-[205px]'}
                            ></TextInput>
                        </div>
                    </CardHolder>
                </div>
            </div>
            <div className='mb-[23px] mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
