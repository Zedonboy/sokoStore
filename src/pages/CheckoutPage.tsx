import { FormControlLabel, Radio } from "@material-ui/core";
import React, { useState } from "react";
import AddressView from "../components/AddressView";
import DialogBox from "../components/Dialog";
import SecondaryBtn from "../components/SecondaryBtn";
import BagSubSection from "./BagSection";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  //@ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CheckoutPage() {
  let [authDialog, setAuthDialog] = useState(false);
  let [code, setCode] = useState("")
  return (
    <main className="px-4 md:px-36 mt-4 flex">
      {authDialog ? (
        <DialogBox
          onClose={(e) => {
            setAuthDialog(false);
          }}
          TransitionComponent={Transition}
          keepMounted
          open={authDialog}
          title="Edit Address"
        >
          <form className="w-full md:w-96">
            <label className="block font-light text-sm">
              <span className="text-gray-700">Auth Code</span>
              <input
                value={code}
                onChange={(e) => {
                  setCode(e.target.value)
                }}
                name="name"
                type="text"
                placeholder="4 Digit code"
              />
            </label>
            <div className="flex justify-center mt-4">
              <span className="p-0.5">
                <SecondaryBtn
                  onClick={(e) => {
                    setAuthDialog(false)
                  }}
                >
                  Verify
                </SecondaryBtn>
              </span>
            </div>
          </form>
        </DialogBox>
      ) : null}
      <section className="w-full md:w-2/3 flex flex-col">
        <section className="flex">
          <span className="w-8 h-8 bg-blue-500 rounded-full text-white flex justify-center items-center text-center">
            1
          </span>
          <section className="ml-8">
            <p className="font-semibold">Account</p>
            <p className="text-sm text-gray-400">
              To place your order, login your phone number
            </p>
            <p className="text-sm text-gray-600 mt-4">Mobile Number</p>
            <section className="flex">
              <input
                type="tel"
                placeholder="+234672324"
                className="p-2 border-2 border-blue-500 rounded-md w-full md:w-5/6"
              />
              <div className="w-full ml-2 md:w-36">
                <SecondaryBtn onClick={e => {
                  setAuthDialog(true)
                }}>Login</SecondaryBtn>
              </div>
            </section>
          </section>
        </section>
        <section className="flex mt-8">
          <span className="w-8 h-8 bg-blue-500 rounded-full text-white flex justify-center items-center text-center">
            1
          </span>
          <section className="ml-8">
            <p className="font-semibold">Delivery Address</p>
            <p className="text-sm text-gray-400">
              Select your delivery address
            </p>
            <section className="flex">
              <AddressView
                name="Declan Nnadozie"
                active
                phone="0999999999"
                address="Heaven Street"
              />
            </section>
          </section>
        </section>
        <section className="flex mt-8">
          <span className="w-8 h-8 bg-blue-500 rounded-full text-white flex justify-center items-center text-center">
            1
          </span>
          <section className="ml-8">
            <p className="font-semibold">Payment</p>
            <p className="text-sm text-gray-400">Select your payment method</p>
            <section className="flex flex-col">
            <FormControlLabel value={true} control={<Radio />} label="Cash on Delivery" />
              <SecondaryBtn>Checkout</SecondaryBtn>
            </section>
          </section>
        </section>
      </section>
      <section className="w-1/3 hidden border-l md:block">
        <section className="p-2 flex">
          <h1 className="font-semibold">Bag</h1>
          <span className="p-0.5 bg-blue-800 ml-2 text-white rounded">20</span>
        </section>
        <BagSubSection/>
      </section>
    </main>
  );
}
