import Card from "./Card";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <Card className="flex flex-col p-2 border-2 bg-slate-900 rounded-xl border-gray-50">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </Card>
  );
}

export default ExpenseDate;
