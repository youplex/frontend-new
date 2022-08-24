import React, { useRef, useState } from 'react';
import { VideoPlayer, Navbar, RichTextEditor } from '../components';
import { useSelector } from 'react-redux';
import { useSearchParams, useParams, Link} from 'react-router-dom';
import { useVideosQuery } from '../redux/services/playlistApi';
import { useVideoNotesQuery } from '../redux/services/noteApi';
import { EditorState, convertToRaw, convertFromRaw, Editor } from 'draft-js';
import { HiArrowNarrowLeft } from "react-icons/hi";
import { convertSecToHMS } from '../components/Notes';
import axios from 'axios';
import { toast } from 'react-toastify';

const VideoCourse = () => {
  const { token } = useSelector((state) => ({...state.auth}));
  const [ searchParams ] = useSearchParams();
  const { videoId } = useParams();
  const playlist = searchParams.get('playlist');
  const playerRef = useRef();
  const { data: { videos = []} = {}, refetch: videoRefetch} = useVideosQuery({token, playlistId: playlist});
  const { data: notes = [] , refetch: noteRefetch } = useVideoNotesQuery({ token, videoId });

  const videoIndex = videos.findIndex(vid => vid._id === videoId);
  const video = videos[videoIndex] || {};
  const upcomingVideos = videos.slice(videoIndex + 1, videoIndex + 4);

  const [noteLoading, setNoteLoading] = useState(false);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editorContent = convertToRaw(editorState.getCurrentContent());
    const title = editorContent.blocks[0].text; // setting first block as title
    if(!title) return;
    const content = JSON.stringify(editorContent);
   
    const timestamp = Math.floor(playerRef.current.getCurrentTime());
    if(!timestamp) return;
    setNoteLoading(true);
     try {
      const { data, status } = await axios.post('/note/create', {title, content, timestamp, noteFor: video._id }, {
        headers: {
          'x-auth-token': token
        }, withCredentials: true
      });
      if(status == 200){
        toast.success('Note saved');
        noteRefetch();
        setReadOnly(true);
      }
     } catch (error) {
        console.log(error);
     }finally{
      setNoteLoading(false);
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
    setNoteLoading(true);
    try {
      const { data, status } = await axios.put(`/note/${note_id}`, { title, content, timestamp }, {
        headers: {
          'x-auth-token': token
        }, withCredentials: true
      });
      if(status == 200){
        toast.success('Note updated');
        noteRefetch();
        resetEditor();
        setReadOnly(true);
      }
     } catch (error) {
        console.log(error);
     }finally{
      setNoteLoading(false);
     }
  }

  const handleNoteShow = (note) => {
    setReadOnly(false);
    setEditMode({ timestamp: note.timestamp, note_id: note._id });
    playerRef.current.seekTo(note.timestamp);
    setEditorState(() => EditorState.createWithContent(convertFromRaw(JSON.parse(note?.content))));
  }

  const handleDeleteNote = async (note) => {
    try {
      const { status } = await axios.delete(`/note/${note._id}`, {
        headers: {
          'x-auth-token': token
        }, withCredentials: true
      });
      if(status == 200){
        toast.success('Note deleted');
        noteRefetch();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const resetEditor = () => {
    setEditorState(() => EditorState.createEmpty());
    setEditMode(false);
  }

  const [editMode, setEditMode] = useState(false); // false or the time in seconds
  const [readOnly, setReadOnly] = useState(false);

  const [markLoading, setMarkLoading] = useState(false);

  const handleVideoDone = async () => {
    const { title, description, completed } = video;
      setMarkLoading(true);
      try {
        const { data, status } = await axios.put(`/video/${video._id}`, { 
          title, description, completed: !completed 
        }, { 
          headers: {
            'x-auth-token': token
        }, withCredentials: true 
        });

        if(status == 200){
          videoRefetch()
        }
        
      } catch (error) {
        console.log(error);
      }finally{
        setMarkLoading(false);
      }
  }

  const [isReadMore, setReadMore] = useState(false);
    return (
        <>
        
        <div >
          <Link to={`/playlist/${playlist}`}>
            <div className=" absolute top-4 left-24  max-h-full ">
              <HiArrowNarrowLeft  size={28}/>
            </div>
          </Link>
  
          <Navbar page={null} />
        </div>
  
        <div className="flex ml-24">
          <div className="container border-opacity-60 rounded-lg max-h-max ">
            <VideoPlayer videoId={video?.videoId} playerRef={playerRef} />
          </div>
  
          <div className="container w-4/5">
            {readOnly ?
            <div className="">
                <div style={{ background: 'whitesmoke', overflowY: 'auto', height: '453px' , maxHeight: "453px", width: '396px'}}>
              {notes.length < 1 && 
                <p className='p-4 text-lg'>
                  Create a note to view it <br />
                  No notes to see
                </p>}
              {
                notes?.map((note) => {
                  return (
                  <div key={note._id} className='bg-gray-200 mb-1' style={{  padding: '10px', marginLeft:'10px', maxHeight: '421px'}}>
                    <strong>{note.title} - {convertSecToHMS(note.timestamp)}</strong>
                    <div className="readonly-editor" >
                      <Editor 
                        editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(note.content)))} 
                        readOnly={true}
                      />
                    </div>
                    <div className="flex justify-end">
                      <button 
                        onClick={() => handleNoteShow(note)}
                        className='text-blue-700 border border-1 border-black rounded-md p-1 px-2'
                      >Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteNote(note)}
                        className='text-red-700 ml-5 border border-1 border-black rounded-md p-1 px-2'
                      >Delete
                      </button>
                    </div>
                  </div>
                  )
                })
              }
            </div>
            <div className="flex" style={{ width: '396px' }}>
              <button onClick={() => setReadOnly(false)} className='bg-primary text-white h-max py-1 px-4 rounded-lg mt-2 ml-auto'>
                Back to Editor
              </button>
            </div>
            </div>
            :
            <form onSubmit={handleSubmit}>
            <RichTextEditor editorState={editorState} setEditorState={setEditorState} />
            <div className='flex' style={{ width: '408px' }}>
              {editMode ?
              <>
              {noteLoading ? (
                <div className='bg-primary text-white h-max py-1 px-4 rounded-lg mt-2 ml-auto'>
                  Loading ...
                </div>
              ) : (
                <button type='button' onClick={handleUpdate} className='bg-primary text-white h-max py-1 px-4 rounded-lg mt-2 ml-auto'>
                  Update Note
                </button>
              )
              }
             
              <button type='button' onClick={() => {resetEditor(); setReadOnly(false)}} className='bg-primary text-white h-max py-1 px-4 rounded-lg mt-2 ml-auto'>
                Back to Editor
              </button>
              </>
              :
              <>
              {noteLoading? (
                <div className='bg-primary text-white h-max py-1 px-4 rounded-lg mt-2 ml-auto'>
                  Loading ...
                </div>
              ) : (
              <button className='bg-primary text-white h-max py-1 px-4 rounded-lg mt-2 ml-auto'>
                Save Note
              </button>
              )}
              </>
              }
            </div>
          </form>
            }
          </div>
        </div>

        <div className="flex mx-24 mt-2">
          <div className="bg-primary text-white h-max px-4 py-1 text-md rounded-md">
              <Link 
              to={`/schedule?summary=${video?.title}&description=Watch%20Video%20Link:%20${window.location.href}`}
              >Schedule</Link>
          </div>
          <button onClick={() => setReadOnly(true)} className={`bg-primary text-white h-max px-4 py-1 text-md rounded-md ml-16`}>
              View Saved Notes
          </button>

          {markLoading ? (
            <div className={`bg-primary text-white h-max px-4 py-1 text-md rounded-md ml-16`}>
              Loading ...
            </div>
          ) : (
            <button onClick={handleVideoDone} className={`${video?.completed ?  'bg-red-500' : 'bg-emerald-600'}  text-white h-max px-4 py-1 text-md rounded-md ml-16`}>
                Mark as {video?.completed && 'Not'} Done
            </button>
          )}
         
        </div>

        <div className=" description-width mx-24 flex  justify-between  mt-8">
          <div className='flex flex-col'>

            <h2 className="font-bold mb-2">{video?.title}</h2>
            <p className='max-w-3xl'>
              {isReadMore ?
                video?.description
              :
                video?.description?.length > 240 ? `${video?.description.substring(0, 239)}...` : video?.description 
              } <button onClick={() => setReadMore(prev => !prev)} className='text-blue-500'>Read {isReadMore ? 'Less' : 'More'}</button>
            </p>
          </div>
        </div>

       
        <div className="ml-24 mt-4">
          <h2 className="font-bold">Upcoming Videos</h2>
        </div>
  
        {/* Carousel */}
        <section className="text-gray-500 body-font">
          <div className=" ml-24 mr-12  py-2 ">
            <div className="flex mb-10">
            
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
                    <h1 className='text-center pt-2 h-16'>{video?.title}</h1>
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
