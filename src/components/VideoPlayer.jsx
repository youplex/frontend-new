import ReactPlayer from "react-player";

import React from 'react'

function VideoPlayer({ videoId, playerRef }) {
  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width="640px"
        height="360px"
        controls={true}
      />
    </div>
  )
}

export default VideoPlayer