import ReactPlayer from "react-player";

import React from 'react'

function VideoPlayer() {
  return (
    <div>
         
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Rq5SEhs9lws"
        width="640px"
        height="360px"
        controls={true}
      />
    
    </div>
  )
}

export default VideoPlayer