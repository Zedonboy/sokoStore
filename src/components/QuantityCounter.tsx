import React from "react";
interface IProp{
  onInc ?: (v : number) => void
  onDec ?: (v : number) => void
  value : number
}
export default function QuantityCounter(props : IProp) {
  return (
    <span className="flex w-24 rounded p-0 border-2 border-blue-600">
      <button onClick={e => {
        if(props.onDec) props.onDec(props.value)
      }} className="w-1/3 bg-blue-200 text-blue-600 text-center">-</button>
      <span className="w-1/3 text-center"><p>{props.value}</p></span>
      <button onClick={e => {
        if(props.onInc) props.onInc(props.value)
      }} className="w-1/3 bg-blue-200 text-blue-600 text-center">+</button>
    </span>
  );
}
