import React from 'react'
import { IBagItem } from '../types'
import QuantityCounter from './QuantityCounter'
interface IProp {
    item : IBagItem
    onInc: (v : number) => void
    onDec : (v : number) => void
}
export default function BagItem(props : IProp) {
    return (
        <section className="w-full mt-2 relative">
            <p className="font-medium">{props.item.product.name}</p>
            <p className="text-xs text-gray-500 mt-1">Per piece</p>
            <p className="font-light text-xl text-gray-500">{props.item.cost}</p>
            <p className="font-light text-sm line-through text-gray-500">{props.item.cost}</p>
            <span className="absolute right-0 bottom-0 mb-2 mr-2">
                <QuantityCounter onInc={props.onInc} onDec={props.onDec} value={props.item.qty}/>
            </span>
        </section>
    )
}