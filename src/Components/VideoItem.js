import React from 'react';
import Grid from "@material-ui/core/Grid";

const VideoItem = ({ video, onVideoSelect }) => {
  

  return(
    <Grid item  className="list-group-item" onClick={() => { onVideoSelect(video) }}>
      <div className="video-list media">
        <div className="media-left">
        <iframe src="https://www.youtube.com/embed/SjVwyhbUUXE?autoplay=0&mute=1" width="420" height="315" frameBorder="0" align="center"></iframe>
        </div>
        <div className="media-body">
          <div className="media-heading">{video?.title}</div>
        </div>
      </div>
    </Grid>
  );
}

export default VideoItem;
