import React from "react";
const UseStateGotcha = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prev) => prev+1)
    setTimeout(() => {
      console.log("snot elang")
    }, 3000)
  }
  return (<>
  <h3>{count}</h3>
  <button className="btn" onClick={handleClick}>increase</button>
  </>)
};

export default UseStateGotcha;
