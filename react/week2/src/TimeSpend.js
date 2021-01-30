import React from "react";

const { useState, useEffect } = React;

function TimeSpend() {
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
      <p class="form-control-range">
        You have used <b>{counter}</b> seconds on this website
      </p>
    </div>
  );
}

export default TimeSpend;
