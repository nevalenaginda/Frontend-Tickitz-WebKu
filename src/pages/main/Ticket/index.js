import React from "react";
import "./assets/styleTicket.css";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";
import logoTicket from "./assets/image/Tickitz 2.png";
import barCode from "./assets/image/Barcode.png";

function Ticket() {
  return (
    <div>
      <CustomNavBar />
      <div className="container-fluid bg1 pt-5">
        <div className="row mt-5 mb-5 justify-content-center ">
          <div className="col-10 border my-5 py-4 bg4 border-row-ticket ">
            <h4 className="text-center mb-4 f-weight">Proof of Payment</h4>
            <div className="row justify-content-center">
              <div className="col-10 border-card-ticket-top bg1 d-flex ">
                <div className="col-8 d-flex justify-content-between align-items-center">
                  <img src={logoTicket} alt="ticket" />
                  <div className="text-white text-right f-weight">
                    Admit One
                  </div>
                </div>
                <div className="col-4  border-left-style text-center ">
                  <img src={logoTicket} alt="ticket" />
                </div>
              </div>
              <div className="col-10 py-4 border-card-ticket-bottom bg-white d-flex">
                <div className="col-8 ">
                  <div className="col-12">
                    <div className="f-sm color9">Movie</div>
                    <div className="f-md f-weight">Spider-Man: Homecoming</div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 d-flex">
                      <div className="col-4 f-sm color9">Date</div>
                      <div className="col-4 f-sm color9">Time</div>
                      <div className="col-4 f-sm color9">Category</div>
                    </div>
                    <div className="col-12 d-flex">
                      <div className="col-4 f-md f-weight">07 July</div>
                      <div className="col-4 f-md f-weight">02:00pm</div>
                      <div className="col-4 f-md f-weight">PG-13</div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 d-flex">
                      <div className="col-4 f-sm color9">Count</div>
                      <div className="col-4 f-sm color9">Seats</div>
                      <div className="col-4 f-sm color9">Price</div>
                    </div>
                    <div className="col-12 d-flex">
                      <div className="col-4 f-md f-weight">3 pieces</div>
                      <div className="col-4 f-md f-weight">C4, C5, C6</div>
                      <div className="col-4 f-lg f-weight">$30.00</div>
                    </div>
                  </div>
                </div>

                <div className="col-4  border-left-style">
                  <div className="row  position-absolute justify-content-end">
                    <div className="col-1">
                      <img
                        className="img-thumbnails "
                        src={barCode}
                        alt="barcode"
                      />
                      <img
                        className="img-thumbnails "
                        src={barCode}
                        alt="barcode"
                      />
                      <img
                        className="img-thumbnails "
                        src={barCode}
                        alt="barcode"
                      />
                      <img
                        className="img-thumbnails "
                        src={barCode}
                        alt="barcode"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="f-sm color9">Movie</div>
                    <div className="f-md f-weight">Spider-Man: Homecoming</div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 d-flex">
                      <div className="col-5 f-sm color9">Date</div>
                      <div className="col-5 f-sm color9">Time</div>
                    </div>
                    <div className="col-12 d-flex">
                      <div className="col-5 f-md f-weight">07 July</div>
                      <div className="col-5 f-md f-weight">02:00pm</div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 d-flex">
                      <div className="col-5 f-sm color9">Count</div>
                      <div className="col-5 f-sm color9">Seats</div>
                    </div>
                    <div className="col-12 d-flex">
                      <div className="col-5 f-md f-weight">3 pieces</div>
                      <div className="col-5 f-md f-weight">C4, C5, C6</div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <div className="col-5 f-sm color9">Category</div>
                      <div className="col-5 f-md f-weight">PG-13</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}

export default Ticket;
