// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
// import { onAuthStateChanged, User } from 'firebase/auth';
// import { auth } from '../config/firebase'; // Adjust the import based on your firebase config file

// const useAuth = () => {
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState(true);
//     const router = useRouter();

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user);
//             } else {
//                 setUser(null);

//                 // Only navigate if on the client
//                 if (typeof window !== 'undefined') {
//                     router.push('/pages/login-page'); // Redirect to login if not authenticated
//                 }
//             }
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }, [router]);

//     return { user, loading };
// };

// export default useAuth;
