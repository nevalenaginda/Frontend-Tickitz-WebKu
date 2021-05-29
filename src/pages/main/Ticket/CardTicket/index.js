import React from "react";
import logoTicket from "../assets/image/Tickitz 2.png";
import barCode from "../assets/image/Barcode.png";
import "../assets/styleTicket.css";

class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
    console.log(this.props.data);
  }

  render() {
    return (
      <>
        {this.props.data && (
          <div className="row d-flex flex-column justify-content-center">
            <div className="align-self-center col-11 col-md-6 col-lg-10   border-card-ticket-top bg1 d-flex ">
              <div className="col-7 d-none d-lg-flex  justify-content-between align-items-center">
                <img src={logoTicket} alt="ticket" />
                <div className="text-white text-right f-weight">Admit One</div>
              </div>
              <div className="col-5  border-left-style text-center ">
                <img src={logoTicket} alt="ticket" />
              </div>
            </div>

            <div className="align-self-center col-11 col-md-6  col-lg-10 py-4 border-card-ticket-bottom bg-white d-flex">
              <div className="col-7 d-none d-lg-block">
                <div className="col-12">
                  <div className="f-sm color9">Movie</div>
                  {this.props.data && (
                    <div className="f-md f-weight">
                      {this.props.data.movie_title}
                    </div>
                  )}
                </div>
                <div className="row mt-4">
                  <div className="col-12 d-flex">
                    <div className="col-4 f-sm color9">Date</div>
                    <div className="col-4 f-sm color9">Time</div>
                    <div className="col-4 f-sm color9">Category</div>
                  </div>
                  <div className="col-12 d-flex">
                    <div className="col-4 f-md f-weight">{`${this.props.data.playing_date}`}</div>
                    <div className="col-4 f-md f-weight">
                      {`${this.props.data.playing_time} WIB`}
                    </div>
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
                    <div className="col-4 f-md f-weight">{`${this.props.data.count} pieces`}</div>
                    <div className="col-4 f-md f-weight">{`${this.props.data.seats}`}</div>
                    <div className="col-4 f-lg f-weight">{`Rp${this.props.data.price}`}</div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-5  border-left-style d-flex">
                <div className="col-10">
                  <div className="col-12">
                    <div className="f-sm color9">Movie</div>
                    <div className="f-md f-weight">
                      {this.props.data.movie_title}
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 d-flex">
                      <div className="col-5 f-sm color9">Date</div>
                      <div className="col-7 f-sm color9">Time</div>
                    </div>
                    <div className="col-12 d-flex">
                      <div className="col-5 f-md f-weight">{`${this.props.data.playing_date}`}</div>
                      <div className="col-7 f-md f-weight">{`${this.props.data.playing_time} WIB`}</div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 d-flex">
                      <div className="col-5 f-sm color9">Count</div>
                      <div className="col-7 f-sm color9">Seats</div>
                    </div>
                    <div className="col-12 d-flex">
                      <div className="col-5 f-md f-weight ">{`${this.props.data.count} pieces`}</div>
                      <div className="col-7 f-md f-weight">{`${this.props.data.seats}`}</div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <div className="col-5 f-sm color9">Category</div>
                      <div className="col-5 f-md f-weight">PG-13</div>
                    </div>
                  </div>
                </div>
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
            </div>
          </div>
        )}
      </>
    );
  }
}
export default ComponentToPrint;
