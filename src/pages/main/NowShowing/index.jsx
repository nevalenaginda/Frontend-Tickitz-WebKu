import { React, Fragment } from "react";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";
import Main from "../../../parts/NowShowing";
import "../../../assets/style/all-movies.css";

function NowShowing() {
  return (
    <Fragment>
      <CustomNavBar login={localStorage.getItem("token")}></CustomNavBar>
      <Main></Main>
      <CustomFooter></CustomFooter>
    </Fragment>
  );
}

export default NowShowing;
