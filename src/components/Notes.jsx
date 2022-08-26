import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  PencilIcon,
  DotsVerticalIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { RichTextEditor } from '../components';
import { convertFromRaw, convertToRaw, Editor, EditorState } from 'draft-js';
import axios from "axios";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

export const convertSecToHMS = (time_in_seconds) => {
  let remainingSeconds = time_in_seconds; // initialize with total time
  const hours = Math.floor(remainingSeconds / (60 * 60));
  remainingSeconds = time_in_seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const formatTime = (t) => t.toString().padStart(2, 0);

  const out = [];
  if (hours > 0) out.push(formatTime(hours));
  out.push(formatTime(minutes));
  out.push(formatTime(seconds));

  return out.join(":");
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Notes({ data = [], refetchNotes = () => {} }) {
  const { token } = useSelector((state) => ({ ...state.auth }));
  const [editMode, setEditMode] = useState(false);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const setupEditMode = (note) => {
    setEditMode(note);
    setEditorState(() => EditorState.createWithContent(convertFromRaw(JSON.parse(note?.content))))
  }

  const handleUpdateNote = async () => {
    const editorContent = convertToRaw(editorState.getCurrentContent());
    const title = editorContent.blocks[0].text; // setting first block as title
    if(!title) return;
    const content = JSON.stringify(editorContent);
   
    const timestamp = editMode?.timestamp;
    const note_id = editMode?._id

    if(!timestamp || !note_id) return;
    try {
      const { status } = await axios.put(`/note/${note_id}`, { title, content, timestamp }, {
        headers: {
          'x-auth-token': token
        }, withCredentials: true
      });
      if(status == 200){
        toast.success('Note updated');
        refetchNotes();
        setEditMode(false);
      }
     } catch (error) {
        console.log(error);
     }
  }

  const handleDeleteNote = async (noteId) => {
    try {
      const { status } = await axios.delete(`/note/${noteId}`, {
        headers: {
          'x-auth-token': token
        }, withCredentials: true
      });
      if(status == 200){
        toast.success('Note deleted');
        refetchNotes();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative px-4 py-5 sm:px-6 ml-40 w-4/5 rounded-md">
      {editMode && (
        <div className="modal sticky top-1/2 px-10 z-50">
          <div className="model-editor flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <RichTextEditor
              editorState={editorState} 
              setEditorState={setEditorState}
            />
            <div className="flex justify-end gap-4 mt-1">
            <button onClick={handleUpdateNote} className='bg-primary text-white h-max py-1 px-4 rounded-lg mt-2'>
                    Update Note
            </button>
            <button onClick={() => setEditMode(false)} className='bg-primary text-white h-max py-1 px-4 rounded-lg mt-2 pinter-cursor'>
                    Back
            </button>
            </div>
          </div>
        </div>
      )}
      

      {data?.length < 1 && (<h1 className="text-lg">No notes created</h1>)}

      {data?.map((note) => {

        return (
        <div key={note._id} className="bg-gray-200  p-4 flex space-x-3 mb-6">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium text-gray-900">
            <Link to={note?.pageURL ? note?.pageURL  : `/video/${note?.inVideo?._id}?playlist=${note?.inPlaylist?._id}`} className="hover:underline">
              {note?.inVideo?.title || note?.title} - {convertSecToHMS(note?.timestamp)}
            </Link>
          </h1>
          <p className="text-sm text-bg mt-2">
              {new Date(note?.createdAt).getDate()}/
              {new Date(note?.createdAt).getMonth()}/
              {new Date(note?.createdAt).getFullYear()}
          </p>
          <div className="mt-4 leading-6 readonly-editor">
              <Editor 
                editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(note.content)))} 
                readOnly={true}
              />
          </div>
        </div>
        <div className="flex-shrink-0 self-top flex">
          <Menu as="div" className="relative z-30 inline-block text-left">
            <div>
              <Menu.Button onClick={() => setEditMode(false)} className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                <span className="sr-only">Open options</span>
                <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item onClick={() => setupEditMode(note)}>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex px-4 py-2 text-sm"
                        )}
                      >
                        <PencilIcon
                          className="mr-3 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>Edit</span>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item onClick={() => handleDeleteNote(note._id)}>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex px-4 py-2 text-sm"
                        )}
                      >
                        <TrashIcon
                          className="mr-3 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>Delete</span>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
        )
      })}
    </div>
  );
}
