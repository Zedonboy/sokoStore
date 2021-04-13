//@ts-nocheck
import React, { useEffect } from "react";
import "./App.css";
import "./assets/css/all.css";
import {
  Badge,
  Button,
  Switch as MSwitch,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import BagIcon from "@material-ui/icons/LocalMallOutlined";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import BagMainPage from "./pages/BagMainPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmedPage from "./pages/OrderConfirmedPage";
import OrderDetails from "./pages/OrderDetails";
import AccountPage from "./pages/AccountPage";
import NavDrawer from "./components/NavDrawer";
import { Switch, Route, useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SimpleBottomNavigation from "./components/BottomNav";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { updateDarkMode } from "./store/slices/app.slice";
import { get, set } from "idb-keyval";
import { Helmet } from "react-helmet";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.appConfig.darkMode);
  const theme = React.useMemo(() => {
    return createMuiTheme({
      palette: {
        type: darkMode ? "dark" : "light",
       secondary: {
         main: "#FCD34D",
         dark: "#FCD34D"
       },
       primary: {
         main: "#1E40AF",
         dark: "#FCD34D"
       }
      },
    });
  }, [darkMode]);
  useEffect(() => {
    let seed = async () => {
      let rslt = await get("darkMode");
      dispatch(updateDarkMode(rslt));
    };

    seed();
  }, []);
  //@ts-ignore
  let nodes = useSelector((state) => state.header.nodes);
  //@ts-ignore
  let openSide = useSelector((state) => state.sideNav.value);

  let bagLength = useSelector((state) => state.bag.value.length);

  let match = useRouteMatch({
    path: "/",
    strict: true,
  });
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="description" content="Ecommerce" />
        {darkMode ? (
          <meta name="theme-color" content="#1F2937" />
        ) : (
          <meta name="theme-color" content="#1D4ED8" />
        )}
      </Helmet>
      <section>
        <div className="bg-blue-700 flex items-center justify-between p-4 md:px-36 p-4 dark:bg-gray-800">
          <span className="text-white">Store made with sokko</span>
          <span>
            <p className="text-xs text-white">DarkMode</p>
            <MSwitch
              checked={darkMode}
              onChange={(e) => {
                dispatch(updateDarkMode(e.target.checked));
                set("darkMode", e.target.checked);
              }}
            />
          </span>
        </div>
        <section className="p-4 md:px-36 py-6 flex flex-col dark:bg-gray-800 border border-blue-600 dark:border-gray-800">
          <div className="flex justify-between">
            <div className="flex">
              <div className="w-16 h-16 p-6 rounded-full flex items-center justify-center bg-gray-300">
                <i className="fas text-gray-500 fa-2x fa-store"></i>
              </div>
              <section className="flex ml-4 flex-col">
                <h1 className="font-semibold">Target</h1>
                <p className="text-sm font-normal text-gray-400">
                  Chain Towers, Plot 10 Nkrumah Street
                </p>
              </section>
            </div>
            <div className="flex hidden md:flex justify-center spacing-x-8 text-blue-500 dark:text-gray-200 items-center">
              <Badge badgeContent={bagLength} showZero={false} color="error">
                <Button
                  onClick={(e) => {
                    history.push("/bag");
                  }}
                  color="inherit"
                  startIcon={<BagIcon />}
                >
                  Bag
                </Button>
              </Badge>

              <div className="ml-4">
                <Button
                  className="ml-4"
                  onClick={(e) => {
                    history.push("/account");
                  }}
                  color="inherit"
                  startIcon={<AccountCircleIcon />}
                >
                  Account
                </Button>
              </div>
            </div>
          </div>
          <div className="flex mt-4 justify-between">
            {match?.isExact ? null : (
              <div className="text-blue-500">
                <Button
                  className="ml-4"
                  onClick={(e) => {
                    history.goBack();
                  }}
                  color="inherit"
                  startIcon={<ChevronLeftIcon />}
                >
                  Back
                </Button>
              </div>
            )}

            {nodes}
          </div>
        </section>
        <Switch>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/orderConfirmed">
            <OrderConfirmedPage />
          </Route>
          <Route path="/productDetails">
            <ProductPage />
          </Route>
          <Route path="/orderDetails">
            <OrderDetails />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/bag">
            <BagMainPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <section className="flex py-12 bg-blue-700 mt-8 justify-evenly ">
          <div className="flex flex-col justify-center items-center">
            <i className="fas text-yellow-300 fa-truck fa-3x"></i>
            <p className="text-sm text-white">Fast Delivery</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <i className="fas text-yellow-300 fa-certificate fa-3x"></i>
            <p className="text-sm text-white">Buyer Protection</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <i className="far text-yellow-300 fa-clock fa-3x"></i>
            <p className="text-sm text-white">Fast Delivery</p>
          </div>
        </section>
        <section className="flex flex-col p-8 justify-center items-center">
          <span className="text-blue-600">
            <Button variant="text" color="inherit">
              Store Details
            </Button>
          </span>
          <h1 className="font-semibold mt-4 text-center">Target</h1>
          <p className="text-sm text-center mt-4 font-normal text-gray-800">
            Chain Towers, Plot 10 Nkrumah Street
          </p>
        </section>
        {openSide ? <NavDrawer /> : null}

        <div className="md:hidden bottom-0 right-0 left-0 fixed w-full">
          <SimpleBottomNavigation />
        </div>
      </section>
    </ThemeProvider>
  );
}

export default App;
