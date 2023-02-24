import React from "react";
const ErrorExample = () => {
  const [count, setCount] = React.useState(0);
  const onClick = (e) => {
    //e.preventDefault();
    setCount((prev) => prev +1)
  }
  return (<>
  <h3>Count : {count}</h3>
  <button onClick={onClick} className="btn">Increase Count</button>
  </>)
};

export default ErrorExample;
