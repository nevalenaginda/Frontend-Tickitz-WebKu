import { Switch, Route } from "react-router-dom";
import { React } from "react";
import { useDispatch } from "react-redux";
import AuthRoute from "./module/AuthRoute";
import ScrollToTop from "../components/base/scrollToTop";
import { getProfile } from "../config/redux/actions/user";
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
import AllFilms from "../pages/main/AllFilm";

const Router = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  if (token) {
    // console.log("ada token");
    dispatch(getProfile())
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  } else {
    console.log("belum login");
  }

  return (
    <Switch>
      <ScrollToTop>
        <AuthRoute path="/login" component={SignIn} type="guest" />
        <AuthRoute path="/register" component={SignUp} type="guest" />
        <AuthRoute path="/forgot-password" component={Forgot} type="guest" />
        <Route path="/" component={Home} exact />
        <Route path="/movies" component={AllFilms} />
        <AuthRoute path="/order/:id" component={Order} type="private" />
        <AuthRoute path="/ticket/:id" component={Ticket} type="private" />
        <AuthRoute path="/detail/:id" component={Detail} type="private" />
        <AuthRoute path="/payment/:id" component={Payment} type="private" />
        <AuthRoute path="/profile" component={Profile} type="private" />
        <Route path="/nowshowing-movies" component={NowShowing} />
        <Route path="/upcoming-movies" component={UpComing} />
        <AuthRoute path="/admin" component={Admin} type="adminOnly" />
        <AuthRoute
          path="/update/:id"
          component={UpdateMovie}
          type="adminOnly"
        />
      </ScrollToTop>
    </Switch>
  );
};

export default Router;
