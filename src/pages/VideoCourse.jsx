import React, { useRef, useState } from 'react';
import { Sidebar, VideoPlayer, Navbar, RichTextEditor } from '../components';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useSearchParams, useParams, Link} from 'react-router-dom';
import { useVideosQuery } from '../redux/services/playlistApi';
import { useVideoNotesQuery } from '../redux/services/noteApi';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { HiArrowNarrowLeft } from "react-icons/hi";
import { convertSecToHMS } from '../components/Notes';
import axios from 'axios';

const VideoCourse = () => {
  const { token } = useSelector((state) => ({...state.auth}));
  const [ searchParams ] = useSearchParams();
  const { videoId } = useParams();
  const playlist = searchParams.get('playlist');
  const playerRef = useRef();
  const { data: { videos = []} = {}} = useVideosQuery({token, playlistId: playlist});
  const { data: notes = [] , refetch} = useVideoNotesQuery({ token, videoId });

  const videoIndex = videos.findIndex(vid => vid._id === videoId);
  const video = videos[videoIndex] || {};
  const upcomingVideos = videos.slice(videoIndex + 1, videoIndex + 4);

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const handleSubmit = async (e) => {
    e.preventDefault();
    const editorContent = convertToRaw(editorState.getCurrentContent());
    const title = editorContent.blocks[0].text; // setting first block as title
    if(!title) return;
    const content = JSON.stringify(editorContent);
   
    const timestamp = Math.floor(playerRef.current.getCurrentTime());
    if(!timestamp) return;
     try {
      const { data, status } = await axios.post('/note/create', {title, content, timestamp, noteFor: video._id }, {
        headers: {
          'x-auth-token': token
        }, withCredentials: true
      });
      if(status == 200){
        console.log(data);
        refetch();
      }
     } catch (error) {
        console.log(error);
     }
  };

  const handleUpdate = async () => {
    const editorContent = convertToRaw(editorState.getCurrentContent());
    const title = editorContent.blocks[0].text; // setting first block as title
    if(!title) return;
    const content = JSON.stringify(editorContent);
   
    const timestamp = editMode?.timestamp;
    const note_id = editMode?.note_id;

    if(!timestamp || !note_id) return;
    
    try {
      const { data, status } = await axios.put(`/note/${note_id}`, { title, content, timestamp }, {
        headers: {
          'x-auth-token': token
        }, withCredentials: true
      });
      if(status == 200){
        console.log(data);
        refetch();
        resetEditor();
      }
     } catch (error) {
        console.log(error);
     }
  }

  const handleNoteShow = (note) => {
    setEditMode({ timestamp: note.timestamp, note_id: note._id });
    playerRef.current.seekTo(note.timestamp);
    setEditorState(() => EditorState.createWithContent(convertFromRaw(JSON.parse(note?.content))));
  }

  const resetEditor = () => {
    setEditorState(() => EditorState.createEmpty());
    setEditMode(false);
  }

  const [editMode, setEditMode] = useState(false); // false or the time in seconds

    return (
        <>
        
        <div >
          <Link to="/home">
            <div className=" absolute top-4 left-24  max-h-full ">
              <HiArrowNarrowLeft  size={28}/>
            </div>
          </Link>
  
          <Navbar page={null} />
        </div>
  
        <div className="flex   ml-24  ">
          <div className="container border-opacity-60 overflow-clip rounded-lg max-h-max ">
            <VideoPlayer videoId={video?.videoId} playerRef={playerRef} />
          </div>
  
          <div className="container w-4/5">
            <form onSubmit={handleSubmit}>
              <RichTextEditor editorState={editorState} setEditorState={setEditorState} />
              <div className='flex'>
                {/* {editMode ?
                <>
                <button onClick={resetEditor} type='button' className='bg-primary text-white h-max py-2 px-5 mr-8 rounded-lg mt-1'>
                  Clear
                </button>
                <button type='button' onClick={handleUpdate} className='bg-primary text-white h-max py-2 px-5 mr-8 rounded-lg mt-1 ml-auto'>
                  Update
                </button>
                </>
                :
                <button className='bg-primary text-white h-max py-2 px-5 mr-8 rounded-lg mt-1 ml-auto'>
                  Submit
                </button>
                } */}
              </div>
            </form>
          </div>
        </div>
        <div className=" description-width mx-24 flex  justify-between  mt-8">
          <div className='flex flex-col'>

            <h2 className="font-bold mb-2">{video?.title}</h2>
            <p className=''>
              {video?.description?.length > 240 ? `${video?.description.substring(0, 239)}...` : video?.description }
            </p>
          </div>
  
          <div className="bg-primary text-white h-max px-4 py-1 text-md rounded-md">
            <Link 
            to={`/schedule?summary=${video?.title}&description=Watch%20Video%20Link:%20${window.location.href}`}
            >Schedule</Link>
          </div>
        </div>

        {/* <div  className='ml-24 mt-4' >
          <h1 className="font-bold">Notes</h1>
          {notes?.map((note) => {
            return (
              <span className='cursor-pointer' onClick={() => handleNoteShow(note)} key={note._id}>
                {convertSecToHMS(note?.timestamp)} - { note?.title} <br/>
              </span>
            )
          })}
        </div> */}
  
        <div className="ml-24 mt-4">
          <h2 className="font-bold">Upcoming Videos</h2>
        </div>
  
        {/* Carousel */}
        <section className="text-gray-600 body-font">
          <div className=" ml-24 mr-12  py-2 ">
            <div className="flex">
            
            {upcomingVideos?.map((video) => {
                return (
                <div key={video?._id} className=" md:w-1/3 mr-4  snap-center ">
                <Link to={`/video/${video?._id}?playlist=${playlist}`}>
                  <div className="h-max  border-2 border-gray-200 border-opacity-60 rounded-lg overflow-clip">
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
