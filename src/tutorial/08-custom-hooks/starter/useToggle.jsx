import React from "react"

const useToggle = (defaultValue) => {
    const [ show, setShow ] = React.useState(defaultValue);
    const toggle = () => {
        setShow(!show);
    }
    return [show, toggle]
}

export default useToggle;