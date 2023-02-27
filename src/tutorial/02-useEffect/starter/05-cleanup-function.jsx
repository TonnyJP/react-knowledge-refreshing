import React from "react";

const Component = () => {
  React.useEffect(() => {
    console.log("Component rendered")
    const interval = setInterval(() => {
      console.log("hm... interesting")
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  },[])

  return(<div>
  <h4>Hello motto</h4>
  </div>)
}

const CleanupFunction = () => {
  const [ value, setValue ] = React.useState(false)
  console.log(value)

  return (<>
  <button className="btn" onClick={() => setValue((!value))} >click</button>
  {value && <Component />}
  </>)
};

export default CleanupFunction;
