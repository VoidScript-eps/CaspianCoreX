import { db } from "../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Сохранение одной транзакции
export async function saveTransaction(userId, data) {
  return await addDoc(collection(db, "transactions"), {
    userId,
    ...data,
    createdAt: Date.now(),
  });
}

// Получение всех транзакций пользователя
export async function getUserTransactions(userId) {
  const q = query(collection(db, "transactions"), where("userId", "==", userId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
