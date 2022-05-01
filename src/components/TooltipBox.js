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
    if (props.props.tooltipInfo === null || props.props.tooltipInfo.length === 0){return null}
    let time = moment(parseInt(props.props.tooltipInfo.activePayload[0].payload.name)).format("lll")
    return (
      <div style={style.div1}>
          {time}
          <div style={style.div2}>
            {
              props.props.tooltipInfo.activePayload.map(a=>{
                return (
                  <p key= {a.dataKey} style={style.div3}>{a.dataKey}: {a.value}</p>
                )
              })
            }
          </div>

      </div>
    );
  };


  export default props => { return <TooltipBox props={props} />;  };