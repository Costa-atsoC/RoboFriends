import React from "react";

const Scrool = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '10px solid black', height: '800px' }}>
      {props.children}
    </div>
  )
}

export default Scrool;