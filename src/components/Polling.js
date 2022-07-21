import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Polling.css";

function Polling() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [rank1, setRank1] = useState(null);
  const [rank2, setRank2] = useState(null);
  const [rank3, setRank3] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("pollData"));
    setData(data);
  }, []);

  const rankone = (e) => {
    if (e !== rank2 && e !== rank3) {
      setRank1(e);
    }
  };

  const ranktwo = (e) => {
    if (e !== rank1 && e !== rank3) {
      setRank2(e);
    }
  };

  const rankthree = (e) => {
    if (e !== rank2 && e !== rank1) {
      setRank3(e);
    }
  };

  const pollhandler = () => {
    const updatedPoll = (e, val) => {
      if (data[e]?.point) {
        data[e].point = data[e].point + val;
      } else {
        data[e] = { ...data[e], point: val };
      }
    };
    updatedPoll(rank1 - 1, 30);
    updatedPoll(rank2 - 1, 20);
    updatedPoll(rank3 - 1, 10);
    localStorage.removeItem("pollData");

    localStorage.setItem("pollData", JSON.stringify(data));
    navigate("/result");
  };

  return (
    <div className="view-container">
      {rank1 !== null && rank2 !== null && rank3 !== null ? (
        <div>
          <button className="smt-btn" onClick={pollhandler}>
            Submit Poll
          </button>
        </div>
      ) : (
        " "
      )}

      <div className="dish">
        {data.length > 0
          ? data.map((item, index) => (
              <div key={index} className="itemCard">
                <div className="buttonWrapper">
                  <button
                    style={{
                      background:
                        item.id === rank1 ? "rgba(47, 244, 89, 0.75)" : "white",
                    }}
                    onClick={() => rankone(item.id)}
                  >
                    1
                  </button>
                  <button
                    style={{
                      background:
                        item.id === rank2 ? "rgba(47, 244, 89, 0.75)" : "white",
                    }}
                    onClick={() => ranktwo(item.id)}
                  >
                    2
                  </button>
                  <button
                    style={{
                      background:
                        item.id === rank3 ? "rgba(47, 244, 89, 0.75)" : "white",
                    }}
                    onClick={() => rankthree(item.id)}
                  >
                    3
                  </button>
                </div>
                <img src={item.image} alt="polling dish" />
                <h2>{item.dishName}</h2>
                <p>{item.description}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Polling;
