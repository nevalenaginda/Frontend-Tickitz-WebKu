import { React, Fragment } from "react";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";
import Main from "../../../parts/UpComing";
import "../../../assets/style/all-movies.css";

function UpComing() {
  return (
    <Fragment>
      <CustomNavBar login={localStorage.getItem("token")}></CustomNavBar>
      <Main></Main>
      <CustomFooter></CustomFooter>
    </Fragment>
  );
}

export default UpComing;
