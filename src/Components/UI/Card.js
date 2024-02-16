import React from "react";

export default function Card({ expenses }) {
  // Add any filtering logic or conditional rendering here (if needed)

  return (
    <div>
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <div className="expense-date">{expense.date.toDateString()}</div>
        </div>
      ))}
    </div>
  );
}
