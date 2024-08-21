import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCq367KUtg1wON9epeA-pWufWRCPOTl72I",
    authDomain: "quickpay-bbe0a.firebaseapp.com",
    projectId: "quickpay-bbe0a",
    storageBucket: "quickpay-bbe0a.appspot.com",
    messagingSenderId: "648647731318",
    appId: "1:648647731318:web:a4d147e28ea20e32f6d757",
    measurementId: "G-57SXE2Q4QJ"
};

const vapidKey = "BAy5qhnVpKVrg8tCGJvumucg-773bKFJtrokhk1CESS22wwxhwBKq5R1P007Q82lyckpG99T9fL6Avs5Z1BV_ZI";

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = getMessaging(app);

export const requestFCMToken = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            const token = await getToken(messaging, { vapidKey });
            return token;
        } else {
            throw new Error("Notification permission not granted");
        }
    } catch (err) {
        console.error("Error getting FCM token: ", err);
        throw err;
    }
};
