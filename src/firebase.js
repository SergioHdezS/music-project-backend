/* CONFIGURACION FIREBASE */
const { initializeApp } = require("firebase/app");
const firebaseConfig = {
    apiKey: "AIzaSyBlPoYgxCkaZ2Rsk2wYSKRMgTxu56YgYhc",
    authDomain: "prueba-frontend-2023-df341.firebaseapp.com",
    projectId: "prueba-frontend-2023-df341",
    storageBucket: "prueba-frontend-2023-df341.appspot.com",
    messagingSenderId: "471006348969",
    appId: "1:471006348969:web:e55d542a05ea7772b3cbb8"
};
const app = initializeApp(firebaseConfig);

/* CONFIGURACION FIREBASE-ADMIN */
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "prueba-frontend-2023-df341.appspot.com"
});

/* EXPORTAR */
module.exports = {
    app,
    admin
};