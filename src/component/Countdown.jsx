import React, { useState, useEffect } from "react";
const COUNTDOWN_TARGET = new Date("2024-05-26T14:00:00");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center mt-4 mx-auto text-white">
        {Object.entries(timeLeft).map((element) => {
          const label = element[0];
          const value = element[1];
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label"> {label} </span>
            </div>
          );
        })}
        {/* <div className="box">
          <span className="countdown font-mono text-4xl">
            <span>{timeLeft.days}</span>
          </span>
          days
        </div>
        <div className="box">
          <span className="countdown font-mono text-4xl">
            <span>{timeLeft.hours}</span>
          </span>
          hours
        </div>
        <div className="box">
          <span className="countdown font-mono text-4xl">
            <span>{timeLeft.minutes}</span>
          </span>
          min
        </div>
        <div className="box">
          <span className="countdown font-mono text-4xl">
            <span>{timeLeft.seconds}</span>
          </span>
          sec
        </div> */}
      </div>
    </>
  );
};

export default Countdown;
