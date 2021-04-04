import { Switch, Route } from "react-router-dom";
import { React } from "react";
import { useDispatch } from "react-redux";
import AuthRoute from "./module/AuthRoute";
import { getProfile } from "../config/redux/actions/act_getProfile";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Forgot from "../pages/auth/Forgot";
import Home from "../pages/main/Home";
import Detail from "../pages/main/Detail";
import Order from "../pages/main/Order";
import Payment from "../pages/main/Payment";
import Profile from "../pages/main/Profile";
import Admin from "../pages/main/Admin";
import UpdateMovie from "../pages/main/UpdateMovie";
import Ticket from "../pages/main/Ticket";
import NowShowing from "../pages/main/NowShowing";
import UpComing from "../pages/main/UpComing";

const Router = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  if (token) {
    console.log("ada token");
    dispatch(getProfile())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("tidak ada token");
  }

  return (
    <Switch>
      <AuthRoute path="/login" component={SignIn} type="guest" />
      <AuthRoute path="/register" component={SignUp} type="guest" />
      <AuthRoute path="/forgot" component={Forgot} type="guest" />
      <Route path="/" component={Home} exact />
      <AuthRoute path="/order" component={Order} type="private" />
      <AuthRoute path="/ticket" component={Ticket} type="private" />
      <AuthRoute path="/detail/:id" component={Detail} type="private" />
      <AuthRoute path="/payment" component={Payment} type="private" />
      <AuthRoute path="/profile" component={Profile} type="private" />
      <AuthRoute
        path="/nowshowing-movies"
        component={NowShowing}
        type="private"
      />
      <AuthRoute path="/upcoming-movies" component={UpComing} type="private" />
      <AuthRoute path="/admin" component={Admin} type="adminOnly" />
      <AuthRoute path="/update/:id" component={UpdateMovie} type="adminOnly" />
    </Switch>
  );
};

export default Router;
