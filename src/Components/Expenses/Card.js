import React from "react";

export default function Card(props) {
  const classes = "rounded-xl " + props.className;
  return <div className={classes}>{props.children}</div>;
}
//const classes = <class-name> + props.className;
//<class-name> - in case u are using css styling
