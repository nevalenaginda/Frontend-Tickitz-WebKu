import React, { Component } from "react";
import "./assets/StyleFooter.css";
import NavBarLogo from "../../assets/img/logo_navbar.png";
import EbvIdLogo from "../../assets/img/ebv.id.png";
import CineOneLogo from "../../assets/img/CineOne21.png";
import HiflixLogo from "../../assets/img/hiflix.png";
import FacebookLogo from "../../assets/img/ic-facebook.png";
import InstagramLogo from "../../assets/img/ic-instagram.png";
import TwitterLogo from "../../assets/img/ic-twitter.png";
import YoutubeLogo from "../../assets/img/ic-youtube.png";

export class CustomFooter extends Component {
  render() {
    return (
      <div>
        {" "}
        <footer>
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-md-0">
                <img src={NavBarLogo} className="logo" alt="Logo Tickitz" />
                <p>
                  Stop waiting in line. Buy tickets
                  <br />
                  conveniently, watch movies quietly.
                </p>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 mb-4 mb-md-0 pl-0">
                <p className="explore nav-link">Explore</p>
                <nav className="nav explore flex-row flex-md-column mt-1 mt-md-0">
                  <a className="nav-link mt-md-0 " href="/">
                    Cinemas
                  </a>
                  <a className="nav-link" href="/">
                    Movies List
                  </a>
                  <a className="nav-link" href="/">
                    My Ticket
                  </a>
                  <a className="nav-link" href="/">
                    Notification
                  </a>
                </nav>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-md-0 pl-0">
                <p className="our-sponsor nav-link">Our Sponsor</p>
                <nav className="nav sponsor flex-row flex-md-column align-items-center align-items-md-start mt-1 mt-md-0">
                  <a className="nav-link" href="/">
                    <img src={EbvIdLogo} alt="Ebv" />
                  </a>
                  <a className="nav-link" href="/">
                    <img src={CineOneLogo} alt="CineOne" />
                  </a>
                  <a className="nav-link" href="/">
                    <img src={HiflixLogo} alt="Hiflix" />
                  </a>
                </nav>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 mb-4 mb-md-0 pl-0">
                <p className="follow-us nav-link">Follow Us</p>
                <nav className="nav follow-us flex-row flex-md-column mt-1 mt-md-0">
                  <a className="nav-link d-flex align-items-center" href="/">
                    <img src={FacebookLogo} className="facebook" alt="ok" />
                    <span>Tickitz Cinema id</span>
                  </a>
                  <a className="nav-link d-flex align-items-center" href="/">
                    <img src={InstagramLogo} className="instagram" alt="ok" />
                    <span>tickitz.id</span>
                  </a>
                  <a className="nav-link d-flex align-items-center" href="/">
                    <img src={TwitterLogo} className="twitter" alt="ok" />
                    <span>tickitz.id</span>
                  </a>
                  <a className="nav-link d-flex align-items-center" href="/">
                    <img src={YoutubeLogo} className="youtube" alt="ok" />
                    <span>Tickitz Cinema id</span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="row pb-5">
              <div className="col d-flex align-items-center justify-content-start justify-content-md-center">
                <p className="copyright">
                  © 2021 Tickitz. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default CustomFooter;
