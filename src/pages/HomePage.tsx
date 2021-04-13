import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { insertToBag } from "../store/slices/bag.slice";
import { insertHeaderNode } from "../store/slices/header.slice";
import { clearAllSideNav, insertSideNavNode, removeSideNavNode } from "../store/slices/sideNav.slice";
import { BagItem } from "../types";
import BagPage from "./BagSection";

export default function HomePage() {
  const [currCat, setCurrCat] = useState(0);
  let dispatch = useDispatch();
  let history = useHistory();
  
  useEffect(() => {
    dispatch(
      insertSideNavNode(
        (function () {
          if (categories) {
            categories.map((v, i) => (
              <li className={`${i === currCat ? "active" : null}`}>
                <button
                  onClick={(e) => {
                    setCurrCat(i);
                  }}
                  className="hover:text-blue-500"
                >
                  {v.name}&nbsp;{v.count}
                </button>
              </li>
            ));
          } else
            return (
              <div className="p-4 text-yellow-400 flex justify-center items-center">
                <CircularProgress color="inherit" />
              </div>
            );
        })()
      )
    );

    return () => {
      dispatch(clearAllSideNav(null))
    }
  }, []);
  //@ts-ignore
  let bagLength = useSelector((state) => state.bag.value.length);
  //@ts-ignore
  let products = useSelector((state) => state.product.value);
  //@ts-ignore
  let categories = useSelector((state) => state.category.value);
  return (
    <>
      <div className="flex justify-center px-4 -mt-5">
        <input
          className="p-2 rounded-l bg-gray-200 w-full md:w-1/3"
          placeholder="Love"
        />
        <button className="p-1 w-12 bg-yellow-300 rounded-r">
          <i className="fas fa-search text-blue-700"></i>
        </button>
      </div>
      <main className="px-4 md:px-36 mt-4 flex">
        <section className="w-1/4 hidden md:block border-r">
          <ul className="side-nav">
            {(function () {
              if (categories) {
                return categories.map((v, i) => (
                  <li className={`${i === currCat ? "active" : null}`}>
                    <button
                      onClick={(e) => {
                        setCurrCat(i);
                      }}
                      className="hover:text-blue-500"
                    >
                      {v.name}&nbsp;({v.count})
                    </button>
                  </li>
                ));
              } else
                return (
                  <div className="p-4 text-yellow-400 flex justify-center items-center">
                    <CircularProgress color="inherit" />
                  </div>
                );
            })()}
          </ul>
          <a
            href="javascript:void();"
            className="font-semibold text-blue-500 hover:underline"
          >
            View all Categories &gt;
          </a>
        </section>
        <section
          style={{
            maxHeight: "80vh",
          }}
          className="w-full md:w-2/4  overflow-auto border-gray-400"
        >
          <section className="p-2 flex">
            <h1 className="font-semibold">Electronic</h1>
            <span className="p-0.5 bg-blue-800 ml-2 text-white rounded">
              {products?.length}
            </span>
          </section>
          {(function () {
            if (products) {
              return products.map((v) => (
                <ProductItem
                  onClick={(e) => {
                    history.push("/productDetails");
                  }}
                  onAddToBag={(p) => {
                    dispatch(insertToBag(new BagItem(p, p.price, 1)));
                  }}
                  product={v}
                />
              ));
            } else
              return (
                <div className="p-4 text-yellow-400 flex justify-center items-center">
                  <CircularProgress color="inherit" />
                </div>
              );
          })()}
        </section>
        <section className="w-1/4 hidden border-l md:block">
          <section className="p-2 flex">
            <h1 className="font-semibold">Bag</h1>
            <span className="p-0.5 bg-blue-800 ml-2 text-white rounded">
              {bagLength}
            </span>
          </section>
          <BagPage />
        </section>
      </main>
    </>
  );
}
