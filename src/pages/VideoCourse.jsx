import React, { useState } from 'react';
import { Sidebar, VideoPlayer } from '../components';
import {Navbar} from '../components';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RichTextEditor } from "../components";
import { useSelector } from 'react-redux';
import { useSearchParams, useParams } from 'react-router-dom';
import { useVideosQuery } from '../redux/services/playlistApi';
import { useVideoNotesQuery } from '../redux/services/noteApi';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import axios from 'axios';

const VideoCourse = () => {
  const { token } = useSelector((state) => ({...state.auth}));
  const [ searchParams ] = useSearchParams();
  const { videoId } = useParams();
  const playlist = searchParams.get('playlist');
  const { data: { videos = []} = {}} = useVideosQuery({token, playlistId: playlist});
  const { data: notes = [] } = useVideoNotesQuery({ token, videoId });

  const videoIndex = videos.findIndex(vid => vid._id === videoId);
  const video = videos[videoIndex] || {};
  const upcomingVideos = videos.slice(videoIndex + 1, videoIndex + 4);

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
     try {
      const { data, status } = await axios.post('/note/create', { title :"Demo", content, timestamp: 10.50, noteFor: video._id }, {
        headers: {
          'x-auth-token': token
        }, withCredentials: true
      });
      if(status == 200){
        console.log(data);
      }
     } catch (error) {
        console.log(error);
     }
  }

  const handleNoteShow = (note) => {
    setEditorState(() => EditorState.createWithContent(convertFromRaw(JSON.parse(note?.content))));
  }
    return (
        <>
        <Sidebar />
        <div>
          <Link to="/home">
            <div className=" absolute top-8 left-44 max-h-full ">
              <AiOutlineArrowLeft />
            </div>
          </Link>
  
          <Navbar page="Go Back to Playlists" />
        </div>
  
        <div className="flex  ml-48 max-h-max mr-12 ">
          <div className="container mr-5 max-h-max ">
            <VideoPlayer videoId={video?.videoId} />
          </div>
  
          <div className="container w-4/5">
            <form onSubmit={handleSubmit}>
              <RichTextEditor editorState={editorState} setEditorState={setEditorState} />
              <div className='flex'>
              <button className='bg-primary text-white h-max py-2 px-5 mr-8 rounded-lg mt-1 ml-auto'>
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" ml-48 flex justify-between mr-16 mt-4">
          <div>
            <h2 className="font-bold">{video?.title}</h2>
            <p className='pr-4'>
              {video?.description?.length > 280 ? `${video?.description.substring(0, 247)}...` : video?.description }
            </p>
          </div>
  
          <div className="bg-primary text-white h-max py-1 px-4 mr-1 rounded-lg">
            <Link to="/schedule">Schedule</Link>
          </div>
        </div>

        <div  className='ml-48 mt-4' >
          <h1 className="font-bold">Notes</h1>
          {notes?.map((note) => {
            return (
              <div className='cursor-pointer' onClick={() => handleNoteShow(note)} key={note._id}>
                {note?.timestamp?.toFixed(2)}
              </div>
            )
          })}
        </div>
  
        <div className="ml-48 mt-4">
          <h2 className="font-bold">Upcoming Videos</h2>
        </div>
  
        {/* Carousel */}
        <section className="text-gray-600 body-font">
          <div className=" ml-48 mr-12 px-5 py-12 ">
            <div className="flex  -m-4 snap-x">
            
            {upcomingVideos?.map((video) => {
                return (
                <div key={video?._id} className="p-4 md:w-1/3 snap-center ">
                <Link to={`/video/${video?._id}?playlist=${playlist}`}>
                  <div className="h-max border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={video?.thumbnail || "https://dummyimage.com/720x400"}
                      alt="blog"
                    />
                  </div>
                </Link>
                </div> 
                )
              })}

            </div>
          </div>
        </section>
      </>
    );
    
}

export default VideoCourse;