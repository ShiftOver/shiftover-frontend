import Image from 'next/image';
import Example from './components/Example';
import PatientCard from './components/PatientCard';
export default function Home() {
    return (
        <main>
            <PatientCard></PatientCard>
        </main>
    );
}
