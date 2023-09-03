import { useState, useEffect } from "react";
import "./ListItem.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  // ---item prop is just an ID of Movies so we need to create a function fetch a movie on the basis of ID
  const [isHover, setIsHover] = useState(false);
  const [Movie, setMovie] = useState({});



  useEffect(() => {
    const getMoviesById = async () => {
      await axios
        .get(`movies/find/${item}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWFmOTEwNWI5MDdlYjBkMDdkN2I4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MzQ1OTY0OSwiZXhwIjoxNjkzODkxNjQ5fQ.3rL_sEDOgH8ZPrcIbCWtRBNLSrprzLQQjuJ-g37V3VI",
          },
        })
        .then((movie) => {
          setMovie(movie.data.Movie);
        }).catch((err)=>{
          console.log(err);
        })
    };
    return () => {
      getMoviesById();
    };
  }, [item]);

  return (
    <Link to='/watch' state={{Movie:Movie}}>
      <div
        className="listItem"
        style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={Movie.img} alt="" />
        {isHover ? (
          <>
            <video src={Movie.trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
              <div className="icons"></div>
              <div className="itemInfoTop">
                <span>
                  {Movie.duration ? Movie.duration : "1 hour 14 mins"}
                </span>
                <span className="limit">
                  {Movie.limit ? Movie.limit : "+16"}
                </span>
                <span>{Movie.year ? Movie.year : "1999"}</span>
              </div>
              <div className="desc">
                {Movie.desc
                  ? Movie.desc
                  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, labore facilis perferendis est placeat vitae praesentium. Beatae corporis commodi praesentium ad rem distinctio, delectus minima nemo perferendis optio animi quis!"}
              </div>
              <div className="action">
                {Movie.genre ? Movie.genre : "Action"}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
