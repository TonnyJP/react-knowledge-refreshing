import React from 'react'
const ToggleChallenge = () => {
  const [bool, setBool] = React.useState(false);
  const [heading, setHeading] = React.useState("")

  const toggle = () => {
    if(bool){
      setHeading('')
      setBool((prev) => !prev);
      return
    }
    setHeading("Messsage is displayed")
    setBool((prev) => !prev);
  }
  console.log(bool)
  return (
    <>
    <div className={`alert ${bool? "alert-danger": "alert-success"}`}>
    {heading || "Message is now hidded"}
    </div>
    <button className="btn" onClick= {toggle}>{bool? "hide message" : "unhide message"}</button>
    <div>
    {bool && <div><h5>Message: </h5> Hello mother fucker</div>}
    </div>
    </>
  )
};

export default ToggleChallenge;
