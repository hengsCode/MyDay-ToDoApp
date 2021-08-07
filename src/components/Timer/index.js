import { React, useState, useEffect } from "react";
import "./styles.css";
import HomeHeader from "../HomePage/HomeHeader";

const Timer = () => {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [start, setStart] = useState(false);

  // window.onbeforeunload = function () {
  //   if (hour !== "00" || minute !== "00" || second !== "00") {
  //     return "Your timer is running... are you sure you want to leave?";
  //   } else {
  //     return undefined;
  //   }
  // };

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        decrementSecond();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [second, start]);

  const decrementSecond = () => {
    var dec = second;
    if (second === "00") {
      if (minute !== "00" || hour !== "00") {
        dec = 59;
        decrementMinute();
      } else {
        reset();
      }
    } else {
      --dec;
    }
    setInterval(
      setSecond(
        parseInt(dec).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })
      ),
      1000
    );
  };

  const decrementMinute = () => {
    var dec = minute;
    if (minute === "00") {
      dec = 59;
      if (hour !== "00") {
        decrementHour();
      }
    } else {
      --dec;
    }
    setMinute(
      parseInt(dec).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })
    );
  };

  const decrementHour = () => {
    var dec = hour;
    if (hour !== "00") {
      --dec;
    } else {
      decrementMinute();
    }
    setHour(
      parseInt(dec).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })
    );
  };

  const startTimer = () => {
    if (hour !== "00" || minute !== "00" || second !== "00") {
      setStart(true);
    }
  };

  const pause = () => {
    setStart(false);
  };

  const reset = () => {
    setStart(false);
    setHour("00");
    setMinute("00");
    setSecond("00");
  };

  const handleHourChange = (e) => {
    setHour(
      parseInt(e.target.value).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })
    );
  };

  const handleMinuteChange = (e) => {
    setMinute(
      parseInt(e.target.value).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })
    );
  };

  const handleSecondChange = (e) => {
    setSecond(
      parseInt(e.target.value).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })
    );
  };
  return (
    <>
      <HomeHeader />
      <div className="timer-container">
        <div className="timer-header-container">
          <text className="timer-header">Study Timer</text>
          <text className="timer-selected-container">
            {`${hour}:${minute}:${second}`}
          </text>
          <div className="timer-buttons-container">
            <button
              className="timer-button"
              style={{
                background: "green",
              }}
              onClick={startTimer}
            >
              Start
            </button>
            <button
              className="timer-button"
              style={{ background: "grey" }}
              onClick={pause}
            >
              Pause
            </button>
            <button
              className="timer-button"
              style={{ background: "red" }}
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
        <form className="timer-selection-container">
          <label className="timer-selection-label">Hours</label>
          <input
            type="range"
            min={0}
            max={24}
            step={1}
            value={hour}
            onChange={handleHourChange}
            disabled={start}
          />
          <label className="timer-selection-label">Minutes</label>
          <input
            type="range"
            min={0}
            max={59}
            step={1}
            value={minute}
            onChange={handleMinuteChange}
            disabled={start}
          />
          <label className="timer-selection-label">Seconds</label>
          <input
            type="range"
            min={0}
            max={59}
            step={1}
            value={second}
            onChange={handleSecondChange}
            disabled={start}
          />
        </form>
      </div>
    </>
  );
};

export default Timer;
