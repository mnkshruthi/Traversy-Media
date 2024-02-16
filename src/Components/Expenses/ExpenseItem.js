import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

export default function ExpenseItem(props) {
  return (
    <Card className="bg-slate-600 border-0 p-4 flex justify-between text-white m-3 mt-5">
      <ExpenseDate date={new Date(props.date)} />
      <div className=" flex flex-sm-column ">
        <div className="my-auto text-2xl  ">{props.title}</div>
        <div className="my-auto border-2 bg-fuchsia-700 p-2 rounded-xl">
          {props.amount}
        </div>
      </div>
    </Card>
  );
}

// import React from "react";
// import ExpenseDate from "./ExpenseDate";

// export default function ExpenseItem(props) {
//   return (
//     <div className="bg-slate-600 border-0 p-4 flex justify-between text-white rounded-3xl m-3 mt-5">
//       <ExpenseDate date={new Date(props.date)} />

//       <div className="my-auto text-2xl expense-title">{props.title}</div>
//       <div className="my-auto border-2 bg-fuchsia-700 p-2 rounded-xl">
//         {props.amount}
//       </div>
//     </div>
//   );
// }
//<div className="bg-slate-600 border-0 p-8 flex justify-between text-white rounded-3xl m-3 mt-5">
//  <div>{props.date}</div>
//  <div className="">{props.title}</div>
//  <div>{props.amount}</div>
//</div>;
