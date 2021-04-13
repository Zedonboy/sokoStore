import React from "react";
import DiscountView from "./DiscountView";

export default function RelatedProductItem() {
  return (
    <section className="w-36 flex-shrink-0 h-48 p-2 flex flex-col overflow-hidden">
      <button>
        <figure className="rounded w-full h-32 p-0 relative">
          <img
            alt="product_img"
            src="https://picsum.photos/200/300"
            className="rounded w-full h-32"
          />
          <span className=" right-0 bottom-0 absolute">
            <DiscountView discount="40" />
          </span>
        </figure>
        <p className="font-medium text-base">Boxer</p>
        <p className="text-xs">Lorem ipsum dolor sit...</p>
      </button>
    </section>
  );
}
