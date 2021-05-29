import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

const SeatDesktop = ({ idSchedule }) => {
  const dispatch = useDispatch();
  const { selected_seat } = useSelector((state) => state.order);

  const [selectedSeat, setSelectedSeat] = useState(selected_seat);
  const rows = ["A", "B", "C", "D", "E", "F", "G", ""];
  const [ordered, setOrdered] = useState([]);
  const [getOrdered, setGetOrdered] = useState(false);

  const checkSeatStatus = (val) => {
    if (checkIsChecked(val)) {
      return "seat-desktop selected";
    } else {
      if (checkIsActive(val)) {
        return "seat-desktop sold";
      } else {
        return "seat-desktop";
      }
    }
  };

  const checkIsActive = (val) => {
    if (ordered.includes(val)) {
      return true;
    }
    return false;
  };

  const checkIsChecked = (val) => {
    if (selectedSeat.includes(val)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSelectSeat = (val) => {
    if (selectedSeat.includes(val)) {
      var index = selectedSeat.indexOf(val);
      if (index !== -1) {
        selectedSeat.splice(index, 1);
      }
    } else {
      selectedSeat.push(val);
    }
    setSelectedSeat([...selectedSeat]);
    dispatch({ type: "SELECT_SEAT", payload: selectedSeat });
  };

  const SeatComp = ({ isActive, val }) => {
    return (
      <button
        disabled={isActive}
        onClick={() => {
          handleSelectSeat(val);
        }}
        className={checkSeatStatus(val)}
      ></button>
    );
  };

  const RenderSeat = ({ start, end }) => {
    let result = [];
    rows.forEach((el, idx) => {
      let seat = [];
      for (let i = start; i <= end; i++) {
        if (el !== "") {
          seat.push(
            <SeatComp
              key={el + i}
              isActive={checkIsActive(el + i)}
              val={el + i}
            />
          );
        } else {
          seat.push(<div className="seat-number-desktop">{i}</div>);
        }
      }
      result.push(
        <div className="row">
          <div className="col-md-12 seat-desktop-col">
            <div className="seat-number-desktop">{start === 1 ? el : ""}</div>
            {seat}
          </div>
        </div>
      );
    });
    return result;
  };

  useEffect(() => {
    const { REACT_APP_API_TICKET } = process.env;
    const token = localStorage.getItem("token");
    const configFormData = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(
        `${REACT_APP_API_TICKET}seat/schedule/${idSchedule}`,

        configFormData
      )
      .then((res) => {
        // console.log(res.data.data);
        res.data.data.map((item, id) => {
          // console.log(item.seat);

          ordered.push(item.seat);
          if (res.data.data.length === id + 1) {
            setGetOrdered(true);
          }
        });
      })
      .catch((err) => {
        setGetOrdered(true);
      });
  }, [idSchedule]);

  return (
    <div
      className="card seat-desktop-wrapper  d-none  d-lg-block"
      style={{ width: "100%" }}
    >
      <div className="card-body ">
        <h6 className="text-center ml-5">Screen</h6>
        <div className="divider my-3"></div>
        <div className="row mb-4 text-center">
          <div className="col-md-6 align-self-center">
            {getOrdered && <RenderSeat start={1} end={7} />}
          </div>
          <div className="col-md-6 align-self-center">
            {getOrdered && <RenderSeat start={8} end={14} />}
          </div>
        </div>

        <h6>Seating Key</h6>
        <div className="seating-key">
          <div className="seating-item">
            <div className="seat-desktop"></div>
            <span>Available</span>
          </div>
          <div className="seating-item">
            <div className="seat-desktop selected"></div>
            <span>Selected</span>
          </div>
          <div className="seating-item">
            <div className="seat-desktop love"></div>
            <span>Love Nest</span>
          </div>
          <div className="seating-item">
            <div className="seat-desktop sold"></div>
            <span>Sold</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatDesktop;
