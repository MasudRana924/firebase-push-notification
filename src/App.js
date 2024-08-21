import './App.css';
import { useEffect, useState } from 'react';
import { requestFCMToken } from './firebase/firebase';

function App() {
    const [fcmToken, setFcmToken] = useState(null);

    useEffect(() => {
        const fetchFCMToken = async () => {
            try {
                const token = await requestFCMToken();
                setFcmToken(token);
            } catch (err) {
                console.error('Error getting FCM token: ', err);
            }
        };

        fetchFCMToken();
    }, []);

    return (
        <div className="App">
            {fcmToken ? <p>FCM Token: {fcmToken}</p> : <p>Loading FCM Token...</p>}
        </div>
    );
}

export default App;
