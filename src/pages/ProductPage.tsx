import React from 'react'
import DiscountView from '../components/DiscountView'
import ImgSlider from '../components/ImgSlider'
import PrimaryBtn from '../components/PrimaryBtn'
import QuantityCounter from '../components/QuantityCounter'
import RelatedProductItem from '../components/RelatedProductItem'
import SecondaryBtn from '../components/SecondaryBtn'

export default function ProductPage() {
    return (
        <main className="px-4 md:px-36 mt-4 flex flex-col">
            <section className="flex flex-wrap">
                <div className="w-full md:w-1/3">
                <ImgSlider imgArray={
                    ["https://picsum.photos/200/300",
                    "https://picsum.photos/200/300",
                    "https://picsum.photos/200/300"]
                } imageHeight="300px"/>
                </div>
                <div className="w-full md:w-2/3 p-4 flex flex-col">
                    <h1 className="font-semibold">Lorem ipsum dolor sit</h1>
                    <h1 className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi officia ducimus quibusdam molestiae, dolores mollitia nostrum magnam ipsum culpa animi quidem veniam placeat! Earum doloremque reprehenderit eaque aliquid illum recusandae.</h1>
                    <p className="text-xl mt-4">UGX 322<span className="ml-4"><DiscountView discount="10"/></span></p>
                    <span className="mt-4"><QuantityCounter value={1}/></span>
                    <div className="flex mt-8 flex-wrap">
                        <div className="w-full md:w-1/2 px-4 py-2">
                            <PrimaryBtn>Add to bag</PrimaryBtn>
                        </div>
                        <div className="w-full md:w-1/2 px-4 py-2">
                            <SecondaryBtn onClick={e => {
                                
                            }}>Buy Now</SecondaryBtn>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-8">
                <p className="text-gray-600">Related Products</p>
                <section className="overflow-x-auto flex">
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                    <RelatedProductItem/>
                </section>
            </section>
        </main>
    )
}