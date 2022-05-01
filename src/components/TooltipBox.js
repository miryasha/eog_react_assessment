import React from "react";
var moment = require("moment");


  let style ={ 
    div1 : {
      position: "absolute",
      left: "60%",
      top: "200",
      color: "#9F9FA2",
      fontSize:"15px",
      opacity:".9",
     
    },
    div2 : {
      paddingLeft: "5px",
      height: "auto",
      backgroundColor: "white",
      border: "2px solid #96C8DA",
      width: "170px",
      borderRadius: "10px"
    },
    div3 : {
      margin: "3px",
      fontSize: "12px"
    },
    
    
  }

const TooltipBox = props => {
  
    return (
      <div style={style.div1}>
          {time}
          <div style={style.div}>
          </div>

      </div>
    );
  };


  export default props => { return <TooltipBox props={props} />;  };