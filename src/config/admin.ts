import admin from 'firebase-admin';

const serviceAccountJson = process.env.FIREBASE_CREDENTIALS_JSON;

if (!serviceAccountJson) {
    throw new Error(
        'FIREBASE_CREDENTIALS_JSON environment variable is not set'
    );
}

const serviceAccount = JSON.parse(serviceAccountJson);

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

export default admin;
