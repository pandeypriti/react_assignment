import React from "react";
import VideoItem from "./VideoItem";
import Grid from "@material-ui/core/Grid";

import Card from "./Card"

const VideoList = ({ videos, onVideoSelect }) => {
  if (!videos) {
    return <div>Loading...</div>;
  }
  const videoItems = videos.map((video) => {
    return (
      <Card
        onVideoSelect={onVideoSelect}
        key={video.id + Math.random() * 1000}
        video={video}
      />
    );
  });

  return (
    <Grid container spacing={3} className="container">
      {videoItems}
    </Grid>
  );
};

export default VideoList;
