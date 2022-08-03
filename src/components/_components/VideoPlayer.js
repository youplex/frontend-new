import React from 'react';
import ReactPlayer  from 'react-player';
import {VideoData} from './VideoData';

function VideoPlayer() {
  return (
    <div className='w-max h-max ml-52 mt-10 grid grid-cols-2 gap-4'>
        {
            VideoData.map((video,index)=>{
                return(
                    <div>
                         <ReactPlayer key={video.id} 
                         index={index}
                          url={video.url}
                          width='px'
                          height='320px'  />
                    </div>
                )
            })
        }

       


    </div>
  )
}

export default VideoPlayer;