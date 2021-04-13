import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "../store/slices/sideNav.slice";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="w-full"
    >
      <BottomNavigationAction color="secondary" value="home" onClick={e => {
        history.push("/")
      }} label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction color="secondary" value="categories" onClick={e => {
        dispatch(toggleSideNav(null))
      }} label="Categories" icon={<AppsIcon />} />
      <BottomNavigationAction color="secondary" value="bag" onClick={e => {
        history.push("/bag")
      }} label="Bag" icon={<LocalMallIcon />} />
      <BottomNavigationAction color="secondary" value="account" onClick={e => {
        history.push("/account")
      }} label="Account" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}
