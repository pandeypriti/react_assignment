import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom';


import "../App.css"

const styles = {
  fdCardMedium:{
    width:"30%",
    cursor:"pointer",
    height:"171px"
  }
}

const Card = (props) => {
  const {classes} =props
  const history = useNavigate();
  return (
    <div className={`fd-card ${classes.fdCardMedium}`}
    onClick={() =>
        history(
          `/video?id=${props.video.id}`
        )
      }>
      <div className="fd-card-title" style={{padding: '0 12px'}}>Title: &nbsp;{props.video.title}</div>
      <div className="fd-card-count">Subject: &nbsp;{props.video.subject}</div>
      <div className="fd-card-count">Description: &nbsp;{props.video.description}</div>
    </div>
  );
};


export default withStyles(styles)(Card);