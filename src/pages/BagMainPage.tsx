import React from "react";
import BagItem from "../components/BagItem";
import SecondaryBtn from "../components/SecondaryBtn";
import {useHistory} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { updateItemInBag, clearAllBag } from "../store/slices/bag.slice";
import { Button } from "@material-ui/core";

export default function BagMainPage() {
  let history = useHistory()
  //@ts-ignore
  let bagItems = useSelector((state) => state.bag.value);
  let dispatch = useDispatch()
  return (
    <main className="px-4 md:px-36 mt-4 flex">
      <section className="w-0 md:w-1/3"></section>
      <section className="w-full md:w-1/3">
      <div className="flex mb-4"><Button size="small" disabled={bagItems.length === 0} onClick={e => {
        dispatch(clearAllBag(null))
      }} variant="outlined">Clear all</Button>
      <div className="ml-4">
      <Button size="small" disabled={bagItems.length === 0} onClick={e => {
        history.push("/checkout")
      }} variant="outlined">Checkout</Button>
      </div></div>
        {(function () {
          if (bagItems.length === 0)
            return (
              <div className="flex w-full flex-col mt-4 justify-center items-center">
                <i className="fas text-gray-500 fa-frown fa-7x" />
                <p className="mt-4 font-semibold">Its empty here</p>
                <p className="text-base font-normal text-gray-600">
                  Start shopping to add item to bag
                </p>
                <div className="mt-4">
                <SecondaryBtn onClick={e => {
                  history.push("/")
                }}>Back to homepage</SecondaryBtn>
                </div>
              </div>
            );
          else return bagItems.map((v, i) => (
              <BagItem item={v} onDec={num => {
                dispatch(updateItemInBag({index : i, data : {...v, qty : Math.max(0, (num - 1))}}))
              }} onInc={num => {
                dispatch(updateItemInBag({index : i, data : {...v, qty : num + 1}}))
              }}></BagItem>
          ));
        })()}
      </section>
      <section className="w-0 md:w-1/3"></section>
    </main>
  );
}
