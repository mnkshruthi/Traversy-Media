import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

export default function Expenses(props) {
  return (
    <Card className="bg-slate-900 w-1/2 m-auto p-3 ">
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date.toDateString()}
        />
      ))}
    </Card>
  );
}
//<div>
//  {props.expenses.map((item) => (
//    <ExpenseItem
//      {item.id}
//      {item.title}
//      {item.amount}
//      {item.date.toDateString()}
//    />
// ))}
//</div>;
