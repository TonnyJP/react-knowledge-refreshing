import React from "react";
import { useAppContext } from "./Context";

const TestComponent = () => {
    const { name, setName } = useAppContext()
    return (<>
      <h2>Test component</h2>
      <p>{name}</p>
    </>)
}

export default TestComponent