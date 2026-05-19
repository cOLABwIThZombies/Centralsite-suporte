importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBDS_DeQ47wTFaXzTW8upo4-7L-kmcgdns",
  authDomain: "central-suporte-84753.firebaseapp.com",
  projectId: "central-suporte-84753",
  storageBucket: "central-suporte-84753.firebasestorage.app",
  messagingSenderId: "227157708169",
  appId: "1:227157708169:web:8c611db486e120775fa558"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'Central de Suporte', {
    body: body || '',
    icon: icon || '/icon.png',
    badge: '/icon.png',
    data: payload.data || {}
  });
});
