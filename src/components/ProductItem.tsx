import React from "react";
import { IProduct } from "../types";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"
import DiscountView from "./DiscountView";
interface ItemProp {
  product: IProduct;
  onClick ?: (e : any) => void
  onAddToBag ?: (e : IProduct) => void
}
export default function ProductItem(props: ItemProp) {
  return (
    <div className="h-28 p-1 flex relative dark:bg-gray-800">
        <figure className="h-full w-24 relative">
        <img
        className="h-full rounded w-24 bg-gray-200"
        src={props.product.photo}
        alt={props.product.name}
      />
      {function(){
          if(props.product.discount){
              return (
                <span className=" right-0 bottom-0 absolute"><DiscountView discount={props.product.discount}/></span>
              )
          } else return null
      }()}
        </figure>
      <button onClick={e => {
        if(props.onClick){
          props.onClick(e)
        }
      }}>
      <div className="flex ml-4 justify-center items-center w-full h-full flex-col">
        <h1 className="font-semibold">{props.product.name}</h1>
        <p className="text-sm font-normal text-gray-800">
          {props.product.currency} {props.product.price}
        </p>
      </div>
      </button>
      
      <div className="absolute text-blue-800 dark:text-yellow-400 bottom-2 right-2">
        <Button onClick={e => {
          if(props.onAddToBag){
            props.onAddToBag(props.product)
          }
        }} startIcon={<AddIcon/>} variant="outlined" size="small" color="inherit">Add</Button>
      </div>
    </div>
  );
}
