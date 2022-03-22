import React from 'react';
import {useLocation } from 'react-router-dom';
import axios from "axios";
import "../App.css"
const baseURL = "https://eb69c8de-c627-47d4-b0bd-246d961cbfd3.mock.pstmn.io/youtube/id";
const VideoPlayer = ({ }) => {
  const [post, setPost] = React.useState(null);
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  
  React.useEffect(() => {
    axios.get(`${baseURL}?id=id`).then((response) => {
      setPost(response.data);
    });
  }, []);

  

  if (!post) return null;
  var url = post.link.replace("watch?v=", "embed/");

  

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
      <iframe src={`${url}?autoplay=0&mute=1`} width="100%" height="600" frameBorder="0" align="center"></iframe>
      </div>
      <div className="details">
        <div className="title">{post.title}</div>
        <div  className="description">Description: &nbsp;{post.description}</div>
        <div  className="description">Subject: &nbsp;{post.subject}</div>
        <div  className="description">Status: &nbsp;{post.status}</div>
        <div  className="description">Tags: &nbsp;{post.tags}</div>
      </div>
    </div>
  );
}

export default VideoPlayer;
