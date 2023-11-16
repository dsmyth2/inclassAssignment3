import React from "react";

const counter = () => {
  const [count, setCount] = React.useState(0);

  function decrement(e) {
    setCount(count - 1);
  }

  function increment(e) {
    setCount(count + 1);
  }
  return (
    <body className="bg-secondary min-vh-100 d-flex align-items-center">
      <div className="body-wrapper bg-light d-flex flex-column align-items-center m-auto p-4 border border-2 border-primary rounded">
        <h1 className="h1 text-dark py-2">Counter App</h1>
        <p className="border border-primary border-2 rounded py-1 px-4 text-dark counter h1 mb-5">
          {count}
        </p>
        <div className="buttons ">
          <button
            className="btn btn-primary btn-lg px-4 mx-5 fs-3"
            name="decrement-button"
            onClick={decrement}
          >
            -
          </button>
          <button
            className="btn btn-primary btn-lg px-4 mx-5 fs-3"
            name="increment-button"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </body>
  );
};

export default counter;
