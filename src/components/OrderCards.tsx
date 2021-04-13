import React from "react";
import { IOrder } from "../types";

interface IProp {
  order: IOrder;
}
export default function OrderCard(props: IProp) {
  return (
    <section className="w-full p-4 flex flex-col border-2 rounded-lg">
      <div className="flex">
        {props.order.status === "delivered" ? (
          <i className="fas fa-3x text-gray-600 fa-store"></i>
        ) : (
          <i className="far fa-3x text-red-600 fa-dot-circle"></i>
        )}

        <div className="flex flex-col ml-4">
          {props.order.status === "delivered" ? (
            <p className="font-semibold">{props.order.house}</p>
          ) : (
            <p className="font-semibold">Target</p>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex justify-between items-center w-full">
          <p className="font-medium text-sm">Order #1234</p>
          <p className="text-sm font-medium text-green-400">UGX 230</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-gray-400 text-sm">3 items</p>
          <p className="text-gray-400 text-sm">11/34/2050, 11:67pm</p>
        </div>
      </div>
      <div className="mt-4 flex">
        {props.order.status === "delivered" ? (
          <p className="font-medium text-blue-600">
            <i className="fas fa-circle"></i> {props.order.status}
          </p>
        ) : (
          <p className="font-medium text-yellow-400">
            <i className="fas fa-circle"></i> {props.order.status}
          </p>
        )}
      </div>
    </section>
  );
}
