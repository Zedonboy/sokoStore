import React, { useState } from 'react'

interface IProp{
    imgArray : string[]
    imageHeight : string
}
export default function ImgSlider(props : IProp) {
    let [imgIndex, setImgIndex] = useState(0)
    return (
        <section className="w-full flex flex-col">
            <img alt="product_name" style={{
                    height: `${props.imageHeight}`
            }} className="w-full rounded-lg" src={props.imgArray[imgIndex]}/>
            <section className="mt-2 flex justify-center">
                {props.imgArray.map((v, i) => (
                    <button onClick={e => {
                        setImgIndex(i)
                    }} className={`m-1 rounded-full w-2 h-2 bg-blue-200 ${i === imgIndex ? "dot-active" : null}`}></button>
                ))}   
            </section>
        </section>
    )
}