import { React, useState } from "react";
import { Link } from "react-router-dom";

function CardMovie({ movie, cardType }) {
  let [show, setShow] = useState(false);
  let [display, setDisplay] = useState("d-none");
  const handleShow = () => {
    if (!show) {
      setDisplay(" ");
      setShow(!show);
    } else {
      setDisplay("d-none");
      setShow(!show);
    }
  };

  return (
    <div key={movie.id_movie} className="card" onClick={() => handleShow()}>
      <div className="card-upcoming-movie">
        <img src={movie.image} alt={movie.image} />
        {cardType === "autoShow" ? (
          <>
            <p
              className={`card-title mb-3`}
              // eslint-disable-next-line
              style={{ ["fontSize"]: "13px" }}
            >
              {movie.movie_title}
            </p>
            <span
              className={`card-text`}
              // eslint-disable-next-line
              style={{ ["fontSize"]: "11px" }}
            >
              {movie.genre}
            </span>
            <Link
              to={`/detail/${movie.id_movie}`}
              className={`btn btn-details`}
            >
              Details
            </Link>
          </>
        ) : (
          <>
            <p
              className={`card-title mb-3 ${display}`}
              // eslint-disable-next-line
              style={{ ["fontSize"]: "13px" }}
            >
              {movie.movie_title}
            </p>
            <span
              className={`card-text ${display}`}
              // eslint-disable-next-line
              style={{ ["fontSize"]: "11px" }}
            >
              {movie.genre}
            </span>
            <Link
              to={`/detail/${movie.id_movie}`}
              className={`btn btn-details ${display}`}
            >
              Details
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

CardMovie.defaultProps = {
  cardType: "autoShow",
};
export default CardMovie;
