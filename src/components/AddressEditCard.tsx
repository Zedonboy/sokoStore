import { Button } from "@material-ui/core";
import React from "react";

interface IProp {
  active?: boolean | undefined;
  name: string;
  phone: string;
  address: string;
  onDelete ?: (e : any) => void
  onEdit ?: (e : any) => void
}
//@ts-ignore
export default function AddressCard(props: IProp) {
  return (
    <section
      className={`w-full relative text-left rounded-md m-2 p-2 border-2 border-blue-600`}
    >
      <p className="font-semibold">{props.name}</p>
      <p className="text-sm text-gray-400">{props.address}</p>
      <p className="text-sm text-gray-600 mt-4">{props.phone}</p>
      <div className="flex"><span className="dark:text-gray-200"><Button onClick={e => {
        if(props.onEdit){
          props.onEdit(e)
        }
      }} color="inherit">Edit</Button></span> <div className="text-red-600"><Button onClick={e => {
        if(props.onDelete){
          props.onDelete(e)
        }
      }} color="inherit">Delete</Button></div></div>
      
    </section>
  );
}
