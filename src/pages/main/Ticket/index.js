import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Moment from "moment";
import { useParams } from "react-router";
import "./assets/styleTicket.css";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";
import CardTicket from "./CardTicket";
import { useReactToPrint } from "react-to-print";
import { exportComponentAsJPEG } from "react-component-export-image";

const ComponentToSave = React.forwardRef((props, ref) => (
  <CardTicket data={props.data} ref={ref} />
));

function Ticket() {
  const componentRef = useRef();
  const [data, setData] = useState(null);
  let { id } = useParams();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const Url = process.env.REACT_APP_API_TICKET;

  const changeTime = (time) => {
    return Moment(time).format("LL");
  };

  const toRupiah = (data) => {
    return parseInt(data).toLocaleString("id-ID");
  };

  useEffect(() => {
    if (!data) {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get(Url + `ticket/detail/${id}`, config)
        .then((result) => {
          console.log(result.data.data.playing_date);
          setData({
            movie_title: result.data.data.movie_title,
            playing_date: changeTime(result.data.data.playing_date),
            playing_time: result.data.data.playing_time,
            count: result.data.data.ordered_seat.split(",").length,
            seats: result.data.data.ordered_seat,
            price: toRupiah(result.data.data.price),
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } // eslint-disable-next-line
  }, []);

  return (
    <div>
      <CustomNavBar login={localStorage.getItem("token")} />

      <div className="container-fluid bg1 pt-5">
        <div className="row mt-5 mb-5 justify-content-center ">
          <div className=" col-10 border my-5 py-4 bg4 border-row-ticket ">
            <h4 className="text-center mb-4 f-weight">Proof of Payment</h4>
            {data ? (
              <div className="">
                <CardTicket data={data} ref={componentRef}></CardTicket>
              </div>
            ) : (
              ""
            )}
            <ComponentToSave ref={componentRef} />
            <div className="col-12 d-flex mt-4 justify-content-center">
              <div
                className=" d-flex mx-2 btn-transparent  align-items-center"
                onClick={() =>
                  exportComponentAsJPEG(componentRef, {
                    fileName: `Tiket-${id}`,
                  })
                }
              >
                <div className="ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="#4E4B66"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#4E4B66"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 15V3"
                      stroke="#4E4B66"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <button className="btn mr-2  border-none shadow-none">
                  Download
                </button>
              </div>

              <div className="btn-transparent mr-2" onClick={handlePrint}>
                <div className="d-flex mx-2  ml-3 mt-1 align-items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9V2H18V9"
                        stroke="#4E4B66"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18"
                        stroke="#4E4B66"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18 14H6V22H18V14Z"
                        stroke="#4E4B66"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <button className="btn border-none shadow-none">Print</button>
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
