import React from 'react'

interface IProp {
    discount : string | number
}
export default function DiscountView(props : IProp){
    return (
        <span className="bg-red-500 p-1 text-xs text-white rounded">-{props.discount}%</span>
    )
}
