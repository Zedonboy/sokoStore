import React from "react";
import DiscountView from "../components/DiscountView";
import { IProduct } from "../types";
interface ItemProp {
  product: IProduct;
}

function OrderDetailsItems(props: ItemProp) {
  return (
    <div className="h-28 p-1 flex relative dark:bg-gray-800">
      <figure className="h-full w-24 relative">
        <img
          className="h-full rounded w-24 bg-gray-200"
          src={props.product.photo}
          alt={props.product.name}
        />
        {(function () {
          if (props.product.discount) {
            return (
              <span className=" right-0 bottom-0 absolute">
                <DiscountView discount={props.product.discount} />
              </span>
            );
          } else return null;
        })()}
      </figure>
      <div className="flex w-full ml-4 h-full flex-col">
        <h1 className="font-light text-xl text-gray-500">
          {props.product.name}
        </h1>
        <div className="flex items-center">
          <span className="font-light text-gray-500">Size&nbsp;</span>
          <span className="font-light">Medium</span>&nbsp;&nbsp;&nbsp;
          <span className="font-light text-gray-500">Color</span>&nbsp;&nbsp;
          <div className="rounded-full h-4 w-4 bg-red-600"></div>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="rounded bg-gray-200 font-light p-0.5">X1</p>
          <p className="text-sm font-normal text-gray-800">
            {props.product.currency} {props.product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
export default function OrderDetails() {
  return (
    <main className="p-4 md:px-36 flex">
      <section className="w-0 md:w-1/6"></section>
      <section className="w-full p-4 md:w-4/6 border flex flex-col border-gray-600 mt-8 rounded-lg">
        <div className="border-b p-4 flex">
          <i className="far fa-3x text-red-600 fa-dot-circle"></i>
          <div className="flex flex-col ml-4">
            <p className="font-semibold">Target</p>
            <p className="text-sm text-gray-600">
              25/03/2020 | 4/60pm | 3 items | UGX 89
            </p>
          </div>
        </div>
        <div className="border-b p-4 flex">
          <i className="fas fa-3x text-green-500 fa-check-circle"></i>
          <div className="flex flex-col ml-4">
            <p className="font-semibold">Order Confirmed</p>
            <p className="text-sm text-gray-600">25/03/2020 | 4/60pm</p>
          </div>
        </div>
        <div className="border-b p-4 flex">
          <i className="fas fa-3x text-green-500 fa-check-circle"></i>
          <div className="flex flex-col ml-4">
            <p className="font-semibold">Shipped</p>
            <p className="text-sm text-gray-600">25/03/2020 | 4/60pm</p>
          </div>
        </div>
        <div className="border-b p-4 flex">
          <i className="fas fa-3x text-gray-200 fa-check-circle"></i>
          <div className="flex flex-col ml-4">
            <p className="font-semibold">Delivered</p>
            <p className="text-sm text-gray-600">25/03/2020 | 4/60pm</p>
          </div>
        </div>

        <section className="mt-8 border-b">
          <OrderDetailsItems
            product={{
              name: "Boxers",
              price: 300,
              photo: "https://picsum.photos/200/300",
              currency: "UGX",
            }}
          />
          <OrderDetailsItems
            product={{
              name: "Boxers",
              price: 300,
              photo: "https://picsum.photos/200/300",
              currency: "UGX",
            }}
          />
        </section>
        <section className="border-b flex py-4 flex-col">
          <div className="flex justify-between items-center w-full">
            <p className="font-light">Subtotal</p>
            <p className="text-sm font-normal text-gray-800">UGX 4000</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="font-light">Delivery</p>
            <p className="text-sm font-semibold text-green-400">Free</p>
          </div>
          <div className="border-dashed border-b flex flex-col border-t py-4">
            <div className="flex justify-between items-center w-full">
              <p className="font-bold text-sm">Total</p>
              <p className="text-sm font-normal text-gray-800">UGX 4000</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="font-light text-gray-500 text-xs italic ">
                Inclusive of all taxes
              </p>
            </div>
          </div>
          <p className="font-bold text-green-600 text-sm mt-2">You are about to save UGX 34,000</p>
        </section>
        <section className="py-4">
        <p className="font-light text-gray-500 text-xl">Your Delivery Details</p>
          <p className="font-semibold mt-2">Shrey Khan</p>
          <p className="font-medium text-xm">Cash on delivery</p>
          <p className="text-sm text-gray-600 mt-4">+920974837543</p>
          <p className="text-sm text-gray-400">Lekki, Lagos</p>
        </section>
      </section>
      <section className="w-0 md:w-1/6"></section>
    </main>
  );
}
