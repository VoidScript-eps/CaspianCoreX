import { saveTransaction, getUserTransactions } from "../api/finance";
import { useEffect, useState } from "react";

export default function FinanceDemo() {
  const [transactions, setTransactions] = useState([]);

  async function addExample() {
    await saveTransaction("user123", {
      type: "expense",
      category: "Food",
      amount: 12.5,
    });

    loadData();
  }

  async function loadData() {
    const data = await getUserTransactions("user123");
    setTransactions(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <button onClick={addExample}>Добавить расход</button>

      <ul>
        {transactions.map(t => (
          <li key={t.id}>
            {t.category}: {t.amount} AZN
          </li>
        ))}
      </ul>
    </div>
  );
}
