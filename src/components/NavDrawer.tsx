import { Slide } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../logo.svg";
import { toggleSideNav } from "../store/slices/sideNav.slice";
export default function NavDrawer() {
  let dispatch = useDispatch()
  //@ts-ignore
  let nodes = useSelector(state => state.sideNav.nodes)
  return (
    <nav onClick={e => {
      dispatch(toggleSideNav(null))
    }} className="fixed top-0 left-0 right-0 bottom-0 bg-black z-10 p-0 m-0 bg-opacity-50">
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <div className="w-10/12 bg-white dark:bg-gray-800 h-full">
          <div className="flex flex-col justify-center items-center">
            <img className="w-24 h-24 mt-2" alt="logo" src={logo} />
            <p className="font-light text-xl">Soko Store</p>
          </div>
          {nodes}
        </div>
      </Slide>
    </nav>
  );
}
