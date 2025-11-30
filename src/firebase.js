// Инициализация Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_APP",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "123456",
  appId: "APP_ID",
};

// Запуск приложения
const app = initializeApp(firebaseConfig);

// Экспорт базы данных
export const db = getFirestore(app);
