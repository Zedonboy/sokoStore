import React from "react";

interface IProp {
  active?: boolean | undefined;
  name: string;
  phone: string;
  address: string;
}
//@ts-ignore
export default function AddressView(props: IProp) {
  return (
    <button
      className={`w-full relative text-left rounded-md m-2 p-2 border-2 ${
        props.active ? "border-blue-600" : "border-gray-500"
      }`}
    >
      <p className="font-semibold">{props.name}</p>
      <p className="text-sm text-gray-400">{props.address}</p>
      <p className="text-sm text-gray-600 mt-4">{props.phone}</p>
      {props.active ? (
          <span className="text-white absolute top-0 right-0 -mt-2 -mr-2 w-6 h-6 flex justify-center items-center rounded-full bg-blue-600"><i className="fas text-xs fa-check"></i></span>
      ) : null}
    </button>
  );
}
