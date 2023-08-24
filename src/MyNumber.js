import React from "react";
import { NumberContext } from "./context/numberContext";
import { useContext } from "react";
const MyNumber = () => {
  const { number } = useContext(NumberContext);
  return <div>{number}</div>;
};

export default MyNumber;
