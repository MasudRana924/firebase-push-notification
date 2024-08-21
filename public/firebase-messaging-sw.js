importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCq367KUtg1wON9epeA-pWufWRCPOTl72I",
    authDomain: "quickpay-bbe0a.firebaseapp.com",
    projectId: "quickpay-bbe0a",
    storageBucket: "quickpay-bbe0a.appspot.com",
    messagingSenderId: "648647731318",
    appId: "1:648647731318:web:a4d147e28ea20e32f6d757",
    measurementId: "G-57SXE2Q4QJ"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message', payload);
});
