import React from 'react'
import { useHistory } from 'react-router-dom'
import PrimaryBtn from '../components/PrimaryBtn'
import SecondaryBtn from '../components/SecondaryBtn'

export default function OrderConfirmedPage() {
    let history = useHistory()
    return (
        <main style={{
            height: "60vh"
        }} className="flex w-full justify-center items-center">
            <div className="flex w-1/3 flex-col justify-center">
            <i className="far text-center fa-5x text-green-400 fa-check-circle"></i>
            <p className="font-semibold text-center">Thank You!</p>
            <p className="font-semibold text-center">Your Order has been placed successfully</p>
            <p className="text-xs text-gray-600 text-center">You will receive a confirmation message as soon as the order is accepted</p>
            <p className="mt-8 text-xs text-gray-600 text-center font-medium">Order Number: john-367e</p>
            <div className="flex">
                <span className="w-1/2 p-4">
                    <PrimaryBtn onClick={e => {
                        history.push("/orderDetails")
                    }}>Track Order</PrimaryBtn>
                </span>
                <span className="w-1/2 p-4">
                    <SecondaryBtn onClick={e => {
                        history.go(history.length - 1)
                    }}>Continue Shopping</SecondaryBtn>
                </span>
            </div>
            </div>
        </main>
    )
}