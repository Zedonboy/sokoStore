//@ts-nocheck
import React, { useEffect, useState } from "react";
import AddressCard from "../components/AddressEditCard";
import DialogBox from "../components/Dialog";
import OrderCard from "../components/OrderCards";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import { OrderStatus } from "../types";
import Slide from "@material-ui/core/Slide";
import { useDispatch, useSelector } from "react-redux";
import {
  insertAddress,
  removeAddress,
  updateAddress,
} from "../store/slices/address.slice";
import { clearAllSideNav, insertSideNavNode } from "../store/slices/sideNav.slice";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { insertHeaderNode, clearHeaderNode } from "../store/slices/header.slice";
import { Button } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  //@ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AccountPage() {
  let [dialogOpen, setDialogOpen] = useState(false);
  let [address, setAddress] = useState({});
  let [addressIdx, setAddressIdx] = useState(-1);
  let [editMode, setEditMode] = useState(false);
  let history = useHistory();
  //@ts-ignore
  let addresses = useSelector((state) => state.address.value);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      insertSideNavNode(
        <ul className="side-nav">
          <li className="active">
            <button
              onClick={(e) => {
                history.push(`${path}/`);
              }}
              className="hover:text-blue-500"
            >
              <i className="fas fa-clipboard-list"></i>&nbsp;My Orders
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                history.push(`${path}/address`);
              }}
              className="hover:text-blue-500"
            >
              <i className="fas fa-map-marker-alt"></i>&nbsp;My Address
            </button>
          </li>
        </ul>
      )
    );

    dispatch(insertHeaderNode((<>
    <h1 className="text-xl font-bold">27316784655</h1>
    <div className="text-blue-500">
      <Button variant="outlined" color="inherit">Logout</Button>
    </div>
    </>)))

    return () => {
      dispatch(clearAllSideNav(null))
      dispatch(clearHeaderNode(null))
    }
    //eslint-disable-next-line
  }, []);
  let { path } = useRouteMatch();
  return (
    <main className="p-4 md:px-36 flex">
      
      {dialogOpen ? (
        <DialogBox
          onClose={(e) => {
            setDialogOpen(false);
          }}
          TransitionComponent={Transition}
          keepMounted
          open={dialogOpen}
          title="Edit Address"
        >
          <form className="w-full md:w-96">
            <label className="block font-light text-sm">
              <span className="text-gray-700">Name</span>
              <input
                value={address.name}
                onChange={(e) => {
                  address.name = e.target.value;
                  setAddress({ ...address });
                }}
                name="name"
                type="text"
                placeholder="e.g John Done"
              />
            </label>
            <label className="block mt-4 font-light text-sm">
              <span className="text-gray-700">Mobile number</span>
              <input
                type="tel"
                value={address.phone}
                onChange={(e) => {
                  address.phone = e.target.value;
                  setAddress({ ...address });
                }}
                placeholder="Enter your mobile number +2349042478"
              />
            </label>
            <label className="block mt-4 font-light text-sm">
              <span className="text-gray-700">City</span>
              <input
                value={address.city}
                onChange={(e) => {
                  address.city = e.target.value;
                  setAddress({ ...address });
                }}
                type="text"
                placeholder="Lagos City"
              />
            </label>
            <label className="block mt-4 font-light text-sm">
              <span className="text-gray-700">Address</span>
              <textarea
                value={address.address}
                onChange={(e) => {
                  address.address = e.target.value;
                  setAddress({ ...address });
                }}
                placeholder="Presidential Road"
                rows={3}
              />
            </label>
            <div className="flex justify-center mt-4">
              <span className="p-0.5">
                {editMode ? (
                  <SecondaryBtn
                    onClick={(e) => {
                      setDialogOpen(false);
                      dispatch(
                        updateAddress({ index: addressIdx, data: address })
                      );
                      setEditMode(false);
                      setAddress({});
                    }}
                  >
                    Edit Address
                  </SecondaryBtn>
                ) : (
                  <SecondaryBtn
                    onClick={(e) => {
                      setDialogOpen(false);
                      dispatch(insertAddress(address));
                      setAddress({});
                    }}
                  >
                    Create Address
                  </SecondaryBtn>
                )}
              </span>
            </div>
          </form>
        </DialogBox>
      ) : null}
      <section className="w-full rounded-2xl border-2 flex">
        <section className="hidden md:block md:w-1/5">
          <ul className="side-nav">
            <li className="active">
              <button
                onClick={(e) => {
                  history.push(`${path}/`);
                }}
                className="hover:text-blue-500"
              >
                <i className="fas fa-clipboard-list"></i>&nbsp;My Orders
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  history.push(`${path}/address`);
                }}
                className="hover:text-blue-500"
              >
                <i className="fas fa-map-marker-alt"></i>&nbsp;My Address
              </button>
            </li>
          </ul>
        </section>

        <Switch>
          
          <Route path={`${path}/address`}>
            <section className="w-full pl-8 pr-4 py-4 md:w-4/5 flex flex-col">
              <section className="flex justify-between">
                <span className="w-24">
                  <PrimaryBtn>
                    <i className="fas fa-filter"></i>&nbsp;&nbsp;&nbsp;Filter
                  </PrimaryBtn>
                </span>
              </section>
              <section className="flex flex-wrap items-center">
                {addresses.map((v, i) => (
                  <div className="w-full md:w-1/3 p-4">
                    <AddressCard
                      name={v.name}
                      active
                      phone={v.phone}
                      address={v.address}
                      onDelete={(e) => {
                        dispatch(removeAddress(i));
                      }}
                      onEdit={(e) => {
                        setEditMode(true);
                        setAddressIdx(i);
                        setAddress(v);
                        setDialogOpen(true);
                      }}
                    />
                  </div>
                ))}

                <div className="w-full h-36 md:w-1/3 p-4">
                  <button
                    onClick={(e) => {
                      setDialogOpen(true);
                    }}
                    className="w-full flex border-2 border-blue-600 text-blue-600 hover:text-blue-400 rounded-lg justify-center items-center h-full"
                  >
                    <p>+Add New</p>
                  </button>
                </div>
              </section>
            </section>
          </Route>
          <Route path={path}>
            <section className="w-full pl-8 pr-4 py-4 md:w-4/5 flex flex-col">
              <section className="flex justify-between">
                <p>Showing all Orders</p>{" "}
                <span className="w-24">
                  <PrimaryBtn>
                    <i className="fas fa-filter"></i>&nbsp;&nbsp;&nbsp;Filter
                  </PrimaryBtn>
                </span>
              </section>
              <section className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-4">
                  <OrderCard
                    order={{
                      code: "Order-#666",
                      house: "Transamadi",
                      status: OrderStatus.SHIPPED,
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <OrderCard
                    order={{
                      code: "Order-#666",
                      house: "Transamadi",
                      status: OrderStatus.DELIVERED,
                    }}
                  />
                </div>
              </section>
            </section>
          </Route>
        </Switch>
      </section>
    </main>
  );
}
