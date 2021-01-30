import React from "react";

const { useState, useEffect } = React;

export default function TimeSpend() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p className="form-control-range">
        You have used <b>{counter}</b> seconds on this website
      </p>
    </div>
  );
}
