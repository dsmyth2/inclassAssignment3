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
    <body className="bg-dark min-vh-100 d-flex align-items-center">
      <div className="body-wrapper d-flex flex-column align-items-center min-vw-100">
        <p className="border border-rounded py-1 px-4 text-light counter h1 mb-5">
          {count}
        </p>
        <div className="buttons ">
          <button
            className="btn btn-primary btn-lg px-4 mx-5"
            name="decrement-button"
            onClick={decrement}
          >
            -
          </button>
          <button
            className="btn btn-primary btn-lg px-4 mx-5"
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
